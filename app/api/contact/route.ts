import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Permintaan tidak valid." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company ?? "");

  // Honeypot: bot biasanya mengisi field tersembunyi ini.
  if (honeypot) return NextResponse.json({ ok: true });

  if (name.length < 2 || name.length > 100)
    return NextResponse.json({ error: "Nama minimal 2 karakter." }, { status: 400 });
  if (!EMAIL_RE.test(email) || email.length > 200)
    return NextResponse.json({ error: "Format email tidak valid." }, { status: 400 });
  if (message.length < 10 || message.length > 5000)
    return NextResponse.json(
      { error: "Pesan minimal 10 karakter." },
      { status: 400 },
    );

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] (dev, email belum dikonfigurasi)", { name, email, message });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: "Layanan email belum dikonfigurasi. Silakan hubungi lewat email langsung." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Pesan baru dari ${name} (Portofolio)`,
      html: `<p><strong>Nama:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Pesan:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return NextResponse.json(
      { error: "Gagal mengirim pesan. Coba lagi sebentar." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-2xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus-visible:ring-2 focus-visible:ring-ring/40";

const socials = [
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: Instagram },
  { label: "WhatsApp", href: siteConfig.socials.whatsapp, icon: MessageCircle },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Terjadi kesalahan.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Terjadi kesalahan.");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Mari bangun sesuatu <span className="italic text-primary">bersama</span>
            </>
          }
          description="Terbuka untuk posisi full-time, magang, maupun proyek freelance. Ceritakan kebutuhanmu, saya balas dalam 1×24 jam."
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="bento-card flex h-full flex-col justify-between gap-10">
              <div className="space-y-5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-lg transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  {siteConfig.email}
                </a>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  {siteConfig.location}
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition-colors hover:border-primary/60 hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="bento-card space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm">
                    Nama
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    autoComplete="name"
                    placeholder="Nama lengkap"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="nama@perusahaan.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Honeypot anti-spam: disembunyikan dari pengguna */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={6}
                  placeholder="Ceritakan singkat tentang proyek atau peluangnya…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" size="lg" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Mengirim…
                    </>
                  ) : (
                    <>
                      Kirim Pesan <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>

                <p role="status" aria-live="polite" className="text-sm">
                  {status === "success" && (
                    <span className="flex items-center gap-2 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                      Terima kasih! Pesanmu sudah terkirim.
                    </span>
                  )}
                  {status === "error" && <span className="text-red-500">{error}</span>}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

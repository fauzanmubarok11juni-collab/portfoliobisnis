# Portofolio Bisnis — Corporate Sleek & High-End Editorial

Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui (Radix) · Framer Motion · Lucide

## Menjalankan di komputer

```bash
npm install
cp .env.example .env.local   # lalu isi nilainya
npm run dev                  # http://localhost:3000
```

Perlu Node.js 18.17 atau lebih baru.

## Mengganti konten

Semua teks, angka, studi kasus, timeline, dan testimoni ada di satu file: **`lib/data.ts`**.
Semua data di sana hanyalah contoh, ganti dengan data aslimu. Tidak perlu menyentuh komponen.

| Yang ingin diubah | Lokasi |
|---|---|
| Nama, email, link sosial, deskripsi SEO | `siteConfig` di `lib/data.ts` |
| Headline hero | `hero` |
| Angka count-up | `metrics` (`value`, `prefix`, `suffix`, `decimals`) |
| Kartu bento expertise | `expertise` |
| Studi kasus + kategori filter | `caseStudies`, `categories` |
| Pengalaman & pendidikan | `timeline` |
| Testimoni | `testimonials` |
| Warna | variabel CSS di `app/globals.css` (`--primary` = emas) |

Ingin aksen **Emerald Green**? Ubah `--primary` di `app/globals.css`:
`.dark` → `--primary: 152 50% 52%;` dan `:root` → `--primary: 158 64% 28%;`.

## Setup form kontak (wajib sebelum go-live)

Form memanggil `app/api/contact/route.ts`, yang mengirim email lewat [Resend](https://resend.com) (gratis 3.000 email/bulan).

1. Daftar di resend.com, buat **API Key**.
2. Isi environment variable: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
3. Tanpa variabel ini, di production form akan menampilkan pesan error (bukan pura-pura sukses). Di mode dev, pesan hanya dicetak ke terminal.

Tersedia juga honeypot anti-spam dan validasi sisi server.

## Deploy ke Vercel (paling mudah, gratis)

**Lewat dashboard (disarankan):**

1. Push proyek ke GitHub:
   ```bash
   git init && git add . && git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/portfolio.git
   git push -u origin main
   ```
2. Buka [vercel.com/new](https://vercel.com/new), login dengan GitHub, **Import** repo tersebut.
3. Di bagian **Environment Variables**, tambahkan:
   - `NEXT_PUBLIC_SITE_URL` = URL final, mis. `https://namakamu.vercel.app`
   - `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
4. Klik **Deploy**. Setiap `git push` berikutnya otomatis ter-deploy ulang.

**Lewat CLI:**

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

**Domain sendiri:** Vercel → Project → *Settings → Domains* → tambahkan domain, ikuti instruksi DNS. Setelah aktif, perbarui `NEXT_PUBLIC_SITE_URL` lalu redeploy agar sitemap, canonical, dan Open Graph benar.

## Checklist SEO setelah live

- [ ] `NEXT_PUBLIC_SITE_URL` sudah diisi URL final
- [ ] Daftarkan situs di [Google Search Console](https://search.google.com/search-console) dan submit `/sitemap.xml`
- [ ] Uji pratinjau share di LinkedIn Post Inspector (gambar OG dibuat otomatis di `app/opengraph-image.tsx`)
- [ ] Jalankan Lighthouse (target 90+ di semua kategori)

## Struktur proyek

```
app/
  layout.tsx            font, metadata SEO, JSON-LD
  page.tsx              menyusun semua section
  globals.css           tema terang/gelap (CSS variables)
  sitemap.ts · robots.ts · opengraph-image.tsx
  api/contact/route.ts  endpoint form kontak
components/
  sections/             hero, metrics, expertise, case-studies,
                        experience, testimonials, contact
  ui/                   button, badge, dialog (gaya shadcn/ui)
  count-up.tsx · reveal.tsx · navbar.tsx · footer.tsx · theme-*.tsx
lib/
  data.ts               ← semua konten
  utils.ts
```

## Catatan

- Mode gelap adalah default; pengunjung bisa beralih lewat tombol di navbar.
- Animasi menghormati pengaturan `prefers-reduced-motion`.
- Opsional: tambahkan tombol "Download CV" dengan menaruh `cv.pdf` di folder `public/` dan menautkannya dari hero.

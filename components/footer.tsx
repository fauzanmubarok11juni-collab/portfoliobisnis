import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="font-serif italic">Strategy, informed by data.</p>
      </div>
    </footer>
  );
}

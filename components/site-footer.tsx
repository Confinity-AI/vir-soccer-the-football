import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--vir-ink)] py-12 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.08em] text-white">
            VIR SOCCER
          </p>
          <p className="mt-2 text-sm text-[var(--vir-gold)]">The Football</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Development-first training for players who want to grow with the ball
            — and beyond it.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-[var(--vir-gold)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-[var(--vir-gold)]">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--vir-gold)]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <p className="mt-4 text-sm">
            info@virsoccer.example
            <br />
            <span className="text-white/50">(replace with your real address)</span>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-8 text-center text-xs text-white/40 sm:px-6 sm:text-left">
        © {new Date().getFullYear()} VIR Soccer Academy. All rights reserved.
      </div>
    </footer>
  );
}

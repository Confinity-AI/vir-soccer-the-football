import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, philosophy, and what makes VIR Soccer Academy different.",
};

export default function AboutPage() {
  return (
    <div className="bg-pitch-pattern">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--vir-green)]">
          About
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl tracking-wide text-[var(--vir-ink)] sm:text-6xl">
          We develop people first
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-[var(--vir-muted)]">
          VIR Soccer — <em>The Football</em> — is built on a simple belief: the
          game reveals character. Our coaches design sessions that demand focus,
          creativity, and teamwork, because those traits transfer far beyond the
          final whistle.
        </p>
        <div className="mt-12 space-y-8 text-[var(--vir-muted)] leading-relaxed">
          <p>
            <strong className="text-[var(--vir-ink)]">Development over trophies.</strong>{" "}
            Winning matters — but sustainable success comes from habits,
            fundamentals, and a growth mindset instilled early.
          </p>
          <p>
            <strong className="text-[var(--vir-ink)]">Clarity in coaching.</strong>{" "}
            Players hear consistent language across age groups, so skills stack
            year over year instead of resetting each season.
          </p>
          <p>
            <strong className="text-[var(--vir-ink)]">Families as partners.</strong>{" "}
            We communicate schedules, progress, and expectations clearly — you
            should always know what we are building together.
          </p>
        </div>
      </div>
    </div>
  );
}

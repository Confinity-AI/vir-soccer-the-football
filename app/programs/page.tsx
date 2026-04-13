import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description: "Youth development, competitive tracks, camps, and goalkeeper training.",
};

const programs = [
  {
    name: "Foundation (U8–U12)",
    detail:
      "Ball mastery, 1v1 courage, and small-sided games that teach spacing and pressure in real game moments.",
  },
  {
    name: "Performance (U13–U16)",
    detail:
      "Faster tempo, tactical themes, and athletic development blocks aligned with high-school competition.",
  },
  {
    name: "College pathway (U17–U19)",
    detail:
      "Video review, position-specific labs, and leadership training for players targeting the next level.",
  },
  {
    name: "Camps & clinics",
    detail:
      "Holiday intensives and topic clinics (finishing, pressing, distribution) — open to members and guests.",
  },
  {
    name: "Goalkeepers",
    detail:
      "Dedicated GK curriculum: footwork, distribution, shot-stopping, and organizing the defense.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-pitch-pattern">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--vir-green)]">
          Programs
        </p>
        <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-bebas)] text-5xl tracking-wide text-[var(--vir-ink)] sm:text-6xl">
          Something for every stage
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--vir-muted)]">
          Replace the copy below with your real curriculum from your v0 export or
          club handbook — this page is structured so you can drop sections in
          without restructuring the site.
        </p>
        <ul className="mt-14 space-y-6">
          {programs.map((p) => (
            <li
              key={p.name}
              className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
            >
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-[var(--vir-green)]">
                {p.name}
              </h2>
              <p className="mt-3 text-[var(--vir-muted)] leading-relaxed">
                {p.detail}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-16 rounded-2xl bg-[var(--vir-green)] px-8 py-10 text-center text-white">
          <p className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide sm:text-4xl">
            Ready to try a session?
          </p>
          <p className="mt-3 text-white/80">
            Tell us your player&apos;s age and position — we&apos;ll recommend the
            right program.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[var(--vir-gold)] px-10 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--vir-ink)] transition hover:bg-[#ddb52e]"
          >
            Contact the club
          </Link>
        </div>
      </div>
    </div>
  );
}

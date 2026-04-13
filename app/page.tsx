import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-pitch-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--vir-green)] via-[#0f3d28] to-[var(--vir-ink)]" />
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(255,255,255,0.03) 48px, rgba(255,255,255,0.03) 50px)",
            }}
          />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:py-28">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--vir-gold)]">
              The Football
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl leading-none tracking-wide text-white sm:text-7xl">
              Train with purpose.
              <br />
              Compete with courage.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              VIR Soccer Academy blends technical mastery, athletic development,
              and character — so every player grows on the pitch and in life.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full bg-[var(--vir-gold)] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--vir-ink)] transition hover:bg-[#ddb52e]"
              >
                View programs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                Book a trial
              </Link>
            </div>
          </div>
          <div className="grid w-full max-w-md gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:max-w-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest text-white/60">
                Next intake
              </span>
              <span className="rounded-full bg-[var(--vir-gold)]/20 px-3 py-1 text-xs font-medium text-[var(--vir-gold)]">
                Open
              </span>
            </div>
            <dl className="space-y-3 text-sm text-white/90">
              <div className="flex justify-between gap-4">
                <dt className="text-white/50">Spring block</dt>
                <dd className="font-medium">March — June</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/50">Ages</dt>
                <dd className="font-medium">U8 — U19</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/50">Locations</dt>
                <dd className="text-right font-medium">
                  Turf + grass fields
                  <br />
                  <span className="text-white/50">(update in Contact)</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            {
              title: "Player pathway",
              body: "Age-appropriate curricula that connect fundamentals, decision-making, and athleticism — week after week.",
            },
            {
              title: "Pro-minded coaching",
              body: "Staff who teach the why behind every drill, so players own their development.",
            },
            {
              title: "Club culture",
              body: "Respect, resilience, and joy for the game — the standards we train every session.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
            >
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-[var(--vir-green)]">
                {card.title}
              </h2>
              <p className="mt-4 text-[var(--vir-muted)] leading-relaxed">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-[var(--vir-ink)] sm:text-5xl">
                Built for modern players
              </h2>
              <p className="mt-4 max-w-xl text-lg text-[var(--vir-muted)]">
                Small-sided games, video feedback blocks, and position-specific
                work — structured so players stay challenged, not overwhelmed.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-[var(--vir-green)] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--vir-green)] transition hover:bg-[var(--vir-green)] hover:text-white"
            >
              Our philosophy
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Technical mastery blocks",
              "Speed & agility labs",
              "Game IQ & film",
              "Goalkeeper specialty",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[var(--vir-green)]/20 bg-[var(--vir-pitch)] px-5 py-6 text-center text-sm font-semibold text-[var(--vir-ink)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <blockquote className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-[var(--vir-ink)] sm:text-2xl">
          “The ball is the teacher — we just design the environment where players
          learn faster.”
        </blockquote>
        <p className="mt-6 text-sm uppercase tracking-widest text-[var(--vir-muted)]">
          — VIR Soccer coaching staff
        </p>
      </section>
    </>
  );
}

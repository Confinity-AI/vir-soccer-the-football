import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach VIR Soccer Academy for trials, schedules, and questions.",
};

export default function ContactPage() {
  return (
    <div className="bg-pitch-pattern">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--vir-green)]">
          Contact
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl tracking-wide text-[var(--vir-ink)] sm:text-6xl">
          Let&apos;s talk football
        </h1>
        <p className="mt-6 text-lg text-[var(--vir-muted)]">
          Update these fields with your real club email, phone, and field
          addresses after you merge in your v0 export or club details.
        </p>

        <dl className="mt-12 space-y-6 rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--vir-muted)]">
              Email
            </dt>
            <dd className="mt-1 text-lg text-[var(--vir-ink)]">
              info@virsoccer.example
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--vir-muted)]">
              Phone
            </dt>
            <dd className="mt-1 text-lg text-[var(--vir-ink)]">
              (555) 010-2030
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--vir-muted)]">
              Training locations
            </dt>
            <dd className="mt-1 text-[var(--vir-muted)] leading-relaxed">
              Main pitch — update address
              <br />
              Secondary venue — update address
            </dd>
          </div>
        </dl>

        <p className="mt-10 text-sm text-[var(--vir-muted)]">
          <strong className="text-[var(--vir-ink)]">Note:</strong> This page is
          static for fast hosting. Wire a form to your provider (Formspree,
          Resend, etc.) or add a server action when you integrate your v0
          backend.
        </p>
      </div>
    </div>
  );
}

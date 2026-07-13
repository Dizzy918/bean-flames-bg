import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  accent = "flame",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  accent?: "flame" | "moss";
}) {
  const color = accent === "flame" ? "var(--flame)" : "var(--moss)";
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style={{ background: color }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mono text-xs uppercase tracking-[0.3em] text-[var(--flame)]">
          ─── {eyebrow}
        </div>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

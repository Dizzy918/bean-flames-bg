import { createFileRoute, Link } from "@tanstack/react-router";
import pelletsImg from "@/assets/pellets-fireplace.jpg";
import { ArrowRight, Coffee, Flame, Recycle, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bean Flames — Пелети от кафе. Топлина без дърво." },
      {
        name: "description",
        content:
          "Bean Flames произвежда биопелети 100% от утайка от кафе. Чиста енергия от това, което иначе отива в боклука.",
      },
      { property: "og:title", content: "Bean Flames — Пелети от кафе" },
      {
        property: "og:description",
        content: "Биопелети 100% от утайка от кафе. Кръгова икономика, нулеви отпадъци.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        {/* glow orbs */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--flame)]/30 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--moss)]/25 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-20 pb-32 md:grid-cols-12 md:gap-8 md:pt-28 md:pb-40 md:items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 backdrop-blur">
              <Sparkles className="h-3 w-3 text-[var(--flame)]" />
              <span className="mono text-xs uppercase tracking-widest text-muted-foreground">
                proof of concept · sofia/bg
              </span>
            </div>

            <h1 className="mt-8 text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
              Гори{" "}
              <span className="text-glow-flame text-[var(--flame)]">кафе</span>,
              <br />
              <span className="text-muted-foreground">не</span>{" "}
              <span className="text-glow-moss text-[var(--moss)]">гори</span>.
            </h1>

            <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
              Bean Flames превръща утайката от твоето сутрешно еспресо в
              чисто гориво. <span className="text-foreground">100% кафе. 0% дървесина.</span> Топлина, която не струва на природата нищо.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/concept"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:gap-3"
              >
                Виж концепцията
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-[var(--flame)]/60 hover:text-[var(--flame)]"
              >
                Стани партньор
              </Link>
            </div>

            {/* mini status */}
            <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["100%", "кафе суровина"],
                ["0", "изсечени дървета"],
                ["∞", "кръг на ресурса"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl text-foreground md:text-4xl">{v}</dt>
                  <dd className="mono mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Product showcase */}
          <div className="relative md:col-span-5">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-[var(--flame)]/15 via-transparent to-[var(--moss)]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-2xl">
              <img
                src={pelletsImg}
                alt="Кафе пелети Bean Flames"
                className="w-full object-cover aspect-[4/5] md:aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 backdrop-blur-sm">
                  <Sparkles className="h-3 w-3 text-[var(--flame)]" />
                  <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    eco-friendly · sustainable
                  </span>
                </div>
              </div>
            </div>
            {/* corner ticks */}
            <div className="pointer-events-none absolute -inset-4 hidden md:block">
              {["top-0 left-0", "top-0 right-0 rotate-90", "bottom-0 right-0 rotate-180", "bottom-0 left-0 -rotate-90"].map((p) => (
                <div key={p} className={`absolute ${p}`}>
                  <div className="h-4 w-px bg-[var(--flame)]" />
                  <div className="h-px w-4 bg-[var(--flame)]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ticker */}
        <div className="relative border-y border-border bg-card/30 py-4 overflow-hidden">
          <div className="flex animate-ticker whitespace-nowrap gap-12 mono text-sm text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-12">
                {["coffee → energy", "zero waste", "no trees harmed", "circular by design", "made in bulgaria", "proof of concept"].map((t) => (
                  <span key={t} className="flex items-center gap-12">
                    <span className="text-[var(--flame)]">●</span>
                    <span>{t.toUpperCase()}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="relative border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Coffee,
                kicker: "01",
                title: "Суровина",
                desc: "Утайка от кафе, събирана от партньорски обекти. Без дървесина, без свързващи вещества.",
                color: "var(--flame)",
              },
              {
                icon: Flame,
                kicker: "02",
                title: "Енергия",
                desc: "Биопелети с висока калоричност за камини, печки и индустриални горелки.",
                color: "var(--moss)",
              },
              {
                icon: Recycle,
                kicker: "03",
                title: "Кръг",
                desc: "От чашата до пламъка и обратно в почвата. Затворен жизнен цикъл, нула боклук.",
                color: "var(--flame)",
              },
            ].map((p) => (
              <div
                key={p.kicker}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-foreground/20"
              >
                <div
                  className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-30"
                  style={{ background: p.color }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p.icon className="h-7 w-7" style={{ color: p.color }} />
                    <span className="mono text-xs text-muted-foreground">{p.kicker}</span>
                  </div>
                  <h3 className="mt-8 text-3xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[var(--bean)]/40 via-card to-[var(--moss)]/15 p-12 md:p-20">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative max-w-3xl">
              <div className="mono text-xs uppercase tracking-widest text-[var(--flame)]">
                ─── идеята е проста
              </div>
              <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                Имаш кафене, верига или офис?
                <br />
                <span className="text-muted-foreground">Имаш и суровина за нас.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Търсим първите си партньори в София. Поемаме логистиката,
                ти освобождаваш един кош на ден.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--flame)] px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-[var(--flame)]/90"
                >
                  Партньорски модели <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/process"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-foreground/40"
                >
                  Как работи процесът
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

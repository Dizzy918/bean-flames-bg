import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Coffee, Leaf, Recycle, Zap, Trash2, TreePine, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/concept")({
  component: ConceptPage,
  head: () => ({
    meta: [
      { title: "Концепцията — Bean Flames" },
      {
        name: "description",
        content:
          "Защо пелети от кафе? Запознайте се с идеята зад Bean Flames — кръгова икономика, която превръща отпадък в енергия.",
      },
      { property: "og:title", content: "Концепцията — Bean Flames" },
      {
        property: "og:description",
        content: "Кръгова икономика, която превръща утайка от кафе в енергия.",
      },
    ],
  }),
});

function ConceptPage() {
  return (
    <>
      <PageHero
        eyebrow="концепцията"
        accent="moss"
        title={
          <>
            Един отпадък.
            <br />
            <span className="text-[var(--moss)] text-glow-moss">Един отговор.</span>
          </>
        }
        subtitle="Българинът изпива над 2 милиарда чаши кафе годишно. След тях остават хиляди тонове утайка — суровина, която ние превръщаме в чиста енергия."
      />

      {/* Numbers */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-px bg-border md:grid-cols-3">
          {[
            { v: "≈ 2 млрд.", l: "чаши кафе годишно в България", icon: Coffee },
            { v: "0%", l: "от утайката се рециклира масово", icon: Trash2 },
            { v: "5×", l: "по-малко CO₂ срещу дървата", icon: Leaf },
          ].map((s) => (
            <div key={s.l} className="bg-background p-10">
              <s.icon className="h-6 w-6 text-[var(--flame)]" />
              <div className="mt-6 font-display text-5xl md:text-6xl">{s.v}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <div className="mono text-xs uppercase tracking-widest text-[var(--flame)]">
              ─── сравнение
            </div>
            <h2 className="mt-6 text-4xl font-semibold md:text-5xl">
              Класическите пелети vs. Bean Flames
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 opacity-80">
              <div className="flex items-center gap-3">
                <TreePine className="h-6 w-6 text-muted-foreground" />
                <span className="mono text-xs uppercase tracking-widest text-muted-foreground">
                  конвенционални
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Дървесни пелети</h3>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>— Изискват изсичане на гори</li>
                <li>— Конкурират се за дървесина с мебелна индустрия</li>
                <li>— Зависят от логистиката на горските стопанства</li>
                <li>— Натоварват местните екосистеми</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[var(--flame)]/40 bg-gradient-to-br from-[var(--flame)]/15 via-card to-[var(--moss)]/15 p-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--flame)]/30 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-[var(--flame)]" />
                  <span className="mono text-xs uppercase tracking-widest text-[var(--flame)]">
                    bean flames
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold">Кафе пелети</h3>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="text-foreground">+ Суровина от градски отпадък</li>
                  <li className="text-foreground">+ Никое дърво не пада</li>
                  <li className="text-foreground">+ Висока калоричност на кафето</li>
                  <li className="text-foreground">+ Лек, фин, ненатрапчив аромат</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why coffee */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <div className="mono text-xs uppercase tracking-widest text-[var(--moss)]">
              ─── защо кафе
            </div>
            <h2 className="mt-6 text-4xl font-semibold md:text-5xl">
              Зърното, което вече е дало всичко… освен топлина.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Утайката от кафе съдържа естествени масла и целулоза с висока енергийна стойност. След
              правилно сушене и пресоване, тя гори чисто и продължително — без добавени химикали,
              без свързващи вещества.
            </p>
            <Link
              to="/process"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--flame)] hover:gap-3 transition-all"
            >
              Разгледай процеса <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative aspect-square rounded-3xl border border-border bg-card p-10 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Recycle className="h-48 w-48 text-[var(--moss)]/30 animate-[spin_30s_linear_infinite]" />
            </div>
            <div className="relative flex h-full flex-col justify-end">
              <div className="mono text-xs uppercase tracking-widest text-muted-foreground">
                closed loop
              </div>
              <div className="mt-2 font-display text-3xl">
                Кафене → Утайка → Пелет → Топлина → Пепел → Почва
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

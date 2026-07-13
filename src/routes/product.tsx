import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import pelletsImg from "@/assets/pellets-fireplace.jpg";
import {
  Flame,
  Droplets,
  Ruler,
  Weight,
  Leaf,
  Sparkles,
  ThermometerSun,
  Wind,
  ArrowRight,
  Check,
  ShieldCheck,
  TreePine,
} from "lucide-react";

export const Route = createFileRoute("/product")({
  component: ProductPage,
  head: () => ({
    meta: [
      { title: "Продукт — Bean Flames" },
      {
        name: "description",
        content:
          "Биопелети от 100% утайка от кафе. Висока калоричност, ниска пепел, нулеви добавки. Подходящи за камини, пелетни печки и индустриални горелки.",
      },
      { property: "og:title", content: "Продукт — Bean Flames" },
      {
        property: "og:description",
        content: "Биопелети от кафе — чиста топлина без дървесина.",
      },
    ],
  }),
});

const specs = [
  {
    icon: ThermometerSun,
    label: "Калоричност",
    value: "≈ 20–22 MJ/kg",
    note: "Сравнима с висококачествени дървесни пелети",
  },
  {
    icon: Droplets,
    label: "Влажност",
    value: "< 10%",
    note: "Контролирано нискотемпературно сушене",
  },
  {
    icon: Ruler,
    label: "Диаметър",
    value: "Ø 6–8 mm",
    note: "Стандарт за битови и индустриални горелки",
  },
  {
    icon: Weight,
    label: "Пепел",
    value: "< 1.5%",
    note: "Минимален остатък, годен за компостиране",
  },
  {
    icon: Leaf,
    label: "Добавки",
    value: "0%",
    note: "Без свързващи вещества, без химикали",
  },
  {
    icon: Wind,
    label: "Емисии",
    value: "Минимални",
    note: "По-ниски CO₂ емисии от дървесните пелети",
  },
];

const advantages = [
  {
    title: "100% кафе суровина",
    desc: "Произведени изцяло от утайка от кафе — градски отпадък, който иначе отива на сметище.",
  },
  {
    title: "Нула изсечени дървета",
    desc: "Не конкурираме горската индустрия. Всяко дърво остава в гората.",
  },
  {
    title: "Естествено свързване",
    desc: "Маслата в кафето действат като естествено свързващо вещество — без нужда от химични добавки.",
  },
  {
    title: "Приятен аромат",
    desc: "Лек, ненатрапчив кафеен аромат при горене — без неприятни миризми.",
  },
  {
    title: "Кръгова икономика",
    desc: "От чашата до пелета, от пепелта до почвата. Затворен цикъл без отпадъци.",
  },
  {
    title: "Универсална съвместимост",
    desc: "Стандартен размер за камини, пелетни печки, котелни и индустриални горелки.",
  },
];

const useCases = [
  {
    icon: Flame,
    title: "Камини и печки",
    desc: "Идеални за домашно отопление. Дълго и равномерно горене с минимална пепел.",
  },
  {
    icon: TreePine,
    title: "Пелетни котли",
    desc: "Съвместими с автоматизирани пелетни системи. Plug-and-play, без модификации.",
  },
  {
    icon: ShieldCheck,
    title: "Индустриални горелки",
    desc: "Мащабируемо решение за бизнеси, търсещи устойчив енергиен източник.",
  },
];

function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="продукт"
        title={
          <>
            Пелети от кафе.
            <br />
            <span className="text-[var(--flame)] text-glow-flame">Топлина без дърво.</span>
          </>
        }
        subtitle="Висока калоричност, ниска пепел, нулеви добавки. Биопелетите Bean Flames превръщат утайката от кафе в чисто и ефективно гориво."
      />

      {/* Specs grid */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <div className="mono text-xs uppercase tracking-widest text-[var(--flame)]">
              ─── спецификации
            </div>
            <h2 className="mt-6 text-4xl font-semibold md:text-5xl">Числата говорят.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Всяка партида преминава през контролирано сушене и пресоване за максимална плътност и
              калоричност.
            </p>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-3">
            {specs.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden bg-background p-8 transition-all hover:bg-card"
              >
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[var(--flame)]/0 blur-3xl transition-all group-hover:bg-[var(--flame)]/15" />
                <div className="relative">
                  <s.icon className="h-6 w-6 text-[var(--flame)]" />
                  <div className="mt-6 mono text-xs uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                  <div className="mt-2 font-display text-4xl md:text-5xl">{s.value}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product showcase image */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--flame)]/20 via-transparent to-[var(--moss)]/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <img
                  src={pelletsImg}
                  alt="Кафе пелети Bean Flames в кошница пред камина"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 backdrop-blur">
                    <Sparkles className="h-3 w-3 text-[var(--flame)]" />
                    <span className="mono text-xs uppercase tracking-widest text-muted-foreground">
                      coffee ground fire pellets
                    </span>
                  </div>
                </div>
              </div>
              {/* corner ticks */}
              <div className="pointer-events-none absolute -inset-4 hidden md:block">
                {[
                  "top-0 left-0",
                  "top-0 right-0 rotate-90",
                  "bottom-0 right-0 rotate-180",
                  "bottom-0 left-0 -rotate-90",
                ].map((p) => (
                  <div key={p} className={`absolute ${p}`}>
                    <div className="h-4 w-px bg-[var(--flame)]" />
                    <div className="h-px w-4 bg-[var(--flame)]" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mono text-xs uppercase tracking-widest text-[var(--flame)]">
                ─── продуктът
              </div>
              <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
                Eco-Friendly.
                <br />
                <span className="text-muted-foreground">Sustainable.</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                100% рециклирана суровина. Дълго горене. Ниска пепел. Произведени от утайка от кафе,
                събирана от партньорски обекти в София.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Екологично чисти — без химикали и добавки",
                  "Висока калоричност — сравнима с дървесни пелети",
                  "Лек кафеен аромат при горене",
                  "Подходящи за камини, печки и котелни",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--moss)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:gap-3"
              >
                Заяви мостра <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <div className="mono text-xs uppercase tracking-widest text-[var(--moss)]">
              ─── предимства
            </div>
            <h2 className="mt-6 text-4xl font-semibold md:text-5xl">Защо кафе пелети?</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-[var(--moss)]/40"
              >
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[var(--moss)]/0 blur-3xl transition-all group-hover:bg-[var(--moss)]/20" />
                <div className="relative">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--moss)]/15">
                    <Check className="h-4 w-4 text-[var(--moss)]" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <div className="mono text-xs uppercase tracking-widest text-[var(--flame)]">
              ─── приложения
            </div>
            <h2 className="mt-6 text-4xl font-semibold md:text-5xl">Къде се използват?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Стандартният размер на пелетите ги прави съвместими с повечето отоплителни системи на
              пазара.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((u, i) => (
              <div
                key={u.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-foreground/20"
              >
                <div
                  className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-30"
                  style={{
                    background: i % 2 === 0 ? "var(--flame)" : "var(--moss)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <u.icon
                      className="h-7 w-7"
                      style={{
                        color: i % 2 === 0 ? "var(--flame)" : "var(--moss)",
                      }}
                    />
                    <span className="mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 text-3xl font-semibold">{u.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison highlight */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[var(--bean)]/40 via-card to-[var(--moss)]/15 p-12 md:p-20">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="mono text-xs uppercase tracking-widest text-[var(--flame)]">
                  ─── сравнение
                </div>
                <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
                  Кафе vs. Дърво
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Кафе пелетите предлагат сравнима калоричност с дървесните, но без да натоварват
                  горските екосистеми.
                </p>
                <Link
                  to="/concept"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--flame)] hover:gap-3 transition-all"
                >
                  Виж пълното сравнение <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["20–22", "MJ/kg калоричност"],
                  ["< 10%", "влажност"],
                  ["< 1.5%", "пепел"],
                  ["0%", "химични добавки"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl border border-border bg-background/50 p-6">
                    <div className="font-display text-4xl text-foreground">{v}</div>
                    <div className="mono mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mono text-xs uppercase tracking-widest text-[var(--flame)]">
                  ─── заявка
                </div>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Искаш да пробваш?</h2>
                <p className="mt-2 text-muted-foreground">
                  Търсим ранни тестери за първите ни партиди. Свържи се с нас.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--flame)] px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-[var(--flame)]/90"
                >
                  Свържи се <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-foreground/40"
                >
                  Партньорски модели
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sparkle detail */}
      <div className="flex items-center justify-center pb-16">
        <Sparkles className="h-5 w-5 text-[var(--flame)]/40" />
      </div>
    </>
  );
}

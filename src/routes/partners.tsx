import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Coffee, Building2, Factory, FlaskConical, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/partners")({
  component: PartnersPage,
  head: () => ({
    meta: [
      { title: "Партньори — Bean Flames" },
      {
        name: "description",
        content: "Bean Flames е в стартов етап. Търсим кафенета, вериги и производители, готови да изпробват концепцията.",
      },
      { property: "og:title", content: "Партньори — Bean Flames" },
      { property: "og:description", content: "Кафенета, вериги, производители, ранни тестери — стани част от мрежата." },
    ],
  }),
});

const tracks = [
  {
    icon: Coffee,
    tag: "Track 01",
    title: "Кафенета и ресторанти",
    desc: "Ти ни даваш утайката, ние даваме контейнерите и логистиката. Без разходи, без главоболия.",
    perks: ["Безплатно вдигане", "Сертификат за устойчивост", "Промо материали за обекта"],
  },
  {
    icon: Building2,
    tag: "Track 02",
    title: "Офиси и вериги",
    desc: "Корпоративно решение за намаляване на отпадъците от офисни кафе машини и вендинг автомати.",
    perks: ["ESG отчетност", "Месечни справки", "Брандирани контейнери"],
  },
  {
    icon: Factory,
    tag: "Track 03",
    title: "Производители",
    desc: "Технологично сътрудничество около пресоване, сушене и сертификация на крайния продукт.",
    perks: ["Споделен R&D", "Достъп до първи партиди", "Co-branding опции"],
  },
  {
    icon: FlaskConical,
    tag: "Track 04",
    title: "Ранни тестери",
    desc: "Камини, пелетни печки, котелни — търсим обекти, готови да изпробват първите ни партиди.",
    perks: ["Безплатни мостри", "Директна обратна връзка", "Влияние върху продукта"],
  },
];

function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="партньорства"
        title={
          <>
            Изграждаме мрежа,
            <br />
            <span className="text-[var(--flame)] text-glow-flame">чаша по чаша.</span>
          </>
        }
        subtitle="Bean Flames е в стартов етап — без клиенти, само първи партньорства. Тук започва историята."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {tracks.map((t, i) => (
              <article
                key={t.tag}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-[var(--flame)]/40"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--flame)]/0 blur-3xl transition-all group-hover:bg-[var(--flame)]/20" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                      <t.icon className="h-6 w-6 text-[var(--flame)]" />
                    </div>
                    <span className="mono text-xs uppercase tracking-widest text-muted-foreground">
                      {t.tag}
                    </span>
                  </div>
                  <h3 className="mt-8 text-3xl font-semibold">{t.title}</h3>
                  <p className="mt-3 text-muted-foreground">{t.desc}</p>
                  <ul className="mt-6 grid gap-2">
                    {t.perks.map((p) => (
                      <li key={p} className="mono text-xs text-muted-foreground">
                        ✓ {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mono absolute bottom-6 right-6 text-3xl text-foreground/5 font-display">
                  0{i + 1}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[var(--bean)]/30 via-card to-[var(--moss)]/15 p-12 md:p-20">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="mono text-xs uppercase tracking-widest text-[var(--flame)]">
                  ─── честно казано
                </div>
                <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
                  Нямаме клиенти.
                  <br />
                  <span className="text-muted-foreground">Тепърва ще имаме.</span>
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Bean Flames е концепция, която тества пазара в София. Ако
                  искаш да си от хората, които я задвижват от ден едно — пиши ни.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--flame)] px-6 py-3 text-sm font-semibold text-background hover:bg-[var(--flame)]/90 transition-colors"
                >
                  Стани първи партньор <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["0", "клиенти днес"],
                  ["1+", "партньори в разговор"],
                  ["50 кг", "цел / месец"],
                  ["2026", "пилотен старт"],
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
    </>
  );
}

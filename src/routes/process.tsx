import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Процес — Bean Flames" },
      {
        name: "description",
        content: "Четири стъпки превръщат утайката от кафе в биопелети с висока калоричност.",
      },
      { property: "og:title", content: "Процес — Bean Flames" },
      { property: "og:description", content: "От чашата до пламъка — четири стъпки." },
    ],
  }),
});

const steps = [
  {
    n: "01",
    title: "Събиране",
    body: "Партньорски кафенета и обекти заделят утайката си в специални контейнери. Ние я взимаме безплатно по предварителен график.",
    points: ["Безплатни контейнери", "Гъвкав график", "Ежедневна или седмична логистика"],
  },
  {
    n: "02",
    title: "Сушене",
    body: "Контролирано нискотемпературно сушене редуцира влагата под 10% и запазва калоричната стойност на кафето.",
    points: ["Ниска енергийна консумация", "Запазен енергиен потенциал", "Минимизиран обем"],
  },
  {
    n: "03",
    title: "Пресоване",
    body: "Високо налягане формира плътни цилиндрични пелети. Естествените масла на кафето действат като свързващо вещество — без добавки.",
    points: ["Без свързващи вещества", "Стандартен Ø 6–8mm", "Готови за стандартни горелки"],
  },
  {
    n: "04",
    title: "Горене",
    body: "Чисто и продължително горене с дискретен аромат. Подходящо за камини, пелетни печки и индустриални системи.",
    points: ["Висока калоричност", "Ниска пепел", "Лек кафеен аромат"],
  },
];

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="процес"
        title={
          <>
            От чашата
            <br />
            до <span className="text-[var(--flame)] text-glow-flame">пламъка</span>.
          </>
        }
        subtitle="Четири стъпки. Без химия. Без дървесина. Без компромиси."
      />

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <ol className="relative space-y-px">
            {/* vertical line */}
            <div className="absolute left-[2rem] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--flame)] via-[var(--moss)] to-transparent md:left-1/2" />

            {steps.map((s, i) => (
              <li
                key={s.n}
                className={`relative grid gap-6 md:grid-cols-2 md:gap-12 py-12 ${
                  i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div className="relative pl-16 md:pl-0 md:pr-12 md:text-right">
                  {i % 2 === 0 ? (
                    <div className="md:text-right">
                      <div className="font-display text-7xl text-[var(--flame)]/30 md:text-8xl">
                        {s.n}
                      </div>
                      <h3 className="mt-2 text-3xl font-semibold md:text-4xl">{s.title}</h3>
                      <p className="mt-4 text-muted-foreground">{s.body}</p>
                    </div>
                  ) : (
                    <ul className="mt-2 space-y-2 text-sm md:pr-8">
                      {s.points.map((p) => (
                        <li key={p} className="mono text-muted-foreground md:text-right">
                          → {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* dot */}
                <div className="absolute left-[2rem] top-12 -translate-x-1/2 md:left-1/2">
                  <div className="relative h-4 w-4 rounded-full bg-[var(--flame)] ring-4 ring-background">
                    <div className="absolute inset-0 animate-ping rounded-full bg-[var(--flame)]/60" />
                  </div>
                </div>

                <div className="pl-16 md:pl-12">
                  {i % 2 === 0 ? (
                    <ul className="mt-2 space-y-2 text-sm md:pl-8">
                      {s.points.map((p) => (
                        <li key={p} className="mono text-muted-foreground">
                          → {p}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div>
                      <div className="font-display text-7xl text-[var(--moss)]/30 md:text-8xl">
                        {s.n}
                      </div>
                      <h3 className="mt-2 text-3xl font-semibold md:text-4xl">{s.title}</h3>
                      <p className="mt-4 text-muted-foreground">{s.body}</p>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mono text-xs uppercase tracking-widest text-[var(--flame)]">
                  ─── интересно ти е?
                </div>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                  Да поговорим за партньорство.
                </h2>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
              >
                Свържи се <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

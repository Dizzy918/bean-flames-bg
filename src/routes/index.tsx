import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/bean-flames-logo.png";
import { Flame, Leaf, Recycle, Coffee, Phone, Mail, MapPin, Menu, X, Sparkles, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bean Flames — Пелети от кафе. Топлина без дърво." },
      {
        name: "description",
        content:
          "Bean Flames произвежда биопелети 100% от утайка от кафе. Без изсичане на гори — чиста енергия от това, което иначе отива в боклука.",
      },
      { property: "og:title", content: "Bean Flames — Пелети от кафе" },
      {
        property: "og:description",
        content: "Биопелети 100% от утайка от кафе. Чиста енергия, нулеви отпадъци.",
      },
    ],
  }),
});

const nav = [
  { href: "#concept", label: "Концепцията" },
  { href: "#how", label: "Как работи" },
  { href: "#partners", label: "Партньорства" },
  { href: "#contact", label: "Контакти" },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Bean Flames" className="h-12 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="#contact">Стани партньор</a>
            </Button>
          </nav>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden"
            aria-label="Меню"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm hover:bg-accent"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.95_0.04_85)_0%,transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28 md:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3 w-3 text-[var(--flame)]" />
              Българска иновация · В стартов етап
            </div>
            <h1 className="text-5xl font-semibold leading-[1.05] md:text-6xl">
              Пелети от кафе.
              <br />
              <span className="text-[var(--moss)]">Нито едно дърво.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Bean Flames превръща утайката от твоето сутрешно еспресо в чисто
              гориво. 100% кафе, 0% дървесина — топлина, която не струва на гората нищо.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#concept">Научи повече</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Партньорство</a>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-[var(--flame)]/15 blur-3xl md:h-96 md:w-96" />
            <img
              src={logo}
              alt="Bean Flames лого"
              className="relative w-full max-w-md drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--moss)]">
              Концепцията
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Отпадъкът на едни е горивото на други.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Всяка чаша кафе оставя след себе си утайка, която обикновено
              отива в боклука. Ние я събираме, изсушаваме и пресоваме в
              биопелети с висока калоричност — без свързващи вещества, без
              дървесина, без химия.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "100% кафе",
                desc: "Само утайка от еспресо. Без дървесни добавки, без лепила, без пълнители.",
                icon: Coffee,
              },
              {
                title: "Нула изсичане",
                desc: "Никое дърво не пада, за да гори твоят дом. Освобождаваме горите от енергийния товар.",
                icon: Leaf,
              },
              {
                title: "Кръгова икономика",
                desc: "От кафенето до камината — суровина, която иначе би била боклук, става енергия.",
                icon: Recycle,
              },
            ].map((p) => (
              <article
                key={p.title}
                className="flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:border-[var(--moss)]/40 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-[var(--moss)]">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--moss)]">
              Как работи
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Четири стъпки от чашата до пламъка.
            </h2>
          </div>
          <ol className="grid gap-6 md:grid-cols-4">
            {[
              ["01", "Събиране", "Партньорски кафенета и обекти оставят утайката за нас вместо в кошчето."],
              ["02", "Сушене", "Контролирано изсушаване, което запазва енергийната стойност на кафето."],
              ["03", "Пресоване", "Високо налягане формира плътни пелети — без свързващи вещества."],
              ["04", "Горене", "Чиста, ароматна топлина за камини, печки и индустриални горелки."],
            ].map(([n, t, d]) => (
              <li
                key={n}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="font-display text-3xl text-[var(--flame)]">{n}</div>
                <h3 className="mt-3 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Partners */}
      <section
        id="partners"
        className="border-t border-border bg-[var(--bark)] text-[oklch(0.97_0.015_85)]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[oklch(0.85_0.08_95)]">
                Партньорства
              </p>
              <h2 className="text-4xl font-semibold">
                Изграждаме мрежа, чаша по чаша.
              </h2>
              <p className="mt-6 text-[oklch(0.88_0.02_85)]">
                Bean Flames е в стартов етап. Работим директно с първите си
                партньори — кафенета, вериги и производители — за да докажем
                концепцията на българския пазар.
              </p>
            </div>
            <ul className="grid gap-6 md:col-span-2 sm:grid-cols-2">
              {[
                ["Кафенета и ресторанти", "Предаваш ни утайката безплатно — ние осигуряваме контейнерите и логистиката."],
                ["Офиси и вериги", "Корпоративно решение за намаляване на отпадъците от кафе машини."],
                ["Производители", "Технологично сътрудничество около пресоване и сертификация."],
                ["Ранни тестери", "Търсим обекти, готови да изпробват първите партиди гориво."],
              ].map(([t, d]) => (
                <li key={t} className="border-l-2 border-[var(--flame)] pl-5">
                  <Handshake className="h-5 w-5 text-[var(--flame)]" />
                  <h3 className="mt-3 text-lg font-semibold">{t}</h3>
                  <p className="mt-1 text-sm text-[oklch(0.85_0.02_85)]">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--moss)]">
              Свържи се
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Имаш кафе. Ние имаме идея.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Ако управляваш кафене, верига или просто искаш да научиш повече —
              пиши ни. Отговаряме лично на всяко запитване.
            </p>
            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-[var(--flame)]" />
                <div>
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <a href="tel:+359888000000" className="font-medium hover:underline">
                    +359 888 000 000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-[var(--flame)]" />
                <div>
                  <div className="text-sm text-muted-foreground">Имейл</div>
                  <a href="mailto:hello@beanflames.bg" className="font-medium hover:underline">
                    hello@beanflames.bg
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-[var(--flame)]" />
                <div>
                  <div className="text-sm text-muted-foreground">База</div>
                  <div className="font-medium">София, България</div>
                </div>
              </li>
            </ul>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:hello@beanflames.bg";
            }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <h3 className="text-xl font-semibold">Заяви партньорство</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Кажи ни накратко за обекта си — ще се свържем в рамките на 48 часа.
            </p>
            <div className="mt-6 grid gap-4">
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Име / Обект</span>
                <input
                  required
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Телефон или имейл</span>
                <input
                  required
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Съобщение</span>
                <textarea
                  rows={4}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Напр.: имаме кафене в центъра на София и около 15 кг утайка дневно."
                />
              </label>
              <Button type="submit" size="lg" className="mt-2">
                Изпрати
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-8 w-auto" />
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bean Flames. Топлина от кафе.
          </p>
        </div>
      </footer>
    </div>
  );
}

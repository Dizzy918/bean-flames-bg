import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/bean-flames-logo.png";
import { Flame, Leaf, Truck, ShieldCheck, Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bean Flames — Пелети, дърва и брикети за вашия дом" },
      {
        name: "description",
        content:
          "Bean Flames предлага висококачествени пелети, дърва за огрев и брикети. Чиста енергия, бързa доставка в цяла България.",
      },
      { property: "og:title", content: "Bean Flames" },
      {
        property: "og:description",
        content: "Пелети, дърва за огрев и брикети с доставка в цяла България.",
      },
    ],
  }),
});

const nav = [
  { href: "#products", label: "Продукти" },
  { href: "#about", label: "За нас" },
  { href: "#why", label: "Защо нас" },
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
              <a href="#contact">Поръчай</a>
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
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-32 md:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--flame)]" />
              Български производител · Доставка в цялата страна
            </div>
            <h1 className="text-5xl font-semibold leading-[1.05] md:text-6xl">
              Топлина, на която
              <br />
              <span className="text-[var(--moss)]">можеш да разчиташ.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Премиум пелети, дърва за огрев и брикети. Чисто горене,
              висока калоричност и доставка до вашия дом.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#products">Виж продуктите</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Свържи се с нас</a>
              </Button>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["12+", "години опит"],
                ["4 800+", "доволни клиенти"],
                ["48ч", "средна доставка"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl text-foreground">{v}</dt>
                  <dd className="text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
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

      {/* Products */}
      <section id="products" className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--moss)]">
              Продукти
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Гориво за всеки дом и сезон
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Пелети",
                desc: "Премиум дървесни пелети клас A1 от чист бук и дъб. Висока калоричност, ниска пепел.",
                price: "от 520 лв / тон",
                icon: Flame,
              },
              {
                title: "Дърва за огрев",
                desc: "Нарязани и нацепени твърди дърва — бук, дъб, габър. Сухи и готови за горене.",
                price: "от 180 лв / куб.м",
                icon: Leaf,
              },
              {
                title: "Брикети",
                desc: "Пресовани дървесни брикети без добавки. Дълго и равномерно горене за камини и печки.",
                price: "от 480 лв / тон",
                icon: ShieldCheck,
              },
            ].map((p) => (
              <article
                key={p.title}
                className="group flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:border-[var(--moss)]/40 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-[var(--moss)]">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-medium text-foreground">{p.price}</span>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-[var(--moss)] hover:underline"
                  >
                    Запитване →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--moss)]">
              За нас
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Семеен бизнес с корени в българската гора.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              В Bean Flames вярваме, че топлината у дома започва с
              качествена суровина. От повече от десетилетие подбираме,
              обработваме и доставяме гориво, на което семействата могат да
              разчитат.
            </p>
            <p className="mt-4 text-muted-foreground">
              Работим директно с местни производители и поддържаме строг
              контрол на влажност и калоричност при всяка партида.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Leaf, t: "Устойчиво", d: "От сертифицирани български гори." },
              { icon: ShieldCheck, t: "Качество", d: "Контрол на всеки тон." },
              { icon: Truck, t: "Доставка", d: "До 48 часа в страната." },
              { icon: Flame, t: "Калоричност", d: "Над 4.8 kWh/kg при пелети." },
            ].map((f) => (
              <div
                key={f.t}
                className="rounded-xl border border-border bg-card p-5"
              >
                <f.icon className="h-5 w-5 text-[var(--flame)]" />
                <h3 className="mt-3 text-base font-semibold">{f.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section
        id="why"
        className="border-t border-border bg-[var(--bark)] text-[oklch(0.97_0.015_85)]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[oklch(0.85_0.08_95)]">
                Защо Bean Flames
              </p>
              <h2 className="text-4xl font-semibold">
                Просто. Чисто. Топло.
              </h2>
            </div>
            <ul className="grid gap-6 md:col-span-2 sm:grid-cols-2">
              {[
                ["Прозрачни цени", "Без скрити такси, ясни оферти за всяко количество."],
                ["Лична грижа", "Консултант, който познава нуждите на твоя дом."],
                ["Бързи доставки", "Собствен транспорт до всяка точка в България."],
                ["Гаранция за качество", "Връщане при несъответствие — без въпроси."],
              ].map(([t, d]) => (
                <li key={t} className="border-l-2 border-[var(--flame)] pl-5">
                  <h3 className="text-lg font-semibold">{t}</h3>
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
              Контакти
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Готови сме да отопляваме твоя дом.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Обади се или ни пиши — ще ти изпратим оферта в рамките на работния ден.
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
                  <a href="mailto:info@beanflames.bg" className="font-medium hover:underline">
                    info@beanflames.bg
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-[var(--flame)]" />
                <div>
                  <div className="text-sm text-muted-foreground">Склад</div>
                  <div className="font-medium">гр. София, ул. Горска 12</div>
                </div>
              </li>
            </ul>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:info@beanflames.bg";
            }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <h3 className="text-xl font-semibold">Заяви оферта</h3>
            <div className="mt-6 grid gap-4">
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Име</span>
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
                <span className="font-medium">Запитване</span>
                <textarea
                  rows={4}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Например: 2 тона пелети с доставка до Пловдив"
                />
              </label>
              <Button type="submit" size="lg" className="mt-2">
                Изпрати запитване
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
            © {new Date().getFullYear()} Bean Flames. Всички права запазени.
          </p>
        </div>
      </footer>
    </div>
  );
}

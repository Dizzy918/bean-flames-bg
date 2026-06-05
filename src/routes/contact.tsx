import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Контакти — Bean Flames" },
      {
        name: "description",
        content: "Свържи се с Bean Flames за партньорства, въпроси и тестови партиди.",
      },
      { property: "og:title", content: "Контакти — Bean Flames" },
      { property: "og:description", content: "Пиши ни — отговаряме лично." },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="контакти"
        accent="moss"
        title={
          <>
            Имаш кафе.
            <br />
            <span className="text-[var(--moss)] text-glow-moss">Ние имаме идея.</span>
          </>
        }
        subtitle="Пиши, обади се или ела на кафе. Отговаряме лично на всяко запитване в рамките на 48 часа."
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-5">
          <div className="md:col-span-2 space-y-6">
            {[
              {
                icon: Mail,
                label: "Имейл",
                value: "beanflames@beanflames.online",
                href: "mailto:beanflames@beanflames.online",
              },
              {
                icon: Phone,
                label: "Телефон",
                value: "+359 888 000 000",
                href: "tel:+359888000000",
              },
              {
                icon: MapPin,
                label: "База",
                value: "София, България",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-[var(--flame)]/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-[var(--flame)]">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="mono text-xs uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-lg font-medium hover:text-[var(--flame)]">
                      {c.value}
                    </a>
                  ) : (
                    <div className="mt-1 text-lg font-medium">{c.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-gradient-to-br from-[var(--bean)]/30 to-card p-6">
              <div className="mono text-xs uppercase tracking-widest text-[var(--flame)]">─── работно време</div>
              <ul className="mt-4 space-y-1 text-sm">
                <li className="flex justify-between"><span>Понеделник — Петък</span><span className="mono text-muted-foreground">09:00 — 18:00</span></li>
                <li className="flex justify-between"><span>Събота</span><span className="mono text-muted-foreground">10:00 — 14:00</span></li>
                <li className="flex justify-between"><span>Неделя</span><span className="mono text-muted-foreground">почивен</span></li>
              </ul>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:beanflames@beanflames.online";
            }}
            className="md:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10"
          >
            <div className="mono text-xs uppercase tracking-widest text-[var(--flame)]">─── формуляр</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Заяви разговор</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Кажи ни накратко за обекта си и какво те интересува.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Име" />
                <Field label="Обект / Компания" required={false} />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Имейл" type="email" />
                <Field label="Телефон" type="tel" required={false} />
              </div>

              <label className="grid gap-2 text-sm">
                <span className="mono text-xs uppercase tracking-widest text-muted-foreground">
                  Аз съм…
                </span>
                <select className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-[var(--flame)] focus:ring-1 focus:ring-[var(--flame)]">
                  <option>Кафене / ресторант</option>
                  <option>Офис / верига</option>
                  <option>Производител</option>
                  <option>Ранен тестер (камина / печка)</option>
                  <option>Друго</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm">
                <span className="mono text-xs uppercase tracking-widest text-muted-foreground">
                  Съобщение
                </span>
                <textarea
                  rows={5}
                  required
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-[var(--flame)] focus:ring-1 focus:ring-[var(--flame)]"
                  placeholder="Напр.: имаме кафене в центъра на София с около 15 кг утайка дневно."
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--flame)] px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-[var(--flame)]/90"
              >
                Изпрати <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type = "text",
  required = true,
}: {
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="mono text-xs uppercase tracking-widest text-muted-foreground">
        {label} {required && <span className="text-[var(--flame)]">*</span>}
      </span>
      <input
        type={type}
        required={required}
        className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-[var(--flame)] focus:ring-1 focus:ring-[var(--flame)]"
      />
    </label>
  );
}

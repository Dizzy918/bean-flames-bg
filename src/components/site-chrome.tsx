import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/bean-flames-logo.png";

const links = [
  { to: "/", label: "Начало" },
  { to: "/concept", label: "Концепцията" },
  { to: "/product", label: "Продукт" },
  { to: "/process", label: "Процес" },
  { to: "/partners", label: "Партньори" },
  { to: "/contact", label: "Контакти" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Bean Flames"
            className="h-9 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && <span className="absolute inset-0 rounded-full bg-secondary" />}
                <span className="relative">{l.label}</span>
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-[var(--flame)]/40 bg-[var(--flame)]/10 px-4 py-2 text-sm font-medium text-[var(--flame)] transition-all hover:bg-[var(--flame)]/20 hover:border-[var(--flame)]/70"
        >
          Партньорство <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-foreground"
          aria-label="Меню"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px ember-line opacity-60" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <img src={logo} alt="" className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Топлина от утайка от кафе. Българска иновация в кръговата икономика.
          </p>
          {/* Social links */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/beanflames"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-[var(--flame)]/15 hover:text-[var(--flame)]"
              aria-label="Instagram"
            >
              <svg
                className="h-4.5 w-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/BeanFlames"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-[var(--flame)]/15 hover:text-[var(--flame)]"
              aria-label="Facebook"
            >
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://beanflames.online"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-[var(--moss)]/15 hover:text-[var(--moss)]"
              aria-label="Уебсайт"
            >
              <svg
                className="h-4.5 w-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 mono text-xs text-muted-foreground">
            <span className="text-[var(--moss)]">●</span> в стартов етап / 2026
          </p>
        </div>
        <div>
          <h4 className="mono text-xs uppercase tracking-widest text-muted-foreground">
            Навигация
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-foreground/80 hover:text-[var(--flame)] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mono text-xs uppercase tracking-widest text-muted-foreground">Контакт</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="mailto:beanflames@beanflames.online"
                className="hover:text-[var(--flame)] transition-colors"
              >
                beanflames@beanflames.online
              </a>
            </li>
            <li>
              <a href="tel:+359888000000" className="hover:text-[var(--flame)] transition-colors">
                +359 888 000 000
              </a>
            </li>
            <li className="text-muted-foreground">София, България</li>
          </ul>
        </div>
        <div>
          <h4 className="mono text-xs uppercase tracking-widest text-muted-foreground">
            Социални мрежи
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="https://www.instagram.com/beanflames"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-[var(--flame)] transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                @beanflames
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/BeanFlames"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-[var(--flame)] transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Bean Flames
              </a>
            </li>
            <li>
              <a
                href="https://beanflames.online"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-[var(--moss)] transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                beanflames.online
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} BEAN_FLAMES</span>
          <span>v0.1 — proof of concept</span>
        </div>
      </div>
    </footer>
  );
}

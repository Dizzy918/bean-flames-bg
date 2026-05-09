import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/bean-flames-logo.png";

const links = [
  { to: "/", label: "Начало" },
  { to: "/concept", label: "Концепцията" },
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
          <img src={logo} alt="Bean Flames" className="h-9 w-auto transition-transform group-hover:scale-105" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 rounded-full bg-secondary" />
                )}
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
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="" className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Топлина от утайка от кафе. Българска иновация в кръговата икономика.
          </p>
          <p className="mt-6 mono text-xs text-muted-foreground">
            <span className="text-[var(--moss)]">●</span> в стартов етап / 2025
          </p>
        </div>
        <div>
          <h4 className="mono text-xs uppercase tracking-widest text-muted-foreground">Навигация</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-foreground/80 hover:text-[var(--flame)]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mono text-xs uppercase tracking-widest text-muted-foreground">Контакт</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:hello@beanflames.bg" className="hover:text-[var(--flame)]">hello@beanflames.bg</a></li>
            <li><a href="tel:+359888000000" className="hover:text-[var(--flame)]">+359 888 000 000</a></li>
            <li className="text-muted-foreground">София, България</li>
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

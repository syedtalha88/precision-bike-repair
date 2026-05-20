import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Phone, WhatsApp, Menu, X } from "@/components/icons";
import { PHONE, WHATSAPP } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 py-1" onClick={() => setOpen(false)}>
          <img src={logo} alt="A2Z Bike Services" width={240} height={72} className="h-14 sm:h-16 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[var(--graphite)]">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                `${isActive ? "text-[var(--orange)]" : ""} hover:text-[var(--orange)] transition-colors`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={WHATSAPP} className="btn-mech btn-mech-outline" style={{ padding: "0.55rem 0.95rem", fontSize: 12 }}>
            <WhatsApp className="w-4 h-4" /> WhatsApp
          </a>
          <a href={PHONE} className="btn-mech" style={{ padding: "0.55rem 0.95rem", fontSize: 12 }}>
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 -mr-2 text-[var(--graphite)]"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 px-3 rounded-md text-sm font-semibold text-[var(--graphite)] ${isActive ? "bg-[oklch(0.97_0.02_50)] text-[var(--orange)]" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Phone, WhatsApp, Mail } from "@/components/icons";
import { PHONE, WHATSAPP, PHONE_DISPLAY, EMAIL, EMAIL_LINK, BRAND } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--graphite)] text-white pt-14 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="bg-white inline-block p-3 clip-bevel-sm mb-4">
            <img src={logo} alt={BRAND} width={240} height={72} className="h-14 w-auto" />
          </div>
          <p className="text-sm text-white/70">
            Hyderabad's most trusted doorstep bike repair and service team. Open all day, all week.
          </p>
        </div>
        <div>
          <div className="font-display font-bold mb-3 uppercase tracking-wider text-sm under-bolt inline-block">Quick Links</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-[var(--orange)]">Home</Link></li>
            <li><Link to="/services" className="hover:text-[var(--orange)]">Our Services</Link></li>
            <li><Link to="/about" className="hover:text-[var(--orange)]">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--orange)]">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-[var(--orange)]">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-[var(--orange)]">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-display font-bold mb-3 uppercase tracking-wider text-sm under-bolt inline-block">Contact</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[var(--orange)]" /> <a href={PHONE} className="hover:text-[var(--orange)]">{PHONE_DISPLAY}</a></li>
            <li className="flex items-center gap-2"><WhatsApp className="w-4 h-4 text-[var(--orange)]" /> <a href={WHATSAPP} className="hover:text-[var(--orange)]">WhatsApp Us</a></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[var(--orange)]" /> <a href={EMAIL_LINK} className="hover:text-[var(--orange)]">{EMAIL}</a></li>
            <li>Hyderabad & Secunderabad</li>
          </ul>
        </div>
        <div>
          <div className="font-display font-bold mb-3 uppercase tracking-wider text-sm under-bolt inline-block">Hours</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Mon – Sun: 7 AM – 11 PM</li>
            <li className="text-[var(--orange)] font-bold">Whole-day service</li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a href={PHONE} className="btn-mech" style={{ padding: "0.5rem 0.9rem", fontSize: 11 }}><Phone className="w-3.5 h-3.5" /> Call</a>
            <a href={WHATSAPP} className="btn-mech btn-mech-outline" style={{ padding: "0.5rem 0.9rem", fontSize: 11 }}><WhatsApp className="w-3.5 h-3.5" /> Chat</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <div>© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/terms" className="hover:text-white">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

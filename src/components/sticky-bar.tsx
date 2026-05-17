import { Phone, WhatsApp } from "@/components/icons";
import { PHONE, WHATSAPP } from "@/lib/site";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden grid grid-cols-2 border-t-2 border-[var(--graphite)]">
      <a href={PHONE} className="flex items-center justify-center gap-2 bg-[var(--orange)] text-white font-bold uppercase tracking-wider py-3.5 text-sm">
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <a href={WHATSAPP} className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold uppercase tracking-wider py-3.5 text-sm">
        <WhatsApp className="w-4 h-4" /> WhatsApp
      </a>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Gear, Wrench, Bolt, Phone, WhatsApp, Check, Bike } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PHONE, WHATSAPP } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Our Services — A2Z Bike Services Hyderabad" },
      {
        name: "description",
        content:
          "Full list of bike services in Hyderabad — general service, doorstep service, brake & clutch, engine, electrical, emergency roadside help.",
      },
      { property: "og:title", content: "Bike Services in Hyderabad — A2Z Bike Services" },
      { property: "og:description", content: "General service, doorstep, brake & clutch, engine, electrical and emergency roadside help." },
    ],
  }),
});

const SERVICES = [
  {
    icon: Wrench,
    t: "General Service",
    price: "₹799",
    d: "A complete tune-up to keep your bike running smooth — oil, brakes, chain, filters, electricals, the works.",
    items: ["Engine oil change", "Air & oil filter clean/check", "Chain & sprocket clean", "Brake & clutch adjust", "Battery & wiring check", "20-point safety inspection"],
  },
  {
    icon: Gear,
    t: "Doorstep Bike Service",
    price: "₹299",
    d: "Skip the workshop. Our mechanic comes to your home or office with tools, parts and a portable workstation.",
    items: ["At your home / office", "Same-day slot", "Most jobs done on-site", "Genuine OEM parts", "Bring-along spare-parts kit", "Transparent on-spot billing"],
  },
  {
    icon: Bolt,
    t: "Brake & Clutch",
    price: "₹399",
    d: "Spongy brakes, slipping clutch, hard pedal? Diagnosed and fixed by specialists — safety first, always.",
    items: ["Brake pad/shoe replacement", "Brake bleeding & fluid top-up", "Clutch plate replacement", "Clutch cable & adjustment", "Disc-brake servicing", "Road-test verification"],
  },
  {
    icon: Wrench,
    t: "Engine Repair & Overhaul",
    price: "from ₹1,499",
    d: "From mystery noises to full overhauls — handled by certified engine specialists with original parts.",
    items: ["Engine diagnosis", "Top-end overhaul", "Bottom-end overhaul", "Carburetor / FI service", "Cylinder & piston work", "Compression testing"],
  },
  {
    icon: Bolt,
    t: "Electrical & Battery",
    price: "from ₹399",
    d: "Self-start trouble, weak headlamp, indicator failure, dead battery — diagnosed and fixed on the spot.",
    items: ["Battery testing & replacement", "Self-start motor repair", "Wiring & connector fix", "Headlamp & indicators", "Horn, switches, sensors", "Regulator/rectifier"],
  },
  {
    icon: Bike,
    t: "Emergency Roadside Help",
    price: "Call now",
    d: "Stuck on the road? Our rapid-response team reaches you in ~30 minutes with tools and common spare parts.",
    items: ["~30 min response", "Most issues fixed on-spot", "Free tow if needed", "Pay only after the bike runs", "All-day availability", "All Hyderabad covered"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative bg-white py-16 md:py-20 overflow-hidden">
        <Gear className="absolute -right-20 -top-20 w-[420px] h-[420px] text-[var(--graphite)] opacity-[0.04] gear-spin pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="max-w-3xl">
              <div className="section-tag mb-4">Everything We Do</div>
              <h1 className="font-display font-black text-[var(--graphite)] text-4xl md:text-6xl leading-[1.05]">
                One trusted team. <span className="text-[var(--orange)]">Every bike service.</span>
              </h1>
              <p className="mt-5 text-lg text-[var(--steel)] max-w-xl">
                From a quick oil change to a full engine rebuild — our certified mechanics handle it all,
                at your doorstep or our workshop.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={PHONE} className="btn-mech"><Phone className="w-4 h-4" /> Book a Service</a>
                <a href={WHATSAPP} className="btn-mech btn-mech-outline"><WhatsApp className="w-4 h-4" /> WhatsApp Us</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Alternating zig-zag service rows */}
      <section className="bg-white pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          {SERVICES.map(({ icon: Icon, t, price, d, items }, i) => (
            <Reveal key={i} delay={50}>
              <div className={`grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-5 relative">
                  <div className="bg-[var(--graphite)] text-white clip-bevel border-2 border-[var(--graphite)] p-8 h-full relative overflow-hidden">
                    <Gear className="absolute -right-10 -bottom-10 w-48 h-48 opacity-[0.07] gear-spin" />
                    <div className="text-[10px] uppercase tracking-widest font-bold text-[var(--orange)]">Service {String(i + 1).padStart(2, "0")}</div>
                    <h2 className="font-display font-black text-3xl md:text-4xl mt-2">{t}</h2>
                    <div className="mt-4 inline-flex items-center gap-2 bg-[var(--orange)] text-white px-3 py-1.5 clip-bevel-sm font-display font-extrabold">
                      {price}
                    </div>
                    <p className="mt-4 text-white/80">{d}</p>
                    <a href={WHATSAPP} className="btn-mech mt-6"><WhatsApp className="w-4 h-4" /> Book This</a>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="mech-card clip-bevel p-6 md:p-8 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 bg-[var(--orange)] text-white flex items-center justify-center clip-bevel-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="font-display font-bold text-[var(--graphite)] uppercase tracking-wider text-sm">What's included</div>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {items.map((it, k) => (
                        <li key={k} className="flex gap-2 text-sm text-[var(--graphite)]">
                          <Check className="w-4 h-4 text-[var(--orange)] mt-0.5 shrink-0" /> {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[var(--orange)] text-white text-center relative overflow-hidden">
        <Gear className="absolute -left-32 -top-32 w-[420px] h-[420px] opacity-10 gear-spin" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
          <Reveal>
            <h2 className="font-display font-black text-4xl md:text-5xl">Not sure which service you need?</h2>
            <p className="mt-4 text-white/90">Describe the issue on WhatsApp — we'll recommend the right service and lock in a fair price.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a href={WHATSAPP} className="btn-mech btn-mech-navy"><WhatsApp className="w-4 h-4" /> Ask on WhatsApp</a>
              <a href={PHONE} className="btn-mech btn-mech-outline"><Phone className="w-4 h-4" /> Call Now</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

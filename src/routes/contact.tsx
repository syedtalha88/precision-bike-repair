import { Gear, Phone, WhatsApp, Mail, Check } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { LeadForm } from "@/components/lead-form";
import { PHONE, WHATSAPP, EMAIL, EMAIL_LINK, PHONE_DISPLAY } from "@/lib/site";
import { useSeo } from "@/lib/seo";

const SEO_META = [
  { title: "Contact A2Z Bike Services — Hyderabad | Call 95536 09372" },
  {
    name: "description",
    content:
      "Get in touch with A2Z Bike Services. Call, WhatsApp or email — we respond in minutes. Doorstep bike service across Hyderabad.",
  },
  { property: "og:title", content: "Contact A2Z Bike Services" },
  { property: "og:description", content: "Call, WhatsApp or email A2Z Bike Services. Doorstep bike repair across Hyderabad." },
];

export default function ContactPage() {
  useSeo(SEO_META);
  const channels = [
    { icon: Phone, label: "Call Us", value: PHONE_DISPLAY, href: PHONE, sub: "Fastest way to book", accent: "var(--orange)" },
    { icon: WhatsApp, label: "WhatsApp", value: "Chat instantly", href: WHATSAPP, sub: "Send photos of your bike", accent: "#25D366" },
    { icon: Mail, label: "Email", value: EMAIL, href: EMAIL_LINK, sub: "We reply within 1 working day", accent: "var(--navy)" },
  ];
  return (
    <>
      <section className="relative bg-white py-16 md:py-20 overflow-hidden">
        <Gear className="absolute -left-32 -bottom-32 w-[420px] h-[420px] text-[var(--graphite)] opacity-[0.04] gear-spin pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="section-tag mb-4">Get in Touch</div>
              <h1 className="font-display font-black text-[var(--graphite)] text-4xl md:text-6xl leading-[1.05]">
                Bike trouble? <span className="text-[var(--orange)]">Reach out — we'll handle it.</span>
              </h1>
              <p className="mt-5 text-lg text-[var(--steel)] max-w-xl">
                Pick the channel that's easiest for you. A real human will respond in minutes — usually with a quote
                and a same-day mechanic slot.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {channels.map(({ icon: Icon, label, value, href, sub, accent }, i) => (
              <Reveal key={i} delay={i * 80}>
                <a href={href} className="block mech-card clip-bevel p-6 group h-full">
                  <div
                    className="w-12 h-12 flex items-center justify-center clip-bevel-sm text-white mb-4"
                    style={{ background: accent }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[var(--steel)]">{label}</div>
                  <div className="font-display font-extrabold text-xl text-[var(--graphite)] mt-1 group-hover:text-[var(--orange)] transition-colors">
                    {value}
                  </div>
                  <div className="text-sm text-[var(--steel)] mt-2">{sub}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[oklch(0.98_0.005_250)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-start">
          <Reveal className="lg:col-span-5">
            <div className="section-tag mb-4">Visit / Service Area</div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--graphite)] leading-[1.05]">
              We come to you. <span className="text-[var(--orange)]">All over Hyderabad.</span>
            </h2>
            <p className="mt-4 text-[var(--steel)]">
              Doorstep bike repair, free pickup-and-drop and emergency roadside service — covering Gachibowli, Madhapur,
              HITEC City, Kondapur, Kukatpally, Banjara Hills, Jubilee Hills, Begumpet, Ameerpet, Secunderabad,
              Mehdipatnam, Tolichowki, Manikonda, LB Nagar, Dilsukhnagar, Miyapur and more.
            </p>

            <div className="mt-8 bg-white border-2 border-[var(--graphite)] clip-bevel p-6">
              <div className="text-xs uppercase tracking-widest font-bold text-[var(--steel)]">Working Hours</div>
              <div className="font-display font-extrabold text-2xl text-[var(--graphite)] mt-1">Mon – Sun · 7 AM – 11 PM</div>
              <div className="mt-3 text-sm text-[var(--steel)]">Whole-day service. Emergency response available across all hours of operation.</div>
              <ul className="mt-4 space-y-2 text-sm text-[var(--graphite)]">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--orange)]" /> Free pickup & drop</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--orange)]" /> Genuine OEM parts</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--orange)]" /> Pay only after service</li>
              </ul>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <LeadForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

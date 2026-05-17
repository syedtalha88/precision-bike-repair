import { createFileRoute } from "@tanstack/react-router";
import { Gear, Wrench, Bolt, Phone, WhatsApp, Check, Star } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { PHONE, WHATSAPP, BRAND } from "@/lib/site";
import heroImg from "@/assets/hero-mechanic.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About A2Z Bike Services — Hyderabad's Trusted Bike Mechanics" },
      {
        name: "description",
        content:
          "Meet A2Z Bike Services — a Hyderabad-grown bike repair team built on honest pricing, genuine parts and same-day doorstep service.",
      },
      { property: "og:title", content: "About A2Z Bike Services" },
      { property: "og:description", content: "Hyderabad-grown bike repair team built on honest pricing and doorstep convenience." },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <Gear className="absolute -right-20 -top-20 w-[420px] h-[420px] text-[var(--graphite)] opacity-[0.04] gear-spin pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-7">
            <div className="section-tag mb-4">Our Story</div>
            <h1 className="font-display font-black text-[var(--graphite)] text-4xl md:text-6xl leading-[1.05]">
              We're riders <span className="text-[var(--orange)]">fixing bikes for riders.</span>
            </h1>
            <p className="mt-5 text-lg text-[var(--steel)] max-w-xl">
              {BRAND} started in a single Hyderabad garage with one rule: treat every customer's bike like it's our own.
              That rule built our reputation — and 12,000+ happy riders later, it still runs the workshop.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={PHONE} className="btn-mech"><Phone className="w-4 h-4" /> Call Us</a>
              <a href={WHATSAPP} className="btn-mech btn-mech-outline"><WhatsApp className="w-4 h-4" /> WhatsApp</a>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="relative">
              <div className="clip-bevel border-2 border-[var(--graphite)] overflow-hidden bg-[var(--graphite)]">
                <img src={heroImg} alt="A2Z Bike Services workshop in Hyderabad" width={1024} height={1024} loading="lazy" className="w-full h-[380px] object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[var(--orange)] text-white px-4 py-3 clip-bevel-sm border-2 border-[var(--graphite)] shadow-[4px_4px_0_var(--graphite)]">
                <div className="font-display font-extrabold text-2xl leading-none">10+</div>
                <div className="text-[10px] uppercase tracking-widest">Years on the road</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[var(--graphite)] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: "12,000+", t: "Bikes Serviced" },
            { n: "2,800+", t: "5-Star Reviews" },
            { n: "30 min", t: "Avg Response" },
            { n: "16+", t: "Areas Covered" },
          ].map((it, i) => (
            <Reveal key={i} delay={i * 60}>
              <div>
                <div className="font-display font-black text-3xl md:text-4xl text-[var(--orange)]">{it.n}</div>
                <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{it.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MISSION / VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="max-w-3xl">
              <div className="section-tag mb-4">What We Stand For</div>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--graphite)] leading-[1.05]">
                Honest work. Fair price. <span className="text-[var(--orange)]">Showing up on time.</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { icon: Wrench, t: "Skill First", d: "Every mechanic is trained, tested and re-trained. No shortcuts on diagnostics or repair quality." },
              { icon: Bolt, t: "Honest Pricing", d: "We quote before we start. No hidden charges. No surprise upsells when the bike is half-open." },
              { icon: Star, t: "Customer Obsession", d: "We win when riders trust us with their second bike, their friend's bike, and their family's bike." },
            ].map(({ icon: Icon, t, d }, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="mech-card p-6 clip-bevel h-full">
                  <div className="w-12 h-12 bg-[var(--orange)] text-white flex items-center justify-center clip-bevel-sm mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--graphite)]">{t}</h3>
                  <p className="text-sm text-[var(--steel)] mt-2 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-[oklch(0.98_0.005_250)] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="section-tag mx-auto mb-4">The Journey</div>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--graphite)]">
                Built one bike at a time.
              </h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--graphite)]/20 -translate-x-1/2" />
            {[
              { y: "2014", t: "One Garage, One Mechanic", d: "Started as a single-room workshop in Hyderabad, fixing bikes for neighbours." },
              { y: "2017", t: "Doorstep Service Launched", d: "Started carrying tools to customers instead of waiting for them to come to us." },
              { y: "2020", t: "City-wide Coverage", d: "Hit 16 active service areas across Hyderabad & Secunderabad." },
              { y: "2023", t: "12,000+ Bikes Serviced", d: "Crossed our biggest milestone — and our 2,800th five-star review." },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className={`relative grid md:grid-cols-2 gap-6 mb-10 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="font-display font-black text-4xl text-[var(--orange)]">{s.y}</div>
                    <h3 className="font-display font-bold text-xl text-[var(--graphite)] mt-1">{s.t}</h3>
                    <p className="text-sm text-[var(--steel)] mt-2">{s.d}</p>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 top-2 w-4 h-4 bg-[var(--orange)] border-2 border-[var(--graphite)] -translate-x-1/2 clip-bevel-sm" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="py-20 bg-[var(--graphite)] text-white relative overflow-hidden">
        <Gear className="absolute -right-32 -bottom-32 w-[480px] h-[480px] opacity-[0.05] gear-spin" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          <Reveal>
            <div className="section-tag mb-4">Our Promise</div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl">
              Five things we'll <span className="text-[var(--orange)]">always do.</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {[
              "Quote you the full price before any work begins.",
              "Use only genuine OEM parts — and give you the bill.",
              "Show up at the time we committed to.",
              "Test-ride the bike before handing it back.",
              "Take responsibility if something isn't right.",
            ].map((p, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex items-start gap-3 p-4 border border-white/15 clip-bevel-sm bg-white/[0.03]">
                  <Check className="w-5 h-5 text-[var(--orange)] mt-0.5 shrink-0" />
                  <span className="text-white/90">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <a href={PHONE} className="btn-mech"><Phone className="w-4 h-4" /> Talk to a Mechanic</a>
          </div>
        </div>
      </section>
    </>
  );
}

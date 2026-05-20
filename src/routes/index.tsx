import { useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-mechanic.jpg";
import emergencyImg from "@/assets/emergency.jpg";
import mapImg from "@/assets/coverage-map.jpg";
import { Gear, Wrench, Bolt, Phone, WhatsApp, Check, Star, Bike } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { LeadForm } from "@/components/lead-form";
import { PHONE, WHATSAPP } from "@/lib/site";
import { useSeo } from "@/lib/seo";

const SEO_META = [
  { title: "A2Z Bike Services — Doorstep Bike Repair Hyderabad | Call 95536 09372" },
  {
    name: "description",
    content:
      "A2Z Bike Services: doorstep bike repair, emergency roadside help & general service across Hyderabad. All brands. Honest pricing from ₹299. Call 95536 09372.",
  },
];

/* -------------------------------- Hero --------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--graphite) 1px, transparent 1px), linear-gradient(90deg, var(--graphite) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16 md:pt-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="section-tag mb-5">
              <span className="w-2 h-2 rounded-full bg-[var(--orange)] animate-pulse" /> Same-Day Bike Service · Hyderabad
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display font-black text-[var(--graphite)] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Bike Trouble?
              <br />
              We Come to You.
              <span className="text-[var(--orange)]"> Anywhere in Hyderabad.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg text-[var(--steel)] max-w-xl">
              Expert bike mechanics at your doorstep. Free pickup & drop. Genuine parts. Honest pricing.
              Most repairs done the same day.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={PHONE} className="btn-mech"><Phone className="w-4 h-4" /> Call Now</a>
              <a href={WHATSAPP} className="btn-mech btn-mech-outline"><WhatsApp className="w-4 h-4" /> WhatsApp Us</a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--graphite)]">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--orange)]" /> Free Pickup & Drop</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--orange)]" /> 30-min Response</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--orange)]" /> Genuine Spare Parts</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--orange)]" /> Whole-day Service</div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative">
          <Gear className="absolute -top-8 -right-8 w-72 h-72 text-[var(--graphite)] opacity-[0.06] gear-spin pointer-events-none" />
          <div className="relative">
            <div className="clip-bevel border-2 border-[var(--graphite)] overflow-hidden bg-[var(--graphite)]">
              <img
                src={heroImg}
                alt="A2Z Bike Services mechanic at modern workshop in Hyderabad"
                width={1024}
                height={1024}
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="float-badge absolute -left-4 -bottom-5 bg-[var(--orange)] text-white px-4 py-3 clip-bevel-sm border-2 border-[var(--graphite)] shadow-[4px_4px_0_var(--graphite)]">
              <div className="font-display font-extrabold text-lg leading-none">SAME DAY</div>
              <div className="text-[10px] uppercase tracking-widest">Service Promise</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white border-2 border-[var(--graphite)] px-3 py-2 clip-bevel-sm shadow-[3px_3px_0_var(--graphite)]">
              <div className="flex items-center gap-1 text-[var(--orange)]">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-3.5 h-3.5" />)}
              </div>
              <div className="text-[10px] mt-0.5 text-[var(--graphite)] font-semibold">4.9 · 2,800+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Lead Form (2nd section) ---------------------- */
function LeadSection() {
  return (
    <section className="relative bg-[oklch(0.98_0.005_250)] py-16 md:py-20 border-y border-border">
      <Gear className="absolute -left-20 -bottom-20 w-72 h-72 text-[var(--graphite)] opacity-[0.04] gear-spin pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="section-tag mb-4">Free Instant Quote</div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--graphite)] leading-[1.05]">
              Tell us about your bike. <span className="text-[var(--orange)]">Get a free quote in minutes.</span>
            </h2>
            <p className="mt-4 text-[var(--steel)] max-w-lg">
              Drop your details and we'll reach out with an honest price — no obligation. Most riders get
              their mechanic dispatched the same day.
            </p>
            <ul className="mt-6 space-y-2.5 text-[var(--graphite)]">
              {[
                "No-obligation free quote",
                "Reply within 5–10 minutes",
                "Whole-day support across Hyderabad",
                "Pay only after the job is done",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-3"><Check className="w-5 h-5 text-[var(--orange)]" /> {t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={120}>
            <LeadForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Trust badges ---------------------------- */
function TrustBadges() {
  const items = [
    { n: "10+", t: "Years Experience" },
    { n: "12k+", t: "Bikes Serviced" },
    { n: "100%", t: "Genuine Parts" },
    { n: "Free", t: "Pickup & Drop" },
    { n: "Whole Day", t: "Service Hours" },
  ];
  return (
    <section className="bg-[var(--graphite)] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-[var(--orange)] clip-bevel-sm shrink-0">
              <Bolt className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-display font-extrabold text-xl leading-none">{it.n}</div>
              <div className="text-[11px] uppercase tracking-wider text-white/70 mt-1">{it.t}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Services ------------------------------ */
function Services() {
  const services = [
    { t: "General Bike Service", d: "Complete check-up, oil change, brake & chain tuning. Bike feels brand new.", price: "from ₹799" },
    { t: "Doorstep Bike Service", d: "Our mechanic comes to your home or office. No travel. No waiting.", price: "from ₹299" },
    { t: "Brake & Clutch Work", d: "Spongy brakes? Slipping clutch? Safe, precise repairs with genuine parts.", price: "from ₹399" },
    { t: "Engine Repair & Overhaul", d: "From minor noises to full overhauls. Done by certified engine specialists.", price: "from ₹1,499" },
    { t: "Electrical & Battery", d: "Battery, wiring, self-start, headlamp, indicators — fixed on the spot.", price: "from ₹399" },
    { t: "Emergency Breakdown", d: "Stuck on the road? Our rapid-response team reaches you in 30 mins.", price: "Call now" },
  ];
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start mb-10">
            <div className="section-tag mb-4">What We Fix</div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--graphite)] max-w-3xl">
              Every bike problem, <span className="text-[var(--orange)]">solved professionally.</span>
            </h2>
            <p className="mt-3 text-[var(--steel)] max-w-2xl">
              From routine service to emergency breakdowns — one trusted team for everything your bike needs.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={`mech-card p-6 ${i % 2 ? "lg:translate-y-6" : ""} clip-bevel h-full`}>
                <div className="h-1.5 w-16 bg-[var(--orange)] mb-5 -skew-x-12" />
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 bg-[var(--graphite)] text-[var(--orange)] flex items-center justify-center clip-bevel-sm">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <Gear className="w-6 h-6 text-[var(--steel)] opacity-30" />
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--graphite)]">{s.t}</h3>
                <p className="mt-2 text-sm text-[var(--steel)] leading-relaxed">{s.d}</p>
                <div className="mt-5 flex items-center justify-between border-t border-dashed border-border pt-4">
                  <span className="font-display font-bold text-[var(--orange)]">{s.price}</span>
                  <a href={WHATSAPP} className="text-xs font-bold uppercase tracking-wider text-[var(--graphite)] hover:text-[var(--orange)]">
                    Book →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Bike Types We Repair ------------------------ */
function BikeTypes() {
  const types = [
    { t: "Commuter Bikes", d: "Splendor, Shine, Platina, Pulsar — daily-ride mileage masters." },
    { t: "Sports Bikes", d: "Pulsar RS, Apache RR, R15, Gixxer SF — precision tuning & performance care." },
    { t: "Cruisers", d: "Royal Enfield, Avenger, Meteor, Jawa — torque-tuning specialists." },
    { t: "Scooters", d: "Activa, Jupiter, Access, Dio, NTorq — full scooter service & diagnostics." },
    { t: "Adventure / Tourers", d: "Himalayan, Xpulse, Dominar — pre-trip checks & long-haul ready." },
    { t: "Electric Bikes & Scooters", d: "Ola, Ather, TVS iQube, Bajaj Chetak — battery, motor & controller experts." },
    { t: "Premium / Imported", d: "KTM, BMW G-series, Triumph, Kawasaki — sensitive jobs done right." },
    { t: "Vintage & Classic", d: "Old Bullet, Yezdi, RX100 — restoration with original-spec parts." },
  ];
  return (
    <section className="py-20 bg-[oklch(0.98_0.005_250)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-10">
            <div className="section-tag mb-4 mx-auto">Bike Types We Service</div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--graphite)]">
              Any rider. <span className="text-[var(--orange)]">Any machine.</span>
            </h2>
            <p className="mt-3 text-[var(--steel)] max-w-2xl mx-auto">
              From a daily commuter to a vintage classic — our mechanics have hands-on experience with every bike category on Indian roads.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {types.map((t, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="mech-card clip-bevel p-5 h-full">
                <div className="w-11 h-11 mb-3 bg-[var(--orange)] text-white flex items-center justify-center clip-bevel-sm">
                  <Bike className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-lg text-[var(--graphite)]">{t.t}</h3>
                <p className="text-sm text-[var(--steel)] mt-1.5 leading-relaxed">{t.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Emergency ------------------------------- */
function Emergency() {
  return (
    <section className="relative bg-[var(--graphite)] text-white overflow-hidden">
      <div className="warn-stripe h-3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-400 text-black font-display font-extrabold text-xs uppercase tracking-widest">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" /> Emergency · Live Now
            </div>
            <h2 className="mt-5 font-display font-black text-4xl md:text-5xl leading-tight">
              Bike broke down?
              <br /><span className="text-[var(--orange)]">We're 30 minutes away.</span>
            </h2>
            <p className="mt-4 text-white/80 max-w-lg text-lg">
              Whole-day roadside assistance across Hyderabad. Call once — our mechanic reaches your exact
              location with tools, parts, and a smile.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["Reaches you in 30 minutes", "Most issues fixed on the spot", "If not, free tow to nearest workshop", "Pay only after the bike runs"].map((t, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <Check className="w-5 h-5 text-yellow-400" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={PHONE} className="btn-mech" style={{ background: "#facc15", color: "#111", borderColor: "#facc15" }}>
                <Phone className="w-4 h-4" /> Emergency Call
              </a>
              <a href={WHATSAPP} className="btn-mech btn-mech-outline" style={{ background: "transparent", color: "white", borderColor: "white" }}>
                <WhatsApp className="w-4 h-4" /> Share Location
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative">
            <img
              src={emergencyImg}
              alt="Emergency bike roadside assistance in Hyderabad"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[360px] object-cover clip-bevel border-2 border-yellow-400"
            />
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-3 clip-bevel-sm border-2 border-black font-display font-extrabold">
              <div className="text-2xl leading-none">30 MIN</div>
              <div className="text-[10px] uppercase tracking-widest mt-1">Avg Response</div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="warn-stripe h-3" />
    </section>
  );
}

/* ------------------------------ Why Choose ----------------------------- */
function WhyChoose() {
  const items = [
    { t: "Certified Mechanics", d: "Every technician is trained, background-verified, and has 5+ years of hands-on experience." },
    { t: "Genuine Parts Only", d: "We never use duplicates. You get OEM parts with bill — same as company showrooms." },
    { t: "Transparent Pricing", d: "You see the price before we start. No hidden costs. No surprises." },
    { t: "Doorstep Convenience", d: "Most services done at your home. Save time, fuel, and the workshop wait." },
    { t: "Trained for Every Brand", d: "Hero, Honda, Bajaj, RE, KTM, TVS, Yamaha, Suzuki, Jawa, electric — we know them all." },
    { t: "Trusted by Hyderabad", d: "2,800+ five-star reviews. 12,000+ bikes serviced. The numbers speak." },
  ];
  return (
    <section className="py-20 bg-[oklch(0.98_0.005_250)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <div className="section-tag mb-4">Why Choose Us</div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--graphite)] leading-[1.05]">
            Hyderabad's most <span className="text-[var(--orange)]">trusted</span> bike service team.
          </h2>
          <p className="mt-4 text-[var(--steel)]">
            We treat your bike like our own. Built on honest work, fair pricing, and showing up on time — every time.
          </p>
        </Reveal>
        <div className="lg:col-span-8">
          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
            <div className="space-y-6">
              {items.map((it, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex gap-5">
                    <div className="relative shrink-0">
                      <div className="w-10 h-10 bg-white border-2 border-[var(--graphite)] flex items-center justify-center clip-bevel-sm">
                        <Bolt className="w-4 h-4 text-[var(--orange)]" />
                      </div>
                    </div>
                    <div className="flex-1 pb-1">
                      <h3 className="font-display font-bold text-lg text-[var(--graphite)]">{it.t}</h3>
                      <p className="text-sm text-[var(--steel)] mt-1">{it.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Reviews -------------------------------- */
function Reviews() {
  const data = [
    { n: "Ravi Kumar", a: "Gachibowli", r: 5, t: "Booked at 10 AM, mechanic was at my door by 11. Replaced clutch plates with genuine parts. Bike feels new. Fair price too." },
    { n: "Priya Reddy", a: "Madhapur", r: 5, t: "Was stranded near HITEC City at night. They reached in 25 mins, fixed the battery issue on the spot. Lifesavers." },
    { n: "Anil Sharma", a: "Banjara Hills", r: 5, t: "Best bike mechanic in Hyderabad, honestly. No upselling, no nonsense. Quick pickup & drop. Highly recommended." },
    { n: "Suresh M.", a: "Kukatpally", r: 5, t: "Royal Enfield service done at home. Technician knew the bike inside out. Got proper bill and clear pricing." },
    { n: "Fatima A.", a: "Tolichowki", r: 5, t: "I don't know much about bikes — they explained everything clearly and didn't overcharge. Will use again." },
    { n: "Karthik V.", a: "Kondapur", r: 5, t: "Booked doorstep service via WhatsApp. Polite, on time, professional. Bike is running smoother than ever." },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="section-tag mb-4">Customer Reviews</div>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--graphite)] max-w-2xl">
                2,800+ Hyderabad riders <span className="text-[var(--orange)]">trust us.</span>
              </h2>
            </div>
            <div className="flex items-center gap-3 text-[var(--graphite)]">
              <div className="flex">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-5 h-5 text-[var(--orange)]" />)}</div>
              <span className="font-display font-bold text-2xl">4.9</span>
              <span className="text-sm text-[var(--steel)]">Google rating</span>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((r, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="mech-card p-6 relative clip-bevel h-full">
                <div className="absolute -top-3 -left-3 bg-[var(--orange)] text-white w-10 h-10 flex items-center justify-center font-display font-black text-2xl border-2 border-[var(--graphite)] clip-bevel-sm">"</div>
                <div className="flex mb-3">{Array.from({ length: r.r }).map((_, k) => <Star key={k} className="w-4 h-4 text-[var(--orange)]" />)}</div>
                <p className="text-[var(--graphite)] text-sm leading-relaxed">{r.t}</p>
                <div className="mt-4 pt-4 border-t border-dashed border-border flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-sm text-[var(--graphite)]">{r.n}</div>
                    <div className="text-xs text-[var(--steel)]">{r.a}, Hyderabad</div>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--steel)]">Verified</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Brands --------------------------------- */
function Brands() {
  const brands = [
    "Hero", "Honda", "Yamaha", "Royal Enfield", "Bajaj", "TVS", "KTM", "Suzuki",
    "Jawa", "Kawasaki", "Mahindra", "BMW", "Triumph", "Harley-Davidson", "Ducati",
    "Husqvarna", "Aprilia", "Vespa",
  ];
  return (
    <section className="py-20 bg-[oklch(0.98_0.005_250)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-10">
            <div className="section-tag mb-4 mx-auto">Bikes We Service</div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--graphite)]">
              Every major brand. <span className="text-[var(--orange)]">Every model.</span>
            </h2>
            <p className="mt-3 text-[var(--steel)] max-w-2xl mx-auto">
              From daily commuters to premium tourers — if it rides on two wheels (petrol), we service it.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {brands.map((b, i) => (
            <Reveal key={b} delay={Math.min(i * 25, 300)}>
              <div className="bg-white border-2 border-[var(--graphite)] py-4 text-center clip-bevel-sm hover:bg-[var(--graphite)] hover:text-white transition-colors group cursor-default h-full flex flex-col justify-center">
                <div className="font-display font-extrabold text-base tracking-tight group-hover:text-white">{b}</div>
                <div className="text-[10px] uppercase tracking-widest text-[var(--steel)] group-hover:text-[var(--orange)] mt-1">All models</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Pricing -------------------------------- */
function Pricing() {
  const plans = [
    {
      n: "Basic Service",
      p: "599",
      hidden: false,
      tag: "Periodic check-up",
      f: ["Engine oil top-up", "Chain lube & cleaning", "Air filter cleaning", "Brake adjustment", "General inspection"],
    },
    {
      n: "Full Service",
      p: "899",
      hidden: false,
      tag: "Most Popular",
      pop: true,
      f: ["Engine oil change (genuine)", "Chain & sprocket service", "Brake & clutch tuning", "Spark plug check", "Wash & polish", "25-point safety check"],
    },
    {
      n: "Doorstep + Pickup",
      p: "???",
      hidden: true,
      tag: "Zero-effort service",
      f: ["Free pickup from your location", "Full service at workshop", "Genuine parts only", "25-point quality check", "Free drop back home", "Premium care, top-to-bottom"],
    },
  ];
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-10">
            <div className="section-tag mx-auto mb-4">Honest Pricing</div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--graphite)]">
              No hidden costs. <span className="text-[var(--orange)]">Ever.</span>
            </h2>
            <p className="mt-3 text-[var(--steel)] max-w-xl mx-auto">
              Final price locked in before we start. You approve, we work. That simple.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((pl, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className={`mech-card p-7 clip-bevel relative h-full ${pl.pop ? "border-[var(--orange)] border-[2.5px] shadow-[6px_6px_0_var(--graphite)]" : ""}`}>
                {pl.pop && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--orange)] text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 border-2 border-[var(--graphite)]">
                    ★ Most Popular
                  </div>
                )}
                <div className="text-xs uppercase tracking-widest text-[var(--steel)] font-bold">{pl.tag}</div>
                <h3 className="font-display font-extrabold text-2xl mt-2 text-[var(--graphite)]">{pl.n}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  {pl.hidden ? (
                    <div className="flex flex-col">
                      <span className="font-display font-black text-3xl md:text-4xl text-[var(--graphite)] tracking-tight">
                        Custom Quote
                      </span>
                      <span className="text-xs uppercase tracking-widest text-[var(--orange)] font-bold mt-1">
                        Call to unlock price 🔒
                      </span>
                    </div>
                  ) : (
                    <>
                      <span className="font-display font-black text-5xl text-[var(--graphite)]">₹{pl.p}</span>
                      <span className="text-sm text-[var(--steel)]">/ onwards</span>
                    </>
                  )}
                </div>
                <ul className="mt-6 space-y-2.5">
                  {pl.f.map((it, k) => (
                    <li key={k} className="flex gap-2 text-sm text-[var(--graphite)]">
                      <Wrench className="w-4 h-4 text-[var(--orange)] shrink-0 mt-0.5" /> {it}
                    </li>
                  ))}
                </ul>
                {pl.hidden ? (
                  <a href={PHONE} className="btn-mech mt-7 w-full btn-mech-navy">
                    <Phone className="w-4 h-4" /> Call for Quote
                  </a>
                ) : (
                  <a href={WHATSAPP} className={`btn-mech mt-7 w-full ${pl.pop ? "" : "btn-mech-outline"}`}>
                    <WhatsApp className="w-4 h-4" /> Book Now
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-xs text-[var(--steel)] mt-6 max-w-2xl mx-auto">
          * Air filter, oil filter & other consumable spare-part costs are not included and will be charged at MRP. You'll see all costs before approval.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- How It Works ---------------------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Call or WhatsApp", d: "Tell us your bike model and issue. Takes 30 seconds." },
    { n: "02", t: "Mechanic Assigned", d: "We dispatch the right expert with parts and tools." },
    { n: "03", t: "Repair at Doorstep", d: "Most jobs done at your home. Pickup if workshop needed." },
    { n: "04", t: "Pay After Done", d: "Inspect the work. Pay only when you're 100% satisfied." },
  ];
  return (
    <section id="how" className="py-20 bg-[var(--graphite)] text-white relative overflow-hidden">
      <Gear className="absolute -left-32 -bottom-32 w-[420px] h-[420px] opacity-[0.04] gear-spin" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <Reveal>
          <div className="text-center mb-12">
            <div className="section-tag mx-auto mb-4">The Process</div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl">
              Easier than ordering food. <span className="text-[var(--orange)]">4 steps.</span>
            </h2>
          </div>
        </Reveal>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-white/20" />
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="relative">
                <div className="bg-white text-[var(--graphite)] p-6 clip-bevel border-2 border-[var(--orange)] h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-display font-black text-3xl text-[var(--orange)]">{s.n}</div>
                    <div className="w-10 h-10 bg-[var(--graphite)] text-[var(--orange)] flex items-center justify-center clip-bevel-sm">
                      <Gear className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg">{s.t}</h3>
                  <p className="text-sm text-[var(--steel)] mt-1.5">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={PHONE} className="btn-mech"><Phone className="w-4 h-4" /> Start in 30 Seconds</a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Service Areas --------------------------- */
function Areas() {
  const areas = [
    "Gachibowli", "Madhapur", "HITEC City", "Kondapur", "Kukatpally",
    "Banjara Hills", "Jubilee Hills", "Begumpet", "Ameerpet", "Secunderabad",
    "Mehdipatnam", "Tolichowki", "Manikonda", "LB Nagar", "Dilsukhnagar", "Miyapur",
  ];
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div>
            <div className="section-tag mb-4">Service Areas</div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--graphite)]">
              We cover <span className="text-[var(--orange)]">all of Hyderabad.</span>
            </h2>
            <p className="mt-3 text-[var(--steel)]">
              From HITEC City to Secunderabad — our doorstep teams reach every corner. Not sure if you're covered? Just call.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span key={a} className="px-3 py-1.5 border border-[var(--graphite)] text-xs font-bold uppercase tracking-wider text-[var(--graphite)] clip-bevel-sm hover:bg-[var(--orange)] hover:text-white hover:border-[var(--orange)] transition cursor-default">
                  {a}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={PHONE} className="btn-mech"><Phone className="w-4 h-4" /> Check My Area</a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative">
            <img
              src={mapImg}
              alt="Map of Hyderabad showing A2Z Bike Services coverage areas"
              width={1280}
              height={1024}
              loading="lazy"
              className="w-full h-auto object-cover clip-bevel border-2 border-[var(--graphite)]"
            />
            <div className="absolute top-4 left-4 bg-white border-2 border-[var(--graphite)] px-3 py-2 clip-bevel-sm shadow-[3px_3px_0_var(--graphite)]">
              <div className="text-[10px] uppercase tracking-widest text-[var(--steel)] font-bold">Live Coverage</div>
              <div className="font-display font-extrabold text-[var(--graphite)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Hyderabad-wide
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- FAQ --------------------------------- */
function FAQ() {
  const faqs = [
    { q: "How fast can a mechanic reach me?", a: "For regular doorstep service, same day — usually within 2–4 hours. For emergencies, average response time across Hyderabad is 30 minutes." },
    { q: "Do you use genuine spare parts?", a: "Yes. We only use OEM/company-authorised parts and you get a proper bill for every part replaced." },
    { q: "Is doorstep service more expensive?", a: "No. Doorstep service starts at just ₹299 — usually the same as workshop visits. You save time and fuel, that's the only difference." },
    { q: "What if my bike can't be fixed at my doorstep?", a: "If a workshop job is needed, we offer free pickup, full service, and free drop back. Your bike, our problem." },
    { q: "What are your service hours?", a: "We operate whole-day, every day. Emergency response is available across Hyderabad through all our operating hours." },
    { q: "Which areas in Hyderabad do you cover?", a: "All of Hyderabad and Secunderabad including Gachibowli, Madhapur, Kondapur, Kukatpally, Banjara Hills, LB Nagar, and many more." },
    { q: "How do I pay?", a: "Cash, UPI, all major cards. You pay only after the work is done and you're happy with it." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 bg-[oklch(0.98_0.005_250)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-10">
            <div className="section-tag mx-auto mb-4">FAQ</div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[var(--graphite)]">Quick answers.</h2>
          </div>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="bg-white border-2 border-[var(--graphite)] clip-bevel-sm overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 hover:bg-[oklch(0.98_0.005_250)]"
                >
                  <div className="flex items-center gap-3">
                    <Bolt className={`w-4 h-4 text-[var(--orange)] transition-transform ${open === i ? "rotate-90" : ""}`} />
                    <span className="font-display font-bold text-[var(--graphite)]">{f.q}</span>
                  </div>
                  <span className="font-display font-black text-[var(--orange)] text-2xl leading-none">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <div className="px-5 pb-5 pt-0 text-sm text-[var(--steel)] border-t border-dashed border-border">
                    {f.a}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Final CTA ------------------------------ */
function FinalCTA() {
  return (
    <section className="relative py-20 bg-[var(--orange)] text-white overflow-hidden">
      <Gear className="absolute -right-32 -top-32 w-[500px] h-[500px] opacity-10 gear-spin pointer-events-none" />
      <Gear className="absolute -left-40 -bottom-40 w-[420px] h-[420px] opacity-10 gear-spin-fast pointer-events-none" style={{ animationDirection: "reverse" }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--graphite)] text-white font-display font-extrabold text-xs uppercase tracking-widest mb-6">
            Stop searching. Start riding.
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.05]">
            Your bike deserves a mechanic
            <br />it can trust.
          </h2>
          <p className="mt-5 text-white/90 text-lg max-w-2xl mx-auto">
            Book now and a certified mechanic will reach you today. Free pickup. Genuine parts. Honest price.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={PHONE} className="btn-mech btn-mech-navy"><Phone className="w-4 h-4" /> Call Now</a>
            <a href={WHATSAPP} className="btn-mech btn-mech-outline"><WhatsApp className="w-4 h-4" /> WhatsApp Now</a>
          </div>
          <div className="mt-6 text-sm text-white/80 font-bold uppercase tracking-widest">
            Available Now · Same Day Service
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- PAGE ---------------------------------- */
export default function Index() {
  useSeo(SEO_META);
  // suppress lint: Link imported for forward links inside sections later
  void Link;
  return (
    <>
      <Hero />
      <LeadSection />
      <TrustBadges />
      <Services />
      <BikeTypes />
      <Emergency />
      <WhyChoose />
      <Reviews />
      <Brands />
      <Pricing />
      <HowItWorks />
      <Areas />
      <FAQ />
      <FinalCTA />
    </>
  );
}

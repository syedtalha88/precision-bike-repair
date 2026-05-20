import { Link } from "react-router-dom";
import { Reveal } from "@/components/reveal";
import { BRAND, EMAIL, EMAIL_LINK, PHONE_DISPLAY } from "@/lib/site";
import { useSeo } from "@/lib/seo";

const SEO_META = [
  { title: "Privacy Policy — A2Z Bike Services" },
  { name: "description", content: "How A2Z Bike Services collects, uses and protects your personal information." },
  { name: "robots", content: "index, follow" },
];

export default function PrivacyPage() {
  useSeo(SEO_META);
  const sections: { h: string; b: React.ReactNode }[] = [
    {
      h: "1. Who We Are",
      b: <p>{BRAND} ("we", "us", "our") operates this website and provides two-wheeler repair and service across Hyderabad. This policy explains how we handle personal information collected through our website, phone, WhatsApp and in person.</p>,
    },
    {
      h: "2. Information We Collect",
      b: (
        <>
          <p>We collect information you provide to us, such as:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Name, mobile number, email address</li>
            <li>Bike make, model, registration number, year, and issue description</li>
            <li>Service address, area or pickup location</li>
            <li>Payment and invoice details</li>
            <li>Photos of the bike taken for diagnosis and quality records</li>
            <li>Communications via call, WhatsApp, email or our website forms</li>
          </ul>
          <p className="mt-2">We may also collect technical information automatically — IP address, browser type, device type, pages visited and approximate location — through cookies and similar technologies.</p>
        </>
      ),
    },
    {
      h: "3. How We Use Your Information",
      b: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide quotes, schedule services and dispatch mechanics</li>
          <li>Communicate booking status, follow-ups and service reminders</li>
          <li>Process payments and issue invoices</li>
          <li>Improve service quality, resolve disputes and train staff</li>
          <li>Marketing and promotional updates (you can opt out anytime)</li>
          <li>Comply with legal, tax and regulatory obligations</li>
        </ul>
      ),
    },
    {
      h: "4. Legal Basis",
      b: <p>We process your information based on your consent, the necessity to perform the service you've requested, our legitimate business interests, and compliance with applicable laws.</p>,
    },
    {
      h: "5. Sharing Your Information",
      b: (
        <>
          <p>We do not sell your personal data. We may share information only with:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Our trained mechanics and field staff (only what is needed to perform the job)</li>
            <li>Payment processors, communication providers (e.g., WhatsApp, SMS) and IT vendors under strict confidentiality</li>
            <li>Regulatory authorities, law enforcement, or courts when legally required</li>
            <li>Insurance, manufacturer or warranty providers if you ask us to assist with a claim</li>
          </ul>
        </>
      ),
    },
    {
      h: "6. WhatsApp Communications",
      b: <p>When you contact us via WhatsApp or submit a form that opens WhatsApp, your messages are transmitted through WhatsApp's infrastructure and are subject to WhatsApp's own privacy policy in addition to ours.</p>,
    },
    {
      h: "7. Cookies & Analytics",
      b: <p>This website may use cookies and third-party analytics (e.g., Google Analytics, Google Ads conversion tracking, Meta Pixel) to measure ad performance and improve user experience. You can disable cookies in your browser settings, though some features may not work correctly.</p>,
    },
    {
      h: "8. Data Retention",
      b: <p>We retain your information only as long as needed to provide the service, meet legal/tax obligations, and resolve disputes. Service records may be retained for up to 7 years where required by law.</p>,
    },
    {
      h: "9. Data Security",
      b: <p>We use reasonable administrative, technical and physical safeguards to protect your information. However, no internet transmission is fully secure. You share information with us at your own risk and are responsible for keeping your devices and accounts secure.</p>,
    },
    {
      h: "10. Your Rights",
      b: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Request a copy of the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of data, subject to legal retention requirements</li>
          <li>Withdraw consent or opt out of marketing communications</li>
          <li>File a complaint with the relevant data protection authority</li>
        </ul>
      ),
    },
    {
      h: "11. Children",
      b: <p>Our services are not intended for individuals under 18. We do not knowingly collect data from minors. If you believe a minor has provided us data, please contact us so we can delete it.</p>,
    },
    {
      h: "12. Third-Party Links",
      b: <p>Our website may contain links to third-party websites (e.g., WhatsApp, Google Maps). We are not responsible for the privacy practices of those sites and encourage you to review their policies.</p>,
    },
    {
      h: "13. Changes to This Policy",
      b: <p>We may update this policy from time to time. The latest version will always be available on this page with the "Last updated" date.</p>,
    },
    {
      h: "14. Contact Us",
      b: (
        <p>
          For privacy-related queries, email <a className="underline text-[var(--orange)]" href={EMAIL_LINK}>{EMAIL}</a> or call <strong>{PHONE_DISPLAY}</strong>.
        </p>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="section-tag mb-4">Legal</div>
          <h1 className="font-display font-black text-[var(--graphite)] text-4xl md:text-5xl leading-[1.05]">
            Privacy <span className="text-[var(--orange)]">Policy</span>
          </h1>
          <p className="mt-3 text-sm text-[var(--steel)]">Last updated: {new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}</p>
        </Reveal>

        <div className="mt-10 space-y-8 text-[var(--graphite)] leading-relaxed">
          {sections.map((s, i) => (
            <Reveal key={i} delay={i * 20}>
              <div>
                <h2 className="font-display font-extrabold text-xl text-[var(--graphite)] under-bolt inline-block">{s.h}</h2>
                <div className="mt-3 text-sm text-[var(--steel)] space-y-2">{s.b}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-sm text-[var(--steel)]">
          See also: <Link to="/terms" className="underline text-[var(--orange)]">Terms of Service</Link>
        </div>
      </div>
    </section>
  );
}

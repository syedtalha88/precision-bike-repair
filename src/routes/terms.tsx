import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { BRAND, EMAIL, EMAIL_LINK, PHONE_DISPLAY } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — A2Z Bike Services" },
      { name: "description", content: "Terms governing services provided by A2Z Bike Services, Hyderabad." },
      { name: "robots", content: "index, follow" },
    ],
  }),
});

function TermsPage() {
  const sections: { h: string; b: React.ReactNode }[] = [
    {
      h: "1. Acceptance of Terms",
      b: <p>By contacting, booking, or availing any service from {BRAND} ("we", "us", "Company"), you ("Customer") agree to be bound by these Terms of Service. If you do not agree, do not use our services.</p>,
    },
    {
      h: "2. Scope of Services",
      b: (
        <>
          <p>We provide two-wheeler repair, periodic service, doorstep service, pickup-and-drop, roadside assistance, and related services within Hyderabad and Secunderabad.</p>
          <p className="mt-2">Acceptance of any job is at our sole discretion based on technical feasibility, parts availability, location, and Customer cooperation.</p>
        </>
      ),
    },
    {
      h: "3. Quotes & Pricing",
      b: (
        <>
          <p>All published prices (including ₹299 doorstep service, ₹599 basic service, ₹799 general service, ₹899 full service, ₹399 brake & clutch) are starting prices for labour only and exclude:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Spare parts, consumables, air filter, oil filter, engine oil, lubricants and fluids</li>
            <li>Pickup-and-drop charges (where applicable beyond our standard service area)</li>
            <li>Taxes as applicable from time to time</li>
            <li>Specialised diagnostics, advanced repairs, or non-standard bike models</li>
          </ul>
          <p className="mt-2">A final quote is shared with the Customer for approval before work begins. We are not liable for verbal estimates given before physical inspection.</p>
        </>
      ),
    },
    {
      h: "4. Customer Responsibilities",
      b: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide accurate contact details, bike model, registration, and a truthful description of the issue.</li>
          <li>Remove all personal belongings, accessories, documents and valuables from the vehicle prior to service or pickup. We are not responsible for any items left in the bike.</li>
          <li>Ensure you are the legal owner or authorised user of the vehicle being serviced.</li>
          <li>Disclose any prior accidents, modifications, aftermarket parts, or known defects.</li>
          <li>Be present (or authorise a representative) for service approval, payment and handover.</li>
        </ul>
      ),
    },
    {
      h: "5. Spare Parts & OEM Compatibility",
      b: <p>We use genuine OEM or company-authorised spare parts wherever available. If a Customer specifically requests an aftermarket, refurbished, or second-hand part, we may install it at the Customer's risk — no warranty applies to such parts or to any consequential damage arising from them.</p>,
    },
    {
      h: "6. Pre-existing Conditions & Limited Diagnostics",
      b: <p>Bike servicing may reveal pre-existing defects, hidden wear, internal damage, or modifications that were not visible before the work began. We are not responsible for such pre-existing conditions, nor for any failure that arises from them after service. We will inform the Customer and provide a revised quote; the Customer may decline further work, in which case basic reassembly/diagnostic charges may apply.</p>,
    },
    {
      h: "7. Service Workmanship Guarantee",
      b: <p>Our workmanship is covered against verifiable defects for 7 days from the date of service for the specific job performed. This is limited to re-doing the affected work and does not extend to: (a) parts not supplied by us, (b) damage caused by misuse, accidents, water-logging, racing or non-recommended fuel/oil, (c) issues unrelated to the work performed. Parts carry only the manufacturer's warranty, if any, and claims must be made directly with the manufacturer.</p>,
    },
    {
      h: "8. Limitation of Liability",
      b: (
        <>
          <p>To the maximum extent permitted by law, our total aggregate liability arising out of or related to any service shall not exceed the labour amount actually paid by the Customer for that specific job.</p>
          <p className="mt-2">We are not liable for: indirect, incidental, special, punitive or consequential damages; loss of use; loss of business; loss of earnings; rental/replacement vehicle costs; towing costs beyond what we explicitly offer; or any third-party claims.</p>
        </>
      ),
    },
    {
      h: "9. Roadside Assistance",
      b: <p>Estimated response times for roadside assistance (e.g., ~30 minutes) are best-effort indicative estimates and depend on traffic, weather, distance, and mechanic availability. No guarantee of arrival time is given. If we are unable to complete a roadside repair, we will, at our discretion and at the prevailing rates, assist with towing the vehicle to the nearest workshop.</p>,
    },
    {
      h: "10. Pickup, Transit & Drop",
      b: <p>During pickup, transit and drop of the vehicle, the Customer agrees that ordinary risks of transit apply. We take reasonable care but are not liable for cosmetic wear-and-tear, minor scratches, theft of unsecured accessories, or events caused by force majeure. The vehicle's road-tax, insurance, fitness, PUC and registration must be valid; we may refuse pickup if documents are missing or invalid.</p>,
    },
    {
      h: "11. Payment Terms",
      b: <p>Payment is due immediately upon completion of service. Accepted methods include cash, UPI and major cards. Unpaid invoices may attract a lien on the vehicle; we may retain the vehicle until full payment is received. Any disputes must be raised in writing within 24 hours of service completion.</p>,
    },
    {
      h: "12. Cancellation & No-Show",
      b: <p>Bookings may be cancelled free of charge up to 30 minutes before the scheduled mechanic dispatch. After dispatch, a minimum visit/labour fee may apply. Repeated no-shows may result in decline of future bookings.</p>,
    },
    {
      h: "13. Photos & Documentation",
      b: <p>We may photograph the vehicle before, during and after service for quality, training, dispute-resolution and marketing purposes (with bike details anonymised). If you object, please inform us in writing at the time of booking.</p>,
    },
    {
      h: "14. Insurance",
      b: <p>Servicing is not a substitute for vehicle insurance. The Customer is solely responsible for maintaining valid insurance on the vehicle. We do not provide insurance, do not handle insurance claims, and are not liable for any insurance-related consequences.</p>,
    },
    {
      h: "15. Force Majeure",
      b: <p>We are not liable for delays or failures due to events beyond reasonable control, including natural disasters, riots, strikes, pandemics, government orders, internet/communication failures, supply-chain disruptions, or accidents during transit not caused by our negligence.</p>,
    },
    {
      h: "16. Intellectual Property",
      b: <p>All content on this website — including the {BRAND} name, logo, designs, photographs, copy and graphics — is owned by us. No use, reproduction or distribution is permitted without prior written consent.</p>,
    },
    {
      h: "17. Governing Law & Jurisdiction",
      b: <p>These Terms are governed by the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts at Hyderabad, Telangana. The Customer agrees first to attempt good-faith resolution by contacting us via the channels listed below before initiating any legal action.</p>,
    },
    {
      h: "18. Changes to Terms",
      b: <p>We may update these Terms at any time. The latest version will always be available on this page. Continued use of our services after changes constitutes acceptance of the revised Terms.</p>,
    },
    {
      h: "19. Contact",
      b: (
        <p>
          For any questions about these Terms, contact <a className="underline text-[var(--orange)]" href={EMAIL_LINK}>{EMAIL}</a> or call <strong>{PHONE_DISPLAY}</strong>.
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
            Terms of <span className="text-[var(--orange)]">Service</span>
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
          See also: <Link to="/privacy" className="underline text-[var(--orange)]">Privacy Policy</Link>
        </div>
      </div>
    </section>
  );
}

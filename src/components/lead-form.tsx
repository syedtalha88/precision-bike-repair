import { useState } from "react";
import { z } from "zod";
import { WHATSAPP, WEB3FORMS_KEY, BRAND } from "@/lib/site";
import { WhatsApp, Wrench, Check } from "@/components/icons";
import { trackFormSubmit } from "@/lib/analytics";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid phone number"),
  bike: z.string().trim().min(2, "Enter bike model").max(80),
  area: z.string().trim().min(2, "Enter your area").max(80),
  issue: z.string().trim().max(500).optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;
type Status = "idle" | "sending" | "sent" | "error";

export function LeadForm() {
  const [data, setData] = useState({ name: "", phone: "", bike: "", area: "", issue: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(data);
    if (!res.success) {
      const next: Errors = {};
      res.error.issues.forEach((i) => {
        const k = i.path[0] as keyof Errors;
        if (!next[k]) next[k] = i.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const body = {
        access_key: WEB3FORMS_KEY,
        subject: `New Lead — ${res.data.name} (${res.data.bike})`,
        from_name: `${BRAND} Website`,
        name: res.data.name,
        phone: res.data.phone,
        bike: res.data.bike,
        area: res.data.area,
        issue: res.data.issue || "General service",
        // Honeypot
        botcheck: "",
      };
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      const json = (await r.json().catch(() => ({}))) as { success?: boolean; message?: string };
      if (!r.ok || !json.success) {
        throw new Error(json.message || "Submission failed");
      }
      trackFormSubmit();
      setStatus("sent");
      setData({ name: "", phone: "", bike: "", area: "", issue: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please call us instead.");
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="bg-white border-2 border-[var(--graphite)] clip-bevel p-6 sm:p-8 shadow-[8px_8px_0_var(--graphite)]">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 bg-[var(--orange)] flex items-center justify-center clip-bevel-sm">
          <Wrench className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-display font-extrabold text-[var(--graphite)] text-xl leading-tight">Book in 30 seconds</div>
          <div className="text-xs text-[var(--steel)] uppercase tracking-widest font-bold">Free quote · No-obligation</div>
        </div>
      </div>

      {/* Honeypot — hidden from real users */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-3">
        <Field label="Your Name" id="lf-name" error={errors.name}>
          <input id="lf-name" name="name" value={data.name} onChange={update("name")} placeholder="Ravi Kumar" className="form-input" maxLength={80} />
        </Field>
        <Field label="Mobile Number" id="lf-phone" error={errors.phone}>
          <input id="lf-phone" name="phone" value={data.phone} onChange={update("phone")} placeholder="98XXXXXXXX" className="form-input" inputMode="tel" maxLength={15} />
        </Field>
        <Field label="Bike Model" id="lf-bike" error={errors.bike}>
          <input id="lf-bike" name="bike" value={data.bike} onChange={update("bike")} placeholder="Royal Enfield Classic 350" className="form-input" maxLength={80} />
        </Field>
        <Field label="Your Area" id="lf-area" error={errors.area}>
          <input id="lf-area" name="area" value={data.area} onChange={update("area")} placeholder="Gachibowli" className="form-input" maxLength={80} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="What's the issue? (optional)" id="lf-issue" error={errors.issue}>
            <textarea id="lf-issue" name="issue" value={data.issue} onChange={update("issue")} placeholder="E.g., Brake noise, oil change, won't start..." rows={3} className="form-input resize-none" maxLength={500} />
          </Field>
        </div>
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-mech mt-5 w-full justify-center disabled:opacity-60">
        <WhatsApp className="w-4 h-4" />
        {status === "sending" ? "Sending..." : "Send & Get Free Quote"}
      </button>

      {status === "sent" && (
        <div className="mt-3 flex items-center gap-2 text-sm text-green-700 font-semibold">
          <Check className="w-4 h-4" /> Thanks! We'll call you back within minutes.
        </div>
      )}
      {status === "error" && (
        <div className="mt-3 text-sm text-red-600 font-semibold">
          {errorMsg} <a href={WHATSAPP} className="underline">WhatsApp us instead</a>.
        </div>
      )}
      <p className="mt-3 text-xs text-[var(--steel)] text-center">
        By submitting, you agree to our <a href="/terms" className="underline">Terms</a> & <a href="/privacy" className="underline">Privacy Policy</a>.
      </p>
    </form>
  );
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-[var(--graphite)]">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="text-xs text-red-600 mt-1 block">{error}</span>}
    </label>
  );
}

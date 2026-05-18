// Google Ads / Analytics tracking helpers.
// ▼▼ FILL THESE IN AFTER YOU CREATE THE GOOGLE ADS CONVERSIONS ▼▼
// 1. In Google Ads: Tools → Conversions → +New conversion action.
// 2. Create a "Phone call clicks" conversion (for call tracking) and a
//    "Website" conversion of category "Lead → Submit lead form" (for
//    WhatsApp / form clicks).
// 3. Copy the AW-XXXXXXXXXX/abcDEFghi value into the matching constant below.
//    Until then the events are no-ops (safe to leave as placeholders).

export const GA_MEASUREMENT_ID = ""; // e.g. "G-XXXXXXXXXX" (GA4 — optional)
export const ADS_CONVERSION_ID = ""; // e.g. "AW-1234567890"
export const ADS_CALL_LABEL = ""; // e.g. "AbCdEfGhIj"  (call conversion)
export const ADS_WHATSAPP_LABEL = ""; // e.g. "ZyXwVuTsRq" (lead conversion)
export const ADS_FORM_LABEL = ""; // e.g. "PqRsTuVwXy"  (form submit conversion)

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

export function gtagEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

function sendConversion(sendTo: string, callback?: () => void) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    callback?.();
    return;
  }
  window.gtag("event", "conversion", {
    send_to: sendTo,
    event_callback: callback,
  });
}

export function trackCallClick(href?: string, callback?: () => void) {
  gtagEvent("call_click", { event_category: "engagement", phone_href: href });
  if (ADS_CONVERSION_ID && ADS_CALL_LABEL) {
    sendConversion(`${ADS_CONVERSION_ID}/${ADS_CALL_LABEL}`, callback);
  } else {
    callback?.();
  }
}

export function trackWhatsAppClick(href?: string, callback?: () => void) {
  gtagEvent("whatsapp_click", { event_category: "engagement", whatsapp_href: href });
  if (ADS_CONVERSION_ID && ADS_WHATSAPP_LABEL) {
    sendConversion(`${ADS_CONVERSION_ID}/${ADS_WHATSAPP_LABEL}`, callback);
  } else {
    callback?.();
  }
}

export function trackFormSubmit() {
  gtagEvent("generate_lead", { event_category: "lead_form" });
  if (ADS_CONVERSION_ID && ADS_FORM_LABEL) {
    sendConversion(`${ADS_CONVERSION_ID}/${ADS_FORM_LABEL}`);
  }
}

/** Attach delegated listeners so every <a href="tel:..."> and wa.me link is tracked. */
export function installClickTrackers() {
  if (typeof window === "undefined") return;
  if ((window as unknown as { __a2zTrackers?: boolean }).__a2zTrackers) return;
  (window as unknown as { __a2zTrackers?: boolean }).__a2zTrackers = true;

  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement | null;
    const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
    if (!anchor || !anchor.href) return;
    if (anchor.href.startsWith("tel:")) trackCallClick(anchor.href);
    else if (/wa\.me|api\.whatsapp\.com|whatsapp:\/\//.test(anchor.href)) trackWhatsAppClick(anchor.href);
  });
}

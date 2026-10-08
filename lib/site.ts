export const APK_URL =
  "https://play.google.com/store/apps/details?id=com.rmm.emisafepro&hl=en";

export const DEALER_URL = "http://login.emisafepro.com/login/user";

export const EMAIL = "lockuppay@gmail.com";

export const MAILTO = "mailto:lockuppay@gmail.com";

export const PHONES = [
  { tel: "tel:+917002453268", display: "+91 7002453268" },
  { tel: "tel:+916000757025", display: "+91 6000-757025" },
] as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export const btnGlass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export const btnDark =
  "inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark";

export function externalProps(href: string) {
  return {
    href,
    target: "_blank" as const,
    rel: "noopener noreferrer",
  };
}

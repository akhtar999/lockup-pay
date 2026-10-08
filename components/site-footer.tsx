import Link from "next/link";
import { Icon } from "@/components/icon";
import { APK_URL, DEALER_URL, EMAIL, MAILTO, NAV, PHONES, externalProps } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-brand-dark text-white">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 left-4 select-none text-6xl font-semibold tracking-tight text-white/[0.045] sm:text-8xl"
      >
        lockUp pay
      </p>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600">
              <Icon name="shield_lock" className="text-[22px]" />
            </span>
            <span className="font-semibold">
              lockUp pay
              <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 align-middle" />
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Enterprise smartphone financing security, persistent MDM zero-touch locks,
            risk-underwriting telematics, and retail EMI recovery infrastructure built
            for high-trust asset protection.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.18em] text-white/45">NAVIGATION</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.18em] text-white/45">QUICK ACCESS</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a {...externalProps(APK_URL)} className="text-white/80 hover:text-white">
                Download APK
              </a>
            </li>
            <li>
              <Link href="/terms" className="text-white/80 hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <a {...externalProps(DEALER_URL)} className="text-white/80 hover:text-white">
                Dealer Login
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-white/45">
              OPERATIONS & SUPPORT HUB
            </h2>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Active
            </span>
          </div>
          <p className="mt-4 text-xs font-semibold tracking-wide text-white/45">
            Toll-Free / Retail Helpline
          </p>
          <ul className="mt-2 space-y-1">
            {PHONES.map((phone) => (
              <li key={phone.tel}>
                <a href={phone.tel} className="text-sm font-semibold text-white hover:text-sky-200">
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-semibold tracking-wide text-white/45">Official Inquiries</p>
          <a href={MAILTO} className="mt-1 block text-sm font-semibold text-white hover:text-sky-200">
            {EMAIL}
          </a>
          <p className="mt-4 text-sm text-white/60">Desk Hours: Mon–Sat: 9:30 AM – 7:30 PM IST</p>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2025 lockUp pay (lockuppay.com). All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/terms" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
            <a {...externalProps(DEALER_URL)} className="hover:text-white">
              Dealer Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

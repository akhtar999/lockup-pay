"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";
import { APK_URL, DEALER_URL, NAV, externalProps } from "@/lib/site";

const linkClass =
  "rounded-full px-2.5 py-1.5 text-[13px] font-medium text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed top-6 right-0 left-0 z-50 px-4">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-4 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-dark"
      >
        Skip to content
      </a>
      <div
        className={`mx-auto max-w-6xl border border-white/15 bg-slate-900/90 shadow-2xl shadow-black/30 backdrop-blur-xl ${
          open ? "rounded-3xl" : "rounded-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-3 py-2">
          <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <Icon name="shield_lock" className="text-[22px]" />
            </span>
            <span className="min-w-0 text-left">
              <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
                lockUp pay
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="block text-[10px] font-medium tracking-[0.18em] text-white/55">
                MDM TELEMATICS
              </span>
            </span>
          </Link>

          <nav className="hidden items-center lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
            <a {...externalProps(APK_URL)} className={linkClass}>
              Download APK
            </a>
            <Link href="/terms" className={linkClass}>
              Terms & Conditions
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              {...externalProps(DEALER_URL)}
              className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:inline-flex"
            >
              Dealer Login
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="flex flex-col gap-1 border-t border-white/10 px-3 py-3 lg:hidden"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              {...externalProps(APK_URL)}
              className="rounded-2xl px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Download APK
            </a>
            <Link
              href="/terms"
              className="rounded-2xl px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Terms & Conditions
            </Link>
            <a
              {...externalProps(DEALER_URL)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Dealer Login
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

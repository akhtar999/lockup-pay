"use client";

import { useState } from "react";
import { ConsolePreview } from "@/components/console-preview";
import { Icon } from "@/components/icon";

const tabs = [
  {
    id: "support",
    label: "Support",
    items: [
      {
        icon: "bolt",
        title: "Instant Support 24/7",
        body: "Fast response for all IMEI questions and dealer key allocations via phone and WhatsApp.",
      },
      {
        icon: "alt_route",
        title: "Smart Routing to Store Team",
        body: "Direct overdue customer payments straight into your own UPI merchant bank account.",
      },
      {
        icon: "visibility",
        title: "One Shared View for Full Visibility",
        body: "Give every store executive access to real-time handset status, cycles, and recovery receipts.",
      },
    ],
  },
  {
    id: "recovery",
    label: "Recovery",
    items: [
      {
        icon: "screen_lock_portrait",
        title: "Overdue auto-lock",
        body: "Overdue auto-lock when an installment is missed.",
      },
      {
        icon: "qr_code_2",
        title: "Full-screen payment banner",
        body: "Full-screen payment banner with dealer QR.",
      },
      {
        icon: "payments",
        title: "Release on store receipt",
        body: "Release the handset when the receipt hits the store account.",
      },
    ],
  },
  {
    id: "commerce",
    label: "Commerce",
    items: [
      {
        icon: "storefront",
        title: "Keep the retail margin",
        body: "Self-finance the handset and keep the retail margin.",
      },
      {
        icon: "credit_score",
        title: "No bank rejection step",
        body: "No bank rejection step at the counter.",
      },
      {
        icon: "pin",
        title: "IMEI bound to the store",
        body: "Bind IMEI to the store before the customer leaves.",
      },
    ],
  },
  {
    id: "communication",
    label: "Communication",
    items: [
      {
        icon: "notifications_active",
        title: "Payment reminder",
        body: "Payment reminder on the handset.",
      },
      {
        icon: "call",
        title: "Dealer helpline",
        body: "Dealer helpline stays available.",
      },
      {
        icon: "chat",
        title: "Key allocation support",
        body: "WhatsApp and phone support for key allocation.",
      },
    ],
  },
] as const;

export function PlatformShowcase() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("support");
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.35),transparent_68%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white/70">
            Platform Showcase
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Build on{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              Trust.
            </span>{" "}
            Proven in Practice.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Say goodbye to defaults and manual chasing. lockUp pay gives your retail
            shop complete remote telematics and zero-friction collections.
          </p>
        </div>

        <div
          className="mx-auto mt-8 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/10 p-1"
          role="tablist"
          aria-label="Platform capabilities"
        >
          {tabs.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                className={`rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition ${
                  selected ? "bg-white text-brand-dark" : "text-white/70 hover:text-white"
                }`}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {current.items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/20 text-sky-200">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.06] backdrop-blur-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-sky-300">
                Dealer Telematics
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Self-Finance Handsets With Zero Commission Cut
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                Traditional financiers take 12% to 15% out of your margin on every unit
                sold. With lockUp pay, you finance directly, retain 100% of profit, and
                keep total control in your hands.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-medium">
                {["100% Retained Retail Profit", "Zero Bank Rejection Rates"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Icon name="check_circle" fill className="text-[20px] text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-white/10 p-3 sm:p-4 lg:border-t-0 lg:border-l">
              <ConsolePreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

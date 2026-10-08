import { ConsolePreview } from "@/components/console-preview";
import { Icon } from "@/components/icon";
import { PlatformShowcase } from "@/components/platform-showcase";
import {
  APK_URL,
  DEALER_URL,
  EMAIL,
  MAILTO,
  PHONES,
  btnGlass,
  btnPrimary,
  externalProps,
} from "@/lib/site";

const chips = [
  { label: "Samsung Knox (Galaxy S, A, M, F)", dot: "bg-blue-500" },
  { label: "Xiaomi / Redmi / POCO (HyperOS & MIUI)", dot: "bg-orange-500" },
  { label: "Vivo & iQOO (Funtouch OS)", dot: "bg-sky-500" },
  { label: "Oppo & OnePlus (ColorOS / OxygenOS)", dot: "bg-green-500" },
  { label: "Realme (Realme UI)", dot: "bg-yellow-400" },
  { label: "Motorola & Lenovo", dot: "bg-indigo-400" },
  { label: "Transsion (Tecno, Infinix, itel)", dot: "bg-teal-400" },
  { label: "Lava, Micromax & Indian OEMs", dot: "bg-rose-400" },
  { label: "Android 8.0 - 15 (Zero-Touch & Sideload)", dot: "bg-emerald-400" },
  { label: "Apple iOS & iPadOS (MDM Profile)", dot: "bg-slate-700" },
  { label: "4G / 5G Smart Keypads & Tablets", dot: "bg-violet-400" },
];

const features = [
  {
    icon: "usb_off",
    layer: "Security Layer 01",
    title: "1. File Transfer Lock",
    body: "Disable MTP and PTP file transfer functions completely through the USB cable to prevent unauthorized data backup, flashing, and bootloader manipulation.",
    footerIcon: "verified",
    footer: "Zero Data Exfiltration",
  },
  {
    icon: "no_photography",
    layer: "Security Layer 02",
    title: "2. Camera Lock",
    body: "Lock optical sensors at the hardware level. The user cannot capture photographs, record video clips, or operate third-party camera filters until EMI dues are cleared.",
    footerIcon: "sensors_off",
    footer: "Sensor-Level Block",
  },
  {
    icon: "apps",
    layer: "Security Layer 03",
    title: "3. Apps Lock",
    body: "Remotely disable and suspend major Android mobile apps like WhatsApp, Facebook, Instagram, and YouTube, displaying customizable payment reminder notifications.",
    footerIcon: "notifications_active",
    footer: "Targeted Nudge Lock",
  },
  {
    icon: "screen_lock_portrait",
    layer: "Security Layer 04",
    title: "4. Complete Device Lock",
    body: "Completely lock customer mobile handset if EMI is overdue. Handset presents an unskippable full-screen payment banner with dealer contact and instant QR code scan.",
    footerIcon: "qr_code_2",
    footer: "Overdue Auto-Lock",
  },
  {
    icon: "phonelink_erase",
    layer: "Security Layer 05",
    title: "5. Soft Reset Protection",
    body: "Disable reset function and recovery menus. The user cannot factory reset their mobile from settings or recovery partition to bypass MDM protection.",
    footerIcon: "shield",
    footer: "Anti-Bypass Architecture",
  },
  {
    icon: "phone_disabled",
    layer: "Security Layer 06",
    title: "6. Outgoing Call Restrict",
    body: "Selectively disable dialer outgoing communication capabilities while preserving inbound telecommunications and pre-authorized regulatory emergency contact options.",
    footerIcon: "call_missed",
    footer: "Dialer Level Control",
  },
];

const roi = [
  {
    icon: "verified",
    stat: "99.8%",
    label: "Recovery Rate",
    body: "Automated nudge locks ensure 0 defaulted smartphones across Vivo, Oppo, and Samsung lines.",
    footer: "Zero Delinquency Flow",
    emerald: true,
  },
  {
    icon: "payments",
    stat: "₹0",
    label: "Dealer Commission",
    body: "Keep 100% of profit margins on every in-house financed device. Zero bank cuts or intermediary deductions.",
    footer: "Full Margin Retention",
    emerald: false,
  },
  {
    icon: "timer",
    stat: "3-Min",
    label: "Counter Activation",
    body: "Instant QR scan & Knox binding directly before unboxing. Ready before customer leaves the counter.",
    footer: "Rapid Counter Handover",
    emerald: false,
  },
];

const reviews = [
  {
    quote:
      "Great App with awesome features! Now I am tension free to get EMI recover from customers. I highly recommended to all retailers. Thanks lockUp pay Team.",
    initials: "RV",
    name: "Rajesh Verma",
    store: "Verma Mobile Point, Delhi",
  },
  {
    quote:
      "Excellent communication. Great service, very professional. High recommended. I can self finance easily, Now my sales growing very fast with lockUp pay. Thank you so much and keep it up.",
    initials: "AS",
    name: "Amit Sharma",
    store: "Sharma Electronics & Mobile, Jaipur",
  },
  {
    quote:
      "Good Service, Launched a new features of lockUp pay app. It’s very easy to operate to manage my customer. Good going. Appreciated, Thank you much lockUp pay Team.",
    initials: "VP",
    name: "Vikram Patel",
    store: "Patel Telecom World, Ahmedabad",
  },
];

const leaders = [
  {
    initials: "MH",
    name: "Mirajul Hoque",
    role: "Operation Head",
    body: "Directs nationwide dealer onboarding, key allotment infrastructure, and customer recovery logistics across all states.",
  },
  {
    initials: "TH",
    name: "Tasharaf Hussein",
    role: "IT Head",
    body: "Architect of Knox-level device locks, real-time telemetry APIs, and resilient low-latency cloud infrastructure.",
  },
];

const steps = [
  {
    title: "Share your store details",
    body: "Fill in your shop details and speak to our team about your retail volume, goals and current setup.",
  },
  {
    title: "Install Client APK & Device Admin",
    body: "Download the lightweight client APK on target smartphones and enable Knox telematics in one click.",
  },
  {
    title: "Bind Key & Customer IMEI",
    body: "Scan your retailer activation QR key from the Dealer Portal. IMEI permanently locks to your store account.",
  },
  {
    title: "Go live with auto-protection",
    body: "Hand over handset with confidence. System automates monthly installment notifications and auto-lock protection.",
  },
];

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark pt-36 pb-20 text-white sm:pt-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(0,98,255,0.48),transparent_62%)]" />
        <div className="pointer-events-none absolute -left-16 top-40 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              ENTERPRISE TELECOM & MDM UTILITY • ZERO DELINQUENCY
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Protect Your EMI With{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                lockUp pay
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Empowering mobile store retailers to self-finance Android smartphones with
              complete peace of mind. Low EMI delinquency, remote device lock, and instant
              payment recovery.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a {...externalProps(APK_URL)} className={btnPrimary}>
                <Icon name="android" className="text-[20px]" />
                Download Client APK
              </a>
              <a {...externalProps(DEALER_URL)} className={btnGlass}>
                <Icon name="dashboard" className="text-[20px]" />
                Access Dealer Portal
              </a>
            </div>
          </div>
          <ConsolePreview />
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#07090f] via-indigo-800 to-sky-200 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white">
            UNIVERSAL HARDWARE & PLATFORM COMPATIBILITY
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
            Works seamlessly across all Android smartphones, tablets, keypads & iOS devices
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
            Deep OEM kernel integration, Knox Zero-Touch enrollment, and universal MDM
            payload provisioning for all chipsets (Snapdragon, MediaTek, Unisoc, Exynos,
            Tensor, Bionic).
          </p>
          <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
            {chips.map((chip) => (
              <li
                key={chip.label}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm"
              >
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${chip.dot}`} />
                {chip.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="features" className="scroll-mt-28 bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Benefits of lockUp pay
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              Lock, protect and <span className="text-primary">recover</span> delinquent devices
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Recover routine payments instantly and accurately. Your team stays focused.
              Your store cash flow stays positive.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon name={feature.icon} />
                </span>
                <p className="mt-5 w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                  {feature.layer}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-brand-dark">{feature.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{feature.body}</p>
                <p className="mt-6 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-medium text-slate-700">
                  <Icon name={feature.footerIcon} className="text-[20px] text-primary" />
                  {feature.footer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-primary">
              <Icon name="trending_up" className="text-[16px]" />
              PROVEN ROI IMPACT • STORE TELEMATICS
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              Turn Stalled Handset Loans Into{" "}
              <span className="text-primary">Instant Working Capital</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Retailers using lockUp pay recover an average of ₹1.8 Lakhs every quarter
              while reducing collection follow-up time by 92%.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {roi.map((card) => (
              <article key={card.label} className="rounded-3xl border border-slate-200 bg-surface p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={card.icon} />
                </span>
                <p className="mt-5 text-4xl font-semibold tracking-tight text-brand-dark">{card.stat}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-800">{card.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.body}</p>
                <p className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-medium text-slate-700">
                  {card.emerald ? <span className="h-2 w-2 rounded-full bg-emerald-500" /> : null}
                  {card.footer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PlatformShowcase />

      <section className="bg-gradient-to-b from-brand-dark via-brand-navy to-surface pt-20 pb-8 sm:pt-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
            Choose Our Platform
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Build on <span className="text-primary">Trust</span>. Proven in Practice.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Over 4,000 mobile retailers trust lockUp pay to eliminate defaults and protect
            their inventory.
          </p>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["4K+", "Happy Dealers", "Active mobile shopkeepers across India"],
              ["1L+", "Security Keys", "Handsets protected against delinquency"],
              ["50+", "Telecom Specialists", "Dedicated developers & live support staff"],
            ].map(([stat, label, detail]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-6">
                <dt className="text-sm text-white/60">{label}</dt>
                <dd className="mt-2 text-4xl font-semibold text-white">{stat}</dd>
                <p className="mt-2 text-sm text-white/55">{detail}</p>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 px-4 pb-16 sm:px-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.initials} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex gap-0.5 text-amber-500" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icon key={index} name="star" fill className="text-[18px]" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-semibold text-white">
                  {review.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-dark">{review.name}</span>
                  <span className="block text-xs text-slate-500">{review.store}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-28 bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Engineering Leadership
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              Meet My Team & Core Leadership
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              See our core company team members pioneering telecom software & asset protection.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {leaders.map((leader) => (
              <article key={leader.initials} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-base font-semibold text-white">
                    {leader.initials}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark">{leader.name}</h3>
                    <p className="text-sm font-medium text-primary">{leader.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{leader.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Quick & Easy Setup
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">
              Get running in 4 easy steps
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Activate any customer phone on the counter in under 3 minutes before dispatch.
            </p>
            <ol className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4 rounded-3xl border border-slate-200 bg-surface p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-dark">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-brand-navy p-6 text-white shadow-xl sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Icon name="support_agent" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Active Now
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold">Retailer Support & Onboarding Desk</h3>
            <p className="mt-2 text-sm text-white/65">Direct priority access for mobile shop dealers</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-white/50">
                DIRECT DEALER HELPLINE & OPERATIONS
              </p>
              <div className="mt-2 flex flex-col gap-1">
                {PHONES.map((phone) => (
                  <a key={phone.tel} href={phone.tel} className="text-lg font-semibold hover:text-sky-200">
                    {phone.display}
                  </a>
                ))}
              </div>
              <p className="mt-2 text-sm text-white/60">Instant key dispatch & merchant enrollment</p>
              <a href={PHONES[0].tel} className={`${btnPrimary} mt-4`}>
                <Icon name="call" className="text-[18px]" />
                Call Now
              </a>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-white/50">
                OFFICIAL DEALER DESK EMAIL
              </p>
              <a href={MAILTO} className="mt-2 block text-lg font-semibold hover:text-sky-200">
                {EMAIL}
              </a>
              <p className="mt-2 text-sm text-white/60">Fast response for quotes & corporate inquiries</p>
              <a href={MAILTO} className={`${btnGlass} mt-4`}>
                <Icon name="mail" className="text-[18px]" />
                Write Email
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4 text-sm sm:flex-row sm:items-center sm:justify-between">
              <p className="text-white/60">Counter Setup Guidance • 24/7 Key Allocation Support</p>
              <a {...externalProps(DEALER_URL)} className="font-semibold text-sky-300 hover:text-white">
                Dealer Portal Login
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-surface px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-gradient-to-r from-brand-dark via-[#102047] to-indigo-800 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to start protecting your EMI repayments?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">
            Join 4,000+ satisfied dealers across India. Activate device security in minutes.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a {...externalProps(APK_URL)} className={btnPrimary}>
              Download APK
            </a>
            <a {...externalProps(DEALER_URL)} className={btnGlass}>
              Dealer Login
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

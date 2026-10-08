import { Icon } from "@/components/icon";

const fleet = [
  {
    name: "Samsung Galaxy A15",
    status: "EMI Current",
    statusClass: "text-emerald-300",
    imei: "IMEI 86429...104",
    meta: "84% • Knox Active",
  },
  {
    name: "Vivo Y28 5G",
    status: "Due: ₹1,450",
    statusClass: "text-amber-300",
    imei: "IMEI 35912...883",
    meta: "Nudge Sent",
  },
  {
    name: "Oppo A78",
    status: "Locked (Day 3)",
    statusClass: "text-rose-300",
    imei: "IMEI 99401...720",
    meta: "release",
  },
] as const;

export function ConsolePreview() {
  return (
    <figure
      className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0d1424]/90 shadow-2xl shadow-black/40"
      aria-label="Preview of the dealer telematics console. This is a visual mock and does not control a handset."
    >
      <figcaption className="sr-only">
        Sample fleet: Samsung Galaxy A15 EMI current, Vivo Y28 5G with a due
        amount, and Oppo A78 shown locked. The release control is decorative.
      </figcaption>
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <span className="text-[11px] font-semibold tracking-[0.16em] text-white/70">
          LIVE TELEMATICS v3.4
        </span>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          LUDHIANA NODE: ACTIVE
        </span>
      </div>
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(180px,0.85fr)]">
        <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
          <div className="mb-3 flex items-end justify-between">
            <p className="text-xs font-medium text-white/50">Active Handset Fleet</p>
            <p className="text-sm font-semibold text-white">38 Connected</p>
          </div>
          <ul className="space-y-2">
            {fleet.map((device) => (
              <li
                key={device.name}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{device.name}</p>
                  <p className={`shrink-0 text-xs font-semibold ${device.statusClass}`}>
                    {device.status}
                  </p>
                </div>
                <div className="mt-1 flex items-center justify-between gap-3">
                  <p className="font-mono text-[11px] text-white/45">{device.imei}</p>
                  {device.meta === "release" ? (
                    <button
                      type="button"
                      disabled
                      title="Preview only"
                      className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white disabled:cursor-default disabled:opacity-100"
                    >
                      Release Lock
                    </button>
                  ) : (
                    <p className="text-[11px] text-white/55">{device.meta}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center bg-black/20 p-4">
          <div className="w-full max-w-[210px] rounded-[28px] border border-white/10 bg-gradient-to-b from-slate-900 to-black px-4 py-5 text-center shadow-inner">
            <span className="rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] font-bold tracking-[0.18em] text-rose-300">
              RESTRICTED
            </span>
            <Icon name="lock" className="mx-auto mt-4 text-[36px] text-white" />
            <p className="mt-2 text-sm font-semibold tracking-wide text-white">DEVICE LOCKED</p>
            <p className="mt-1 text-[11px] leading-snug text-white/55">
              Pay overdue installment to restore
            </p>
            <div className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white text-brand-dark">
              <Icon name="qr_code_2" className="text-[40px]" />
            </div>
            <p className="mt-3 text-sm font-semibold text-white">Payable: ₹1,999</p>
            <p className="mt-1 text-[11px] text-white/45">Emergency 112</p>
            <p className="text-[11px] font-medium text-sky-300">Knox v3.7</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-2.5 text-[11px] text-white/50">
        <span>Live Telemetry Channel: AES-256</span>
        <span>Sync 0.4s</span>
      </div>
    </figure>
  );
}

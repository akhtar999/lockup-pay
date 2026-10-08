export default function Loading() {
  return (
    <main id="content" className="bg-brand-dark pt-36 pb-20" aria-busy="true" aria-live="polite">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.16em] text-white/60">LOADING LOCKUP PAY</p>
        <div className="mt-6 h-12 max-w-xl animate-pulse rounded-2xl bg-white/10" />
        <div className="mt-4 h-24 max-w-2xl animate-pulse rounded-2xl bg-white/10" />
        <div className="mt-10 h-72 animate-pulse rounded-[28px] bg-white/10" />
      </div>
    </main>
  );
}

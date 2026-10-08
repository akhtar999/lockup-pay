"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="content" className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-4 pt-36 pb-20 text-center">
      <p className="text-xs font-semibold tracking-[0.18em] text-primary">SOMETHING WENT WRONG</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-dark">
        The page could not be shown
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        A rendering error stopped this view. You can try again, or return to the lockUp
        pay home page.
      </p>
      {error.digest ? (
        <p className="mt-2 text-xs text-slate-500">Reference {error.digest}</p>
      ) : null}
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
      >
        Try again
      </button>
    </main>
  );
}

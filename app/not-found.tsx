import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content" className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-4 pt-36 pb-20 text-center">
      <p className="text-xs font-semibold tracking-[0.18em] text-primary">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-brand-dark">
        This page is not on the lockUp pay site
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        The marketing site includes the home page and the terms of use. The address you
        opened does not match either one.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          Back to home
        </Link>
        <Link
          href="/terms"
          className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark"
        >
          Read the terms
        </Link>
      </div>
    </main>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/icon";
import { DEALER_URL, btnPrimary, externalProps } from "@/lib/site";
import { sectionSearchText, termsSections, type TermsSection } from "@/lib/terms";

function Clause({ section }: { section: TermsSection }) {
  return (
    <article id={section.id} className="clause scroll-mt-32 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-primary">CLAUSE {section.number}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-dark">
        {section.number.replace(/^0/, "")}. {section.title}
      </h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
        {section.blocks.map((block, index) => {
          if (block.type === "h3") {
            return (
              <h3 key={index} className="pt-2 text-base font-semibold text-brand-dark">
                {block.text}
              </h3>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={index} className="list-disc space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }
          return <p key={index}>{block.text}</p>;
        })}
      </div>
    </article>
  );
}

export function TermsDocument() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(termsSections[0].id);
  const [accepted, setAccepted] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const normalized = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      termsSections.filter((section) =>
        normalized ? sectionSearchText(section).includes(normalized) : true,
      ),
    [normalized],
  );
  const visibleIds = visible.map((section) => section.id).join("|");

  useEffect(() => {
    const nodes = visible
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const showing = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (showing?.target.id) setActiveId(showing.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [visible, visibleIds]);

  useEffect(() => {
    if (!confirming) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setConfirming(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [confirming]);

  function jumpTo(id: string) {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-brand-dark pt-36 pb-14 text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,rgba(0,98,255,0.4),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-white/80">
            LEGAL GOVERNANCE & MERCHANT TERMS • v3.4 ACTIVE
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Terms & Conditions & Platform Policy
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70">
            Governing the regulatory operation of lockUp pay telecom telematics, retail
            device management, payment aggregator interfaces, nodal escrow settlement, and
            merchant underwriting frameworks.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Effective October 2024", "Release 3.4.2", "RBI & PMLA Compliant"].map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold"
              >
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {visible.length > 0 ? (
          <div className="no-print sticky top-24 z-30 -mx-4 mb-4 flex gap-2 overflow-x-auto bg-surface/95 px-4 py-2 backdrop-blur lg:hidden">
            {visible.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => jumpTo(section.id)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${
                  activeId === section.id ? "bg-primary text-white" : "bg-white text-slate-600 shadow-sm"
                }`}
              >
                {section.number} {section.title}
              </button>
            ))}
          </div>
        ) : null}
        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="no-print hidden lg:sticky lg:top-28 lg:block lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto">
          <p className="text-xs font-semibold tracking-[0.16em] text-slate-500">CLAUSES</p>
          <nav aria-label="Clause index" className="mt-3 flex flex-col gap-1">
            {visible.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => jumpTo(section.id)}
                className={`rounded-2xl px-3 py-2 text-left text-sm ${
                  activeId === section.id
                    ? "bg-primary text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span className="mr-2 font-semibold">{section.number}</span>
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        <div>
          <div className="no-print mb-5 flex flex-col gap-3 sm:flex-row">
            <label className="relative flex-1">
              <span className="sr-only">Search clauses</span>
              <Icon
                name="search"
                className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[20px] text-slate-400"
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search clauses, KYC, T+3..."
                className="w-full rounded-full border border-slate-200 bg-white py-3 pr-4 pl-10 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-brand-dark hover:bg-slate-50"
            >
              <Icon name="print" className="text-[18px]" />
              Print
            </button>
          </div>

          <aside className="mb-5 rounded-3xl border border-red-200 bg-red-50 p-5 text-red-950">
            <h2 className="text-sm font-bold tracking-wide uppercase">
              Mandatory Reserve Bank of India (RBI) Merchant Notice
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              In accordance with Reserve Bank of India (RBI) Master Directions on Payment
              Aggregators (DPSS.CO.PD.No.1810/02.14.008/2019-20), onboarding and continuous
              settlement dispatch are strictly contingent on full verified KYC submission.
              Non-provision or submission of forged KYC instruments shall trigger immediate
              escrow freezes and refund to cardholders.
            </p>
          </aside>

          {visible.length === 0 ? (
            <div className="search-empty rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
              <h2 className="text-lg font-semibold text-brand-dark">No clauses match that search</h2>
              <p className="mt-2 text-sm text-slate-600">
                Nothing in the 16 sections matches “{query.trim()}”. Try KYC, T+3, escrow, or chargeback.
              </p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className={`${btnPrimary} mt-5`}
              >
                Clear search
              </button>
            </div>
          ) : null}

          <div className="space-y-4">
            {termsSections.map((section) => {
              const match = !normalized || sectionSearchText(section).includes(normalized);
              return (
                <div key={section.id} className="clause" hidden={!match}>
                  <Clause section={section} />
                </div>
              );
            })}
          </div>

          <section className="no-print mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-brand-dark">Acceptance</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              This is an on-screen acknowledgment only. lockUp pay does not collect an IP
              address or store a signature from this page.
            </p>
            <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-slate-800">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
                className="mt-1 h-4 w-4 accent-primary"
              />
              <span>
                I confirm that I am an authorized representative of my business entity. I
                have read, understood, and unconditionally agree to the lockUp pay Terms of
                Use, RBI Escrow policies, and telematics governance framework.
              </span>
            </label>
            <button
              type="button"
              disabled={!accepted}
              onClick={() => setConfirming(true)}
              className={`${btnPrimary} mt-5 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none`}
            >
              Accept & Continue to Dealer Portal
            </button>
          </section>
        </div>
        </div>
      </div>

      {confirming ? (
        <div className="no-print fixed inset-0 z-[70] flex items-end justify-center bg-brand-dark/70 p-4 sm:items-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ack-title"
            className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
          >
            <h2 id="ack-title" className="text-lg font-semibold text-brand-dark">
              Confirm before you continue
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              You are acknowledging these terms in this browser only. No signature is
              stored and no IP address is collected here. Continue to the dealer portal?
            </p>
            <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setConfirming(false)}
                className="rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700"
              >
                Stay on this page
              </button>
              <a
                {...externalProps(DEALER_URL)}
                className={btnPrimary}
                onClick={() => setConfirming(false)}
              >
                Continue to dealer portal
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

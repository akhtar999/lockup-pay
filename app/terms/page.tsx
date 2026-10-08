import type { Metadata } from "next";
import { TermsDocument } from "@/components/terms-document";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions & Platform Policy — lockUp pay",
  },
  description:
    "Terms governing lockUp pay telecom telematics, retail device management, payment aggregation, nodal escrow settlement, and merchant underwriting.",
};

export default function TermsPage() {
  return (
    <main id="content">
      <TermsDocument />
    </main>
  );
}

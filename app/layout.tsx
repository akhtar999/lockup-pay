import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "lockUp pay — Enterprise MDM & Smartphone Zero-Delinquency Platform",
    template: "%s — lockUp pay",
  },
  description:
    "lockUp pay helps mobile retailers self-finance Android smartphones with remote telematics, EMI recovery, and dealer onboarding.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.className} h-full antialiased`}>
      <body className="min-h-full bg-surface text-slate-900">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

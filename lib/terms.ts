export type TermsBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type TermsSection = {
  id: string;
  number: string;
  title: string;
  blocks: TermsBlock[];
};

export const termsSections: TermsSection[] = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction and Terms of Use",
    blocks: [
      {
        type: "p",
        text: 'Welcome to lockUp pay. The lockUp pay Platform is enterprise software and payment gateway infrastructure, including www.lockuppay.co.in and the mobile and point-of-sale utilities offered under the lockUp pay name (together, the "lockUp pay Platform").',
      },
      {
        type: "p",
        text: 'These Terms & Conditions & Platform Policy ("Terms") are a binding electronic agreement under the Information Technology Act, 2000 between the merchant, retailer, or user and lockUp pay Financial Technologies Private Limited ("lockUp pay").',
      },
      {
        type: "p",
        text: "You accept these Terms by downloading the APK, using the dealer dashboard, generating payment mandates, initiating device telematics locks, or integrating payment routing. If you do not accept these Terms, use of the lockUp pay Platform is prohibited.",
      },
      {
        type: "p",
        text: "KYC withholding. Amounts may be placed in escrow nodal accounts. Transactions received before approved identity verification are held. If KYC is not successfully completed within 15 days, lockUp pay may reverse collected funds to the source payers without liability.",
      },
    ],
  },
  {
    id: "services",
    number: "02",
    title: "Provision of Services",
    blocks: [
      {
        type: "p",
        text: "The lockUp pay Platform provides two capabilities.",
      },
      {
        type: "ul",
        items: [
          "Device Locking & Telematics: EMI lifecycle security, MDM lock enrollment, remote screen blocking on installment default, and geofence tracking for retail inventories.",
          "Payment Aggregation: UPI, cards, net banking, eNACH, payment links, and nodal escrow under applicable RBI circulars.",
        ],
      },
      {
        type: "p",
        text: "Services may change without prior notice. lockUp pay may set quotas, rate limits, or suspend endpoints where it observes abnormal risk or anomalous telemetry.",
      },
    ],
  },
  {
    id: "accounts",
    number: "03",
    title: "User Accounts & Registration Data",
    blocks: [
      {
        type: "p",
        text: "An active merchant account is required. Registration data must be true and complete. You are responsible for credentials, OTPs, and API secrets issued to the account.",
      },
      {
        type: "p",
        text: "The following is prohibited: deploying the APK to lock devices outside legitimate consumer-signed EMI financing agreements; sub-licensing, renting, or reselling dealer access, or pooling API tokens across unregistered storefronts; circumventing root-detection or security sandbox flags, or transmitting malware via lockUp pay endpoints.",
      },
    ],
  },
  {
    id: "eligibility",
    number: "04",
    title: "Eligibility & KYC",
    blocks: [
      {
        type: "p",
        text: "You must be at least 18 years of age and competent to contract under the Indian Contract Act, 1872. You must be an authorized telecom dealership, a consumer electronics outlet, or a licensed NBFC in India.",
      },
      {
        type: "p",
        text: "Anti-money-laundering information for onboarding includes PAN, Aadhaar, GSTIN, Shop & Establishment registration, a cancelled cheque, and CKYC. Partner banks may approve, restrict, or revoke processing.",
      },
    ],
  },
  {
    id: "ip",
    number: "05",
    title: "Content & Proprietary Rights",
    blocks: [
      {
        type: "p",
        text: "Platform intellectual property, including lock binaries, MDM server code, signing protocols, fraud models, the user interface, and logos, belongs to lockUp pay Financial Technologies Private Limited.",
      },
      {
        type: "p",
        text: "During an active subscription you receive a limited, revocable, non-exclusive, non-transferable license. Reverse engineering, decompiling the APK, or harvesting telematics feeds is actionable under Sections 43 and 66 of the Information Technology Act, 2000.",
      },
    ],
  },
  {
    id: "aml",
    number: "06",
    title: "Anti-Bribery, Anti-Corruption & AML",
    blocks: [
      {
        type: "p",
        text: "You shall comply with the Prevention of Corruption Act, 1988, the U.S. Foreign Corrupt Practices Act, and the Prevention of Money Laundering Act, 2002. The Platform shall not be used for proceeds of crime, terrorist financing, pyramid schemes, unauthorized foreign exchange, or banned digital items.",
      },
      {
        type: "p",
        text: "Suspicious transaction reports may be filed with FIU-IND where lockUp pay observes anomalous volume or structured split-ticket routing.",
      },
    ],
  },
  {
    id: "warranties",
    number: "07",
    title: "Exclusion of Warranties",
    blocks: [
      {
        type: "p",
        text: 'The Platform is provided "AS IS" and "AS AVAILABLE". lockUp pay disclaims warranties of merchantability, fitness for a particular purpose, carrier uptime, and uninterrupted NPCI or banking gateways.',
      },
      {
        type: "p",
        text: "lockUp pay is not responsible for carrier drops, Android kernel changes by end users, or third-party bank timeouts during settlement.",
      },
    ],
  },
  {
    id: "representations",
    number: "08",
    title: "User & Retailer Representations",
    blocks: [
      {
        type: "p",
        text: "You represent and warrant each of the following:",
      },
      {
        type: "ul",
        items: [
          "You have legal capacity and the licenses required for your business.",
          "You hold explicit written or biometric consumer consent before any remote lock.",
          "You do not impose unfair debit-card surcharges unless they are sanctioned.",
          "Your merchant category code is accurate.",
          "You do not store CVV or PIN data in dealer logs.",
          "You will permit audit on reasonable notice.",
          "Invoices match the GST numbers on record.",
          "You do not alter, spoof, or overwrite IMEI values.",
          "You will provide chargeback evidence within 48 hours of request.",
          "You remit GST and applicable local sales tax.",
        ],
      },
    ],
  },
  {
    id: "indemnity",
    number: "09",
    title: "Indemnity & Damage Caps",
    blocks: [
      {
        type: "p",
        text: "The merchant indemnifies lockUp pay, its parents, directors, banking affiliates, and officers for breach of these Terms, unauthorized immobilizations, store-caused data breaches, or RBI non-compliance, including card-scheme fines and reasonable legal fees.",
      },
      {
        type: "p",
        text: "To the extent Indian law allows, aggregate liability is capped at the gateway processing fees earned from that merchant in the one month before the event.",
      },
    ],
  },
  {
    id: "confidentiality",
    number: "10",
    title: "Confidentiality & Data Security",
    blocks: [
      {
        type: "p",
        text: "Each party shall keep confidential the other party's proprietary data, API documentation, trade secrets, and transaction logs. lockUp pay states controls consistent with PCI-DSS Level 1 and SOC 2 Type II.",
      },
      {
        type: "p",
        text: "Report credential leaks to support@lockuppay.co.in.",
      },
    ],
  },
  {
    id: "chargebacks",
    number: "11",
    title: "Chargebacks & Card Schemes",
    blocks: [
      {
        type: "p",
        text: "Card acceptance is subject to the rules of Visa, MasterCard, RuPay, and NPCI. On a chargeback, the amount may be offset from future settlement. You must respond within 48 hours with geo-tagged invoices and signed dispatch tokens.",
      },
      {
        type: "p",
        text: "Chargeback volume over 0.9% of monthly GMV can freeze escrow.",
      },
    ],
  },
  {
    id: "settlement",
    number: "12",
    title: "Settlement T+3",
    blocks: [
      {
        type: "p",
        text: "Collections pass through an RBI-authorized nodal escrow. Payout is on a T+3 basis in bank working days by NEFT or RTGS, excluding public and banking holidays. Merchant discount rate and convenience fees are deducted at capture.",
      },
      {
        type: "p",
        text: "Some enterprise and corporate card transactions carry an additional surcharge of up to 1.00% plus GST. Quarterly TDS is handled via TRACES.",
      },
    ],
  },
  {
    id: "credits",
    number: "13",
    title: "Credits, SLAs & Service Delivery",
    blocks: [
      {
        type: "p",
        text: "Promotional credits are valid for up to 3 calendar months and have no cash value. The digital delivery SLA for telematics tokens and payment URLs is under 15 minutes after valid authorization.",
      },
      {
        type: "p",
        text: "Physical accessories, including locking tags and display beacons, are delivered in 5 to 7 business days pan-India.",
      },
    ],
  },
  {
    id: "law",
    number: "14",
    title: "Governing Law & Arbitration",
    blocks: [
      {
        type: "p",
        text: "These Terms are governed by the laws of India. Disputes are referred to arbitration under the Arbitration and Conciliation Act, 1996. The seat and venue is Bengaluru, Karnataka. Courts in Bengaluru have exclusive jurisdiction, subject to arbitration.",
      },
    ],
  },
  {
    id: "escalation",
    number: "15",
    title: "Customer Protection & Escalation",
    blocks: [
      {
        type: "p",
        text: "Customer handling references the Reserve Bank of India customer-protection framework, Rule 5(9) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and the Digital Personal Data Protection Act, 2023.",
      },
      {
        type: "ul",
        items: [
          "Tier 1: 24/7 digital helpdesk, turnaround under 4 hours, for payment status, QR, and unlock tracking.",
          "Tier 2: senior compliance, 24–48 hours, for chargebacks, erroneous lock verification, KYC appeals, and settlement reconciliation.",
          "Tier 3: executive grievance ombudsman, maximum 7 days, for unaddressed disputes, privacy, and regulatory reporting.",
        ],
      },
    ],
  },
  {
    id: "schedule",
    number: "16",
    title: "Schedule I Aggregator Products",
    blocks: [
      {
        type: "h3",
        text: "Part A — Payment gateway",
      },
      {
        type: "p",
        text: "Visa, MasterCard, RuPay, Maestro, Diners, American Express, net banking across 55+ Indian banks, UPI, and cascade routing.",
      },
      {
        type: "h3",
        text: "Part B — Subscriptions and recurring EMI",
      },
      {
        type: "p",
        text: "Recurring EMI is offered via eNACH and UPI AutoPay. An SMS is sent 24 hours before debit, under the RBI recurring-mandate framework.",
      },
      {
        type: "h3",
        text: "Part C — Payment links and invoices",
      },
      {
        type: "p",
        text: "Payment links and invoices have a default expiry of 72 hours, with webhooks for status events.",
      },
      {
        type: "h3",
        text: "Part D — No-code payment pages",
      },
      {
        type: "p",
        text: "No-code payment pages include 1-click address capture, tokenized vaults, and RBI card-on-file tokenization.",
      },
    ],
  },
];

export function sectionSearchText(section: TermsSection) {
  return [
    section.number,
    section.title,
    ...section.blocks.flatMap((block) =>
      block.type === "ul" ? block.items : [block.text],
    ),
  ]
    .join(" ")
    .toLowerCase();
}

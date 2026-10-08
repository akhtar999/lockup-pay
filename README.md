# lockUp pay

Marketing site for **lockUp pay**, an enterprise smartphone-financing telematics platform for mobile retailers in India. Retailers use it to present EMI protection, device telematics, and dealer onboarding. This repository is the public website only: the home page and the terms of use.

It does not include a device client, an MDM agent, or any control that locks, releases, or manages a handset. Download and dealer-login buttons leave this site and open the existing store listing and dealer portal.

## Pages

### Home (`/`)

The landing page walks a retailer through the product:

- Fixed pill header with links to Home, Features, About, Contact, the client download, Terms, and Dealer Login
- Hero with the product promise and a glass telematics console preview
- Hardware compatibility across Android OEMs, iOS, tablets, and keypad phones
- Six security-layer cards: file transfer, camera, apps, full device lock, reset protection, and outgoing-call restriction
- Store ROI figures for recovery rate, dealer commission, and counter activation
- Platform showcase with Support, Recovery, Commerce, and Communication tabs, plus a live-console mock
- Dealer counts, reviews, and the two leadership profiles
- Four-step counter setup and the retailer support desk
- Closing call to action and footer with helplines, email, and desk hours

On small screens the header collapses into a real menu. The desktop nav stays in the pill.

### Terms (`/terms`)

The terms page is the merchant policy for lockUp pay Financial Technologies Private Limited. It includes:

- Release metadata (effective October 2024, release 3.4.2, RBI and PMLA)
- The mandatory RBI payment-aggregator notice
- Sixteen clauses, a sticky index, and scroll highlighting
- Search across clause titles and body text, with an empty state when nothing matches
- Print, which sends the clauses to the browser print dialog
- An acceptance checkbox. **Accept & Continue to Dealer Portal** stays disabled until the box is checked, then asks for a short confirmation before opening the dealer login. That step is an on-screen acknowledgment only. The page does not store a signature or collect an IP address.

Privacy Policy in the footer points at this same page. There is no separate privacy route.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- Plus Jakarta Sans
- Material Symbols Outlined, served from `public/fonts/`

Brand colors used in the UI: primary `#0062ff`, primary dark `#004cca`, dark `#090d1a`, navy `#0d1424`, and surface `#fafbff`.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

The dev server binds to `0.0.0.0` on port **43123**:

- This machine: [http://127.0.0.1:43123](http://127.0.0.1:43123)
- Other devices on the same network: `http://<this-machine-ip>:43123`

`127.0.0.1` is listed in `allowedDevOrigins` so Next.js will hydrate the dev client when you open that host. Without it, buttons such as the showcase tabs and the terms checkbox render but do not respond.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server on `0.0.0.0:43123` |
| `npm run build` | Production build |
| `npm start` | Serve the production build (port 3000 unless `PORT` is set) |
| `npm run lint` | ESLint |

To serve the production build on the same port as development:

```bash
npm run build
npx next start --hostname 0.0.0.0 --port 43123
```

## Project layout

```
app/                  routes, root layout, global styles
  page.tsx            home
  terms/page.tsx      terms and platform policy
  not-found.tsx       unknown routes
  error.tsx           render errors
  loading.tsx         route loading state
components/           header, footer, landing sections, terms UI
lib/site.ts           public links, phones, and email
lib/terms.ts          the sixteen clauses
public/fonts/         Material Symbols Outlined
```

## Public contact details

These are the same details shown on the site:

- Helpline: [+91 7002453268](tel:+917002453268)
- Helpline: [+91 6000-757025](tel:+916000757025)
- Email: [lockuppay@gmail.com](mailto:lockuppay@gmail.com)
- Desk hours: Monday–Saturday, 9:30 AM – 7:30 PM IST

External destinations, opened in a new tab:

- Client download: [Google Play listing](https://play.google.com/store/apps/details?id=com.rmm.emisafepro&hl=en)
- Dealer portal: [login.emisafepro.com](http://login.emisafepro.com/login/user)

The legal pages also name the company site [www.lockuppay.co.in](https://www.lockuppay.co.in) and the compliance mailbox `support@lockuppay.co.in`. The footer mailbox remains `lockuppay@gmail.com`.

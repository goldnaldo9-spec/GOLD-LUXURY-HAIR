# GOLD LUXURY HAIR — Implementation & Design Plan

## Scope
Build a premium human-hair e-commerce storefront with an editorial home page, collection browsing, product detail presentation, cart interactions, booking/custom-wig intake, customer account entry points, and a private-admin-ready backend foundation. The initial deliverable prioritizes a complete, polished public shopping experience while preserving the database/auth/payment seams required for production completion.

## Architecture
- **Frontend:** React + TypeScript + Wouter + Tailwind CSS, with reusable UI primitives and local state for cart, filters, modals, and booking forms.
- **Backend:** Express + tRPC with the existing Manus OAuth/session foundation, Drizzle/MySQL schema extensions for products, bookings, custom requests, orders, reviews, and customer assets.
- **Payments:** Stripe Checkout integration path only; no fake success states. The checkout UI will clearly hand off to configured provider checkout when credentials/integration are enabled.
- **Assets:** Bespoke editorial hero/collection visuals via managed image generation and stable `/manus-storage/...` asset paths; customer uploads are designed for server-authorized durable storage.
- **SEO:** Route manifest plus page-level metadata and crawlable public copy; keep private account/admin surfaces out of indexable content.

## Design
### Alternative directions
- **Modern Parisian atelier — 0.06:** high-contrast editorial typography, ivory space, and black tailoring with quiet gold details.
- **Nocturne gloss — 0.04:** dark lacquer surfaces, spotlight photography, and reflective metallic accents.
- **Soft editorial minimalism — 0.08:** warm nude neutrals, sculptural hair imagery, and gallery-like calm.

### Chosen direction: Modern Parisian atelier
- **Design Movement:** Contemporary Parisian luxury editorial with atelier restraint.
- **Core Principles:** (1) photography leads, (2) typography carries authority, (3) every interaction feels considered, (4) quiet detail beats visual noise.
- **Color Philosophy:** Ivory and soft nude keep the brand tactile and warm; ink black creates authority; champagne gold is reserved for moments of value and action.
- **Layout Paradigm:** Asymmetric editorial compositions: image-led hero, split storytelling bands, horizontal collection rails, and offset stat/quote blocks rather than a centered card grid everywhere.
- **Signature Elements:** thin champagne rules, oversized condensed serif headlines, and small uppercase micro-labels with generous tracking.
- **Interaction Philosophy:** hover reveals, soft image zooms, and stateful buttons should feel like browsing a private showroom, never a noisy marketplace.
- **Animation:** slow 500–700ms fades and 1–2% image scale on hover; staggered section reveals; respect reduced-motion preferences.
- **Typography System:** Cormorant Garamond for display headlines, DM Sans for navigation/body/UI, and letter-spaced uppercase labels for atelier notes.
- **Brand Essence:** GOLD LUXURY HAIR is curated human hair and made-to-measure wigs for women who want quiet luxury with unmistakable presence. Personality: discerning, warm, assured.
- **Brand Voice:** precise, intimate, and confident. Example lines: “Hair, considered.” / “Made to move with you.”
- **Wordmark & Logo:** a custom-looking “G” monogram formed from two tapered strands, paired with the GOLD LUXURY HAIR wordmark in small tracked capitals.
- **Signature Brand Color:** Champagne Gold `#C7A36A`.

## Project structure
- `client/src/pages/` — public Home, Shop, Product detail, Booking, Custom, About, Contact, Account, Admin.
- `client/src/components/` — site header/footer, product cards, filter rail, cart drawer, modal/forms, shared UI.
- `client/src/lib/` — product catalog, cart store, formatting, metadata helpers.
- `server/` — tRPC routers, db helpers, Stripe/webhook seams, upload authorization.
- `drizzle/` — application schema and migrations.
- `public/` — route manifest and small SEO/static assets.

## Delivery approach
1. Build the public storefront shell and bespoke visual language.
2. Add catalog, cart, filters, product-detail interactions, booking/custom-wig forms, and responsive navigation.
3. Add database schema and tRPC seams for products, reviews, bookings, custom requests, orders, and admin operations.
4. Configure Stripe only through the managed integration path when ready; keep checkout honest until configured.
5. Run diagnostics, build, and Preview inspection; checkpoint the working version.

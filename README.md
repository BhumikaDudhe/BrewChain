# BrewChain

Support creators with a cup of crypto coffee. BrewChain is a landing page for a Web3 "buy me a coffee" style platform, letting supporters send ETH, Polygon, or other supported tokens directly to creators through MetaMask in a single click.

This repository currently contains the front-end UI only. Wallet connection and smart contract logic are not yet implemented.

## Tech Stack

- **Next.js** (App Router)
- **React**
- **Tailwind CSS**

No UI component libraries, animation libraries, or charting libraries are used — all visuals (icons, illustrations, charts) are custom inline SVG, and all interactivity is handled with plain React state and CSS transitions.

## Project Structure

```
app/
├── page.tsx
└── globals.css

components/
├── Navbar.tsx
├── Hero.tsx
├── Features.tsx
├── Transaction.tsx
├── HowItWorks.tsx
├── Pricing.tsx
├── Dashboard.tsx
├── Testimonials.tsx
└── Footer.tsx

tailwind.config.ts
```

## Sections

| Section | Component | Description |
|---|---|---|
| Navbar | `Navbar.tsx` | Floating pill navigation with logo, links, wallet connect button, and toggle |
| Hero | `Hero.tsx` | Headline, subtext, CTAs, coffee cup illustration, and floating wallet card |
| Features | `Features.tsx` | Three feature cards highlighting payments, security, and creator support |
| Live Transaction | `Transaction.tsx` | Mock dashboard card showing a live transaction preview |
| How It Works | `HowItWorks.tsx` | Four-step process from connecting a wallet to the creator receiving crypto |
| Coffee Packages | `Pricing.tsx` | Three pricing tiers (Small, Medium, Premium Coffee) |
| Dashboard Preview | `Dashboard.tsx` | Analytics card with stats and a custom SVG line chart |
| Testimonials | `Testimonials.tsx` | Creator quotes and profiles |
| Footer | `Footer.tsx` | Social links, supported blockchains, and legal links |

## Color Palette

| Token | Hex |
|---|---|
| `brew-50` | `#F7E7B4` |
| `brew-100` | `#F2D39A` |
| `brew-200` | `#EFC28A` |
| `brew-300` | `#E39B73` |
| `brew-400` | `#D27453` |
| `brew-500` | `#B86149` |
| `brew-600` | `#A14F3D` |
| `brew-700` | `#6F3624` |
| `brew-800` | `#58261A` |
| `brew-900` | `#4B1B13` |

Defined in `tailwind.config.ts` and used throughout via Tailwind utility classes (e.g. `bg-brew-800`, `text-brew-900`).

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Roadmap

- [ ] MetaMask wallet connection
- [ ] Smart contract integration for ETH / Polygon payments
- [ ] Live on-chain transaction data
- [ ] Creator dashboard with real analytics
- [ ] Multi-chain token support

## Notes

- The current build focuses on pixel-accurate UI and layout. All data shown (transactions, stats, testimonials) is placeholder content.
- Fully responsive across mobile, tablet, and desktop breakpoints.
- Hover and interactive states use lightweight CSS transitions only — no animation libraries.

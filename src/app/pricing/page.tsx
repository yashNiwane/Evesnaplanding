import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkle,
  Database,
  CirclePercent,
  LineChart,
  LockKeyhole,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const images = {
  logo: "/images/evesnap-camera-logo.png",
};

const plans = [
  {
    name: "Lite Planner",
    price: "₹999",
    billing: "per month",
    description: "Perfect for tiny house parties, intimate dinners, or weekend celebrations.",
    features: [
      "Up to 2 active events per month",
      "Up to 50 guests per event",
      "10 GB total photo storage",
      "Standard custom QR card templates",
      "30-day gallery retention",
      "Browser event camera (No app downloads)",
    ],
    highlight: false,
    ctaText: "Choose Lite Planner",
    whatsappLink: "https://wa.me/919356965876?text=Hi%20Creoxy!%20I'm%20interested%20in%20subscribing%20to%20the%20Lite%20Planner%20monthly%20plan%20(₹999/mo)%20for%20my%20parties.",
  },
  {
    name: "Professional Host",
    price: "₹2,999",
    billing: "per month",
    description: "Best for wedding organizers, birthday planners, and clubs hosting weekly.",
    features: [
      "Up to 10 active events per month",
      "Unlimited guests & captures",
      "100 GB shared high-speed storage",
      "Custom printable Event QR cards (PDF)",
      "1-Year shared vault gallery access",
      "Original uncompressed photo downloads",
      "Host moderation dashboard",
    ],
    highlight: true,
    ctaText: "Choose Professional",
    whatsappLink: "https://wa.me/919356965876?text=Hi%20Creoxy!%20I'm%20interested%20in%20subscribing%20to%20the%20Professional%20Host%20monthly%20plan%20(₹2,999/mo)%20for%20our%20events.",
  },
  {
    name: "Elite Agency",
    price: "₹9,999",
    billing: "per month",
    description: "For photography studios, luxury agencies, and enterprise events.",
    features: [
      "Unlimited active events",
      "Unlimited guests & captures",
      "500 GB massive storage capacity",
      "Complete white-labeled camera (your brand)",
      "Live Slideshow output for projectors",
      "Priority 24/7 technical support",
      "Lifetime gallery archival & safety backup",
    ],
    highlight: false,
    ctaText: "Choose Elite Agency",
    whatsappLink: "https://wa.me/919356965876?text=Hi%20Creoxy!%20I'm%20interested%20in%20subscribing%20to%20the%20Elite%20Agency%20monthly%20plan%20(₹9,999/mo)%20with%20white-label%20capabilities.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300 backdrop-blur-sm">
      <Sparkle className="size-3 text-violet-400" />
      {children}
    </span>
  );
}

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-violet-500 selection:text-white">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] ambient-glow" />
      <div className="absolute top-[30%] right-[-10%] ambient-glow" />
      <div className="absolute bottom-[20%] left-[5%] ambient-glow" />

      {/* Navigation Header */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full glass-panel px-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight">
            <div className="relative size-8 overflow-hidden rounded-full bg-neutral-900 border border-white/20">
              <Image
                src={images.logo}
                alt="Creoxy camera logo"
                fill
                className="object-cover p-1"
                priority
              />
            </div>
            <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">Creoxy</span>
          </Link>
          <div className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400 md:flex">
            <Link href="/#story" className="transition hover:text-white">The Story</Link>
            <Link href="/#how-it-works" className="transition hover:text-white">How it works</Link>
            <Link href="/#why-us" className="transition hover:text-white">Why Creoxy</Link>
            <Link href="/pricing" className="text-white">Pricing</Link>
          </div>
          <a
            href="https://wa.me/919356965876?text=Hi%20Creoxy!%20I'd%20love%20to%20get%20in%20touch%20about%20your%20shared%20camera%20packages."
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-white px-4 text-xs font-semibold text-black transition hover:bg-neutral-200"
          >
            Get in touch
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <section className="relative z-10 px-4 pt-32 pb-16 md:px-8 md:pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>PLANS & SUBSCRIPTIONS</SectionLabel>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl bg-gradient-to-b from-white via-neutral-100 to-neutral-500 bg-clip-text text-transparent">
            Simple, honest plans for capturing milestones.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            No hidden setup fees. Highly scalable monthly subscriptions tailored to cover your hosting margins beautifully.
          </p>

          {/* Pricing Grid */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-8 text-left transition duration-300 ${
                  plan.highlight
                    ? "bg-neutral-900/60 border border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
                    : "glass-panel bg-neutral-950/40 border-white/5 hover:border-white/10"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-md">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">{plan.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400 min-h-[40px]">
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight text-white">{plan.price}</span>
                    <span className="text-xs text-neutral-500 font-medium">/ {plan.billing}</span>
                  </div>
                </div>

                <ul className="mt-8 space-y-4 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 mt-0.5">
                        <Check className="size-2.5" />
                      </div>
                      <span className="text-xs leading-normal text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.whatsappLink}
                  className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-full text-xs font-bold transition duration-200 ${
                    plan.highlight
                      ? "bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supabase Margin Transparency / Value Statement */}
      <section className="relative z-10 px-4 py-16 md:px-8 bg-neutral-950/40">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/5 bg-neutral-950/60 p-8 md:p-12 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-violet-400">HOSTING & INFRASTRUCTURE</span>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Backed by enterprise-grade infrastructure.</h2>
              <p className="text-xs leading-relaxed text-neutral-400">
                To guarantee original-resolution photo speeds and absolute data safety, every Creoxy subscription is deployed using **Supabase** (Postgres DB) and globally replicated Smart CDNs. We pay for premium compute resources so your memories are never delayed.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-black/40 p-4">
                <Database className="size-5 text-violet-400" />
                <h4 className="mt-3 text-sm font-semibold text-white">Postgres DB</h4>
                <p className="mt-1 text-[10px] text-neutral-500">Secure, isolated metadata clusters.</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-black/40 p-4">
                <LockKeyhole className="size-5 text-emerald-400" />
                <h4 className="mt-3 text-sm font-semibold text-white">Private Vaults</h4>
                <p className="mt-1 text-[10px] text-neutral-500">Row-level security encryption.</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-black/40 p-4">
                <CirclePercent className="size-5 text-blue-400" />
                <h4 className="mt-3 text-sm font-semibold text-white">High Margins</h4>
                <p className="mt-1 text-[10px] text-neutral-500">Low-cost backend, high yield.</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-black/40 p-4">
                <LineChart className="size-5 text-rose-400" />
                <h4 className="mt-3 text-sm font-semibold text-white">Uncapped scale</h4>
                <p className="mt-1 text-[10px] text-neutral-500">Auto-scalable storage streams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ Accordions */}
      <section className="relative z-10 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              Pricing Questions
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {[
              {
                q: "Are there any hidden database charges?",
                a: "No. Your monthly subscription covers the entire database hosting fee, Supabase compute hours, CDNs, and backups. There are absolutely no hidden charges.",
              },
              {
                q: "What happens if our event exceeds the storage limit?",
                a: "We won't block your camera or interrupt your party! If you go slightly over, we will reach out to help you upgrade to the next tier or clean up older archived events. Your photos are always safe.",
              },
              {
                q: "Can I cancel or change my plan anytime?",
                a: "Yes. Our plans are strictly monthly subscriptions. You can cancel, downgrade, or upgrade your tier before the next billing cycle by simply getting in touch.",
              },
              {
                q: "Do you offer white-label options for studios?",
                a: "Yes! Our Elite Agency plan is specifically designed for premium photography studios and agencies who want to remove Creoxy branding and present their own logo on the guest browser camera.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-white/10 bg-neutral-950/40 backdrop-blur-sm p-5 transition duration-300 open:border-violet-500/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm sm:text-base font-bold text-white">
                  {item.q}
                  <Sparkle
                    className="size-3 text-neutral-500 transition duration-300 group-open:rotate-45 group-open:text-violet-400"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-400">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black py-8 text-center text-xs text-neutral-500">
        <div className="mx-auto max-w-5xl flex flex-col justify-between items-center gap-4 px-4 sm:flex-row">
          <span>Creoxy — Capture together. Remember forever.</span>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/refund" className="hover:text-white transition">Refund Policy</Link>
            <Link href="/shipping" className="hover:text-white transition">Shipping</Link>
            <Link href="/" className="hover:text-white transition">Home</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}

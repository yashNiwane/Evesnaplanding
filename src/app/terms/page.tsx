import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkle } from "lucide-react";

const images = {
  logo: "/images/evesnap-camera-logo.png",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-violet-500 selection:text-white">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] ambient-glow" />
      <div className="absolute bottom-[20%] right-[-10%] ambient-glow" />

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
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/pricing" className="transition hover:text-white">Pricing</Link>
            <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
            <Link href="/terms" className="text-white">Terms</Link>
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
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300 backdrop-blur-sm">
            <Sparkle className="size-3 text-violet-400" />
            LEGAL AGREEMENT
          </span>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-b from-white via-neutral-100 to-neutral-500 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-xs text-neutral-500">Last updated: May 25, 2026</p>

          <div className="mt-12 space-y-8 text-sm leading-relaxed text-neutral-400">
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">1. Agreement to Terms</h2>
              <p className="mt-3">
                Welcome to Creoxy (referenced as "we", "us", or "our"). By accessing or using our website, browser event cameras, and hosting databases (collectively, the "Services"), you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">2. Subscription & Account Services</h2>
              <p className="mt-3">
                To create event cameras, you must purchase a monthly subscription package (Lite Planner, Professional Host, or Elite Agency). All subscriptions are auto-renewed monthly unless explicitly cancelled before the next billing cycle.
              </p>
              <p className="mt-2">
                As a host, you are solely responsible for managing invite links, QR codes, and guest actions within your private gallery vault.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">3. User-Generated Content & Photo Uploads</h2>
              <p className="mt-3">
                Creoxy does not claim ownership over any photographs, media assets, or files uploaded by your guests using our browser camera interface. The host retains full intellectual property rights over their private event gallery.
              </p>
              <p className="mt-2">
                By allowing guest uploads, you represent and warrant that your guests will not capture or upload illegal, abusive, copyrighted, or inappropriate content. We reserve the absolute right to suspend hosting accounts that violate safety parameters.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">4. Infrastructure & Service Availability</h2>
              <p className="mt-3">
                Our storage and Postgres database servers are hosted securely using **Supabase** (Postgres DB) infrastructure. While we target 99.9% uptime, we are not liable for transient network disruptions, cloud infrastructure failures, or data egress bottlenecks outside our reasonable control.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">5. Plan Scaling & Limitations</h2>
              <p className="mt-3">
                Each subscription plan carries specific event, guest count, and storage limits. Storage above your designated quota may trigger automatic warnings or prompt plan upgrades.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">6. Changes to Terms</h2>
              <p className="mt-3">
                We reserve the right to modify these terms at any time. Your continued use of Creoxy following the posting of changes constitutes acceptance of those modifications.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">7. Contact Information</h2>
              <p className="mt-3">
                For questions regarding these terms, monthly plans, or subscription agreements, please contact us directly via email at **niwaneyash@gmail.com** or on WhatsApp at **+91 9356965876**.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black py-8 text-center text-xs text-neutral-500">
        <div className="mx-auto max-w-5xl flex flex-col justify-between items-center gap-4 px-4 sm:flex-row">
          <span>Creoxy — Capture together. Remember forever.</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/refund" className="hover:text-white transition">Refunds</Link>
            <Link href="/shipping" className="hover:text-white transition">Shipping</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

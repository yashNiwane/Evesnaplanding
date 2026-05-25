import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkle } from "lucide-react";

const images = {
  logo: "/images/evesnap-camera-logo.png",
};

export default function PrivacyPage() {
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
            <Link href="/privacy" className="text-white">Privacy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms</Link>
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
            DATA MANAGEMENT
          </span>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-b from-white via-neutral-100 to-neutral-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-neutral-500">Last updated: May 25, 2026</p>

          <div className="mt-12 space-y-8 text-sm leading-relaxed text-neutral-400">
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">1. Information We Collect</h2>
              <p className="mt-3">
                Creoxy collects information to deliver a seamless event photography hosting service. This includes:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1.5 pl-2">
                <li>**Host Accounts**: Contact name, email address, phone number, and billing parameters.</li>
                <li>**Guest Contributions**: Photos captured and uploaded using our browser camera interface. We do NOT require guests to register accounts, supply emails, or provide profiles to snap photos.</li>
                <li>**Technical Metadata**: IP addresses, browser agent models, and upload event logs for load-balancing and safety moderation.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">2. Secure Storage & Infrastructure</h2>
              <p className="mt-3">
                All event parameters, secure media tags, and files are hosted securely using **Supabase** (Postgres DB) infrastructure. We employ Postgres Row-Level Security (RLS) policies to guarantee that event galleries can ONLY be viewed by guests who hold your physical QR code key or direct secure links.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">3. Data Retention & Archival</h2>
              <p className="mt-3">
                Event galleries are retained according to your monthly subscription package (e.g. 30 days for Lite, 1 year for Pro, lifetime for Elite). Hosts have full permission to manually download all high-resolution photos and permanently delete galleries at any time via their dashboard.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">4. Browser Camera Permissions</h2>
              <p className="mt-3">
                Our web camera works entirely inside the guest's mobile browser. It requests temporary camera permissions only when the guest scans the QR code and opens the camera view. We do not track location parameters or run background tasks once the browser tab is closed.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">5. Cookies</h2>
              <p className="mt-3">
                We use secure, temporary session cookies solely to authenticate hosts on the dashboard and keep guest browser cameras connected to active event channels. We do not run third-party tracking scripts or Sell your data to advertisers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">6. Support & Deletion Requests</h2>
              <p className="mt-3">
                If you have questions about your data safety or wish to request permanent manual deletion of your billing account and hosted projects, please contact us on WhatsApp directly.
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
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/refund" className="hover:text-white transition">Refunds</Link>
            <Link href="/shipping" className="hover:text-white transition">Shipping</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

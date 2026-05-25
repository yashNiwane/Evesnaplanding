import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkle, Send } from "lucide-react";

const images = {
  logo: "/images/evesnap-camera-logo.png",
};

export default function ShippingPage() {
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
            <Link href="/shipping" className="text-white">Shipping</Link>
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
            <Send className="size-3 text-violet-400" />
            DIGITAL DELIVERY
          </span>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-b from-white via-neutral-100 to-neutral-500 bg-clip-text text-transparent">
            Shipping & Delivery Policy
          </h1>
          <p className="mt-2 text-xs text-neutral-500">Last updated: May 25, 2026</p>

          <div className="mt-12 space-y-8 text-sm leading-relaxed text-neutral-400">
            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6">
              <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkle className="size-4 text-violet-400" />
                Instant Electronic Provisioning
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-neutral-300">
                Creoxy is a fully digital Software-as-a-Service (SaaS) web browser application. **Consequently, there is no physical shipping or tangible delivery involved. All services are delivered instantly in virtual electronic format.**
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">1. Delivery Mechanism</h2>
              <p className="mt-3">
                Upon confirmation of your monthly subscription payment (processed securely via our merchant gateway):
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1.5 pl-2">
                <li>Your E-Camera dashboard is **instantly unlocked** and activated on your account profile.</li>
                <li>Your custom event camera link and printable high-resolution QR codes are generated dynamically in real-time.</li>
                <li>A receipt and setup email containing active login instructions is transmitted automatically to your registered email address.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">2. Timeline for Delivery</h2>
              <p className="mt-3">
                Delivery is **immediate** (typically within 1 to 5 seconds following successful transaction approval). If you experience any delay in dashboard activation, please check your spam folder or verify your payment status.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">3. Support & Delivery Failures</h2>
              <p className="mt-3">
                If your payment was deducted but your dashboard failed to activate due to transient connection bottlenecks, please get in touch with our Support team on WhatsApp immediately with your payment receipt reference. We will manually verify your payment and activate your event servers within 30 minutes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">4. Contact Information</h2>
              <p className="mt-3">
                For delivery verification, login troubleshooting, or billing queries, please contact us directly on WhatsApp at **+91 9356965876**.
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
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/refund" className="hover:text-white transition">Refunds</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

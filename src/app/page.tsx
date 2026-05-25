import type {
  FAQPage,
  ImageObject,
  SoftwareApplication,
  WithContext,
  WebSite,
} from "schema-dts";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  ImagePlus,
  Lock,
  QrCode,
  ScanLine,
  Settings2,
  Sparkles,
  Users,
  Sparkle,
  Heart,
  Shield,
  Eye,
} from "lucide-react";
import { absoluteUrl, siteConfig } from "@/lib/site";

const images = {
  logo: "/images/evesnap-camera-logo.png",
  hero: "/images/evesnap-private-event-photo-sharing-app.png",
  birthday: "/images/evesnap-birthday-party-camera-app.png",
  party: "/images/evesnap-house-party-guest-camera.png",
  wedding: "/images/evesnap-wedding-event-gallery.png",
  family: "/images/evesnap-family-party-disposable-camera.png",
  launch: "/images/evesnap-brand-launch-event-camera.png",
  cultural: "/images/evesnap-cultural-event-photo-sharing.jpeg",
};

const benefits = [
  {
    title: "The Spectacle",
    text: "Instant web-browser camera access. Scan a beautiful QR code, point, and shoot. Zero app downloads.",
    icon: ScanLine,
  },
  {
    title: "The Heart",
    text: "Collect the quiet reactions, wild dance battles, and emotional hugs captured by those who love you.",
    icon: Heart,
  },
  {
    title: "The Trust",
    text: "Private, host-controlled Postgres vaults. No public feeds, no selling data. Your memories stay yours.",
    icon: Shield,
  },
];

const useCases = [
  { label: "Weddings", subtitle: "Save the quiet, emotional glances", image: images.wedding },
  { label: "Birthdays", subtitle: "Catch the laughter before the cake", image: images.birthday },
  { label: "House Parties", subtitle: "Collect the wild dance-offs", image: images.party },
  { label: "Family Gatherings", subtitle: "Preserve intergenerational warmth", image: images.family },
  { label: "Brand Launches", subtitle: "Streamline guest content creation", image: images.launch },
  { label: "Cultural Festivals", subtitle: "Document the vibrant colors", image: images.cultural },
];

const steps = [
  {
    title: "Set up the camera",
    text: "Choose an elegant cover, define photo counts, and customize when your event album develops.",
    icon: Settings2,
    image: images.launch,
    alt: "Creoxy event camera setup interface",
  },
  {
    title: "Share your QR canvas",
    text: "Place stylized QR cards on dining tables, bar counters, or display screens for guests to discover.",
    icon: QrCode,
    image: images.hero,
    alt: "Creoxy QR code placed beautifully on tables",
  },
  {
    title: "Let the magic unfold",
    text: "Guests capture candid snaps through their phone browser directly into one private shared vault.",
    icon: Camera,
    image: images.party,
    alt: "Guests taking candid photos using Creoxy digital camera",
  },
];

const comparisonData = [
  {
    feature: "Instant Spectacle (No Apps)",
    whatsapp: "No (Requires setup & group chats)",
    gdrive: "No (Needs login / folder setups)",
    creoxy: "Yes (Scan to snap instantly)",
    highlight: true,
  },
  {
    feature: "Zero Image Compression",
    whatsapp: "No (Heavily compresses media)",
    gdrive: "Yes",
    creoxy: "Yes (Original uncompressed quality)",
    highlight: false,
  },
  {
    feature: "Zero Friction Upload",
    whatsapp: "Manual select & send in group",
    gdrive: "High friction (Manual folders select)",
    creoxy: "Zero friction (Direct camera syncing)",
    highlight: true,
  },
  {
    feature: "Absolute Privacy & Security",
    whatsapp: "Vulnerable to external phone lists",
    gdrive: "Open access links",
    creoxy: "Secure host-controlled database vaults",
    highlight: false,
  },
  {
    feature: "Active Event Focus",
    whatsapp: "Messy, cluttered personal chat",
    gdrive: "Static storage bucket",
    creoxy: "Beautiful live digital scrapbook",
    highlight: true,
  },
];

const faq = [
  {
    question: "What is Creoxy?",
    answer:
      "Creoxy is not a utility—it is a digital sandbox for your memories. It turns your guests into a cohesive storytelling team, capturing raw, unposed photos directly into one shared gallery instantly using a simple QR code.",
  },
  {
    question: "How do guests join the spectacle?",
    answer:
      "With zero friction. Guests scan your event's physical QR code with their phone camera, and their browser opens into a beautiful digital camera interface. No apps, no accounts, and no setup required.",
  },
  {
    question: "How do you protect guest privacy?",
    answer:
      "Trust is our bedrock. Creoxy is built with secure Row-Level database encryption. Only guests holding your physical QR code or secure link can contribute. We never sell your photographs or analyze your personal metadata.",
  },
  {
    question: "Can I use it for weddings and small celebrations?",
    answer:
      "Yes. Creoxy is designed specifically for emotional milestones where the real magic happens in the corners of the room—unplanned laughs, family tears, and spontaneous dance battles.",
  },
  {
    question: "How does this compare to WhatsApp groups?",
    answer:
      "WhatsApp compromises resolution and scatters photos across generic, noisy chats. Creoxy keeps your photos organized in their original, high-resolution quality inside a private gallery that belongs strictly to you.",
  },
];

const softwareJsonLd: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "PhotographyApplication",
  operatingSystem: "Web, iOS, Android",
  description: siteConfig.description,
  url: absoluteUrl("/"),
  image: absoluteUrl(images.hero),
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const websiteJsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: absoluteUrl("/"),
  description: siteConfig.description,
};

const faqJsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const imageJsonLd: WithContext<ImageObject> = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: absoluteUrl(images.hero),
  name: "Creoxy private event photo sharing app interface",
  description:
    "A preview of the Creoxy shared event camera and private gallery experience.",
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300 backdrop-blur-sm">
      <Sparkle className="size-3 text-violet-400" />
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-violet-500 selection:text-white">
      <JsonLd data={softwareJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={imageJsonLd} />

      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] ambient-glow" />
      <div className="absolute top-[35%] right-[-15%] ambient-glow" />
      <div className="absolute bottom-[20%] left-[5%] ambient-glow" />

      {/* Floating Glassmorphic Navigation */}
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
            <a href="#story" className="transition hover:text-white">The Story</a>
            <a href="#how-it-works" className="transition hover:text-white">How it works</a>
            <a href="#why-us" className="transition hover:text-white">Why Creoxy</a>
            <Link href="/pricing" className="transition hover:text-white">Pricing</Link>
          </div>
          <a
            href={siteConfig.links.contact}
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-white px-4 text-xs font-semibold text-black transition hover:bg-neutral-200"
          >
            Get in touch
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-4 pt-32 pb-16 md:px-8 md:pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>THE SPECTACLE</SectionLabel>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-b from-white via-neutral-100 to-neutral-500 bg-clip-text text-transparent">
            Your guests see the moments you miss.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base md:text-lg">
            A digital disposable camera on every table. A single night becomes timeless when remembered together. Guests scan, snap, and preserve the genuine warmth of your celebration.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
            <a
              href={siteConfig.links.contact}
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-black transition hover:bg-neutral-200 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Get in touch
            </a>
            <a
              href="#story"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-bold backdrop-blur-sm transition hover:bg-white/10 hover:border-white/20"
            >
              See the magic
            </a>
          </div>

          {/* Interactive Hero Showcase Mockup */}
          <div className="relative mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-neutral-950/40 p-2 backdrop-blur-sm shadow-[0_0_50px_rgba(139,92,246,0.1)]">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-500/20 to-blue-500/20 opacity-30 blur-lg" />
            <div className="relative overflow-hidden rounded-xl border border-white/5 bg-black">
              <Image
                src={images.hero}
                alt="Creoxy app event photo sharing experience"
                width={1600}
                height={900}
                priority
                className="w-full h-auto object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Manifesto / Philosophy Section */}
      <section className="relative z-10 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/5 bg-neutral-950/60 p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
          {/* Subtle violet overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08)_0%,rgba(0,0,0,0)_60%)]" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <SectionLabel>THE CREED</SectionLabel>
            <p className="mt-8 text-lg sm:text-2xl md:text-3xl font-extrabold leading-snug tracking-tight text-white/95 max-w-3xl italic">
              &ldquo;Your story is the product before your product is the product. Spectacle is what gets people through the door. Trust is what makes them stay. You need both.&rdquo;
            </p>
            <div className="mt-8 border-t border-white/10 pt-4 w-1/4" />
            <p className="mt-2 text-xs uppercase tracking-wider text-neutral-500 font-bold">
              The Creoxy Philosophy
            </p>
            <p className="mt-3 max-w-lg text-[11px] sm:text-xs text-neutral-400/80 leading-relaxed">
              People don’t subscribe because a utility exists. They subscribe because a story makes them feel something first. We built this platform strictly on this foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Summary Row */}
      <section className="relative z-10 px-4 py-8 md:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="glass-panel glass-panel-hover rounded-2xl p-6 text-left"
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <benefit.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-white">{benefit.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Storytelling Section (The Narrative Arc) */}
      <section id="story" className="relative z-10 px-4 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionLabel>THE NARRATIVE</SectionLabel>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              The Story of a Perfect Night
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-xs sm:text-sm text-neutral-400">
              Why we capture memories—and why the traditional ways let them slip away.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {/* Act 1: The Build-Up */}
            <div className="grid gap-8 rounded-3xl border border-white/5 bg-neutral-950/20 p-6 md:grid-cols-2 md:items-center md:p-10">
              <div className="space-y-4">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400">ACT I — THE FLEETING MAGIC</div>
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Months of planning. A few fast hours.</h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  You spend months designing the perfect celebration: the lights, the playlist, the exact placement of tables. The night arrives, and in a beautiful blur of hugs and toasts, the hours slip away.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                <Image
                  src={images.wedding}
                  alt="Beautiful fleeting wedding night memories"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>

            {/* Act 2: The Silent Moments */}
            <div className="grid gap-8 rounded-3xl border border-white/5 bg-neutral-950/20 p-6 md:grid-cols-2 md:items-center md:p-10">
              <div className="order-last md:order-first relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                <Image
                  src={images.family}
                  alt="Candid laughs at family party captured secretly"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="space-y-4">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">ACT II — THE UNSEEN EMOTIONS</div>
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">The perspectives you never saw.</h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  Because you were busy hosting, thanking guests, and living in the moment, you missed the small, raw details: your grandmother&apos;s quiet smile at the back table, your college friends sharing an inside joke, the tear during the toast.
                </p>
              </div>
            </div>

            {/* Act 3: The Scattered Pieces */}
            <div className="grid gap-8 rounded-3xl border border-white/5 bg-neutral-950/20 p-6 md:grid-cols-2 md:items-center md:p-10">
              <div className="space-y-4">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-red-400">ACT III — THE FRAGMENTED MORNING</div>
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Begging for memories.</h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  The next morning, you want to hold onto the magic. But the memories are scattered. They are compressed into blurry WhatsApp threads, forgotten inside your friends&apos; camera rolls, or locked in expired, complicated Google Drive folders.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                <Image
                  src={images.birthday}
                  alt="Scattered birthday memories captured on different phones"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>

            {/* Act 4: The Shared Magic */}
            <div className="grid gap-8 rounded-3xl border border-white/5 bg-neutral-950/20 p-6 md:grid-cols-2 md:items-center md:p-10">
              <div className="order-last md:order-first relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                <Image
                  src={images.party}
                  alt="Seamless private photo sharing gallery at house party"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="space-y-4">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">ACT IV — THE RESOLUTION</div>
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Creoxy. A vault of pure connection.</h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  We place a beautifully custom digital disposable camera in the hands of everyone who loves you. One elegant QR code. No apps, no accounts. Guests snap, and every angle develops instantly in original resolution inside one shared, private vault.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Minimalist Steps) */}
      <section id="how-it-works" className="relative z-10 px-4 py-20 md:px-8 bg-neutral-950/40">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionLabel>THE WORKFLOW</SectionLabel>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              How a party becomes a gallery.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-xs sm:text-sm text-neutral-400">
              No manual uploads. No endless chasing. Just three effortless steps.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/5 text-white border border-white/10">
                      <step.icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                      STEP 0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400">{step.text}</p>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden border-t border-white/10">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover opacity-70 transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are The Best (The Comparative Proof) */}
      <section id="why-us" className="relative z-10 px-4 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionLabel>THE COMPARISON</SectionLabel>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              Why Creoxy beats everything else.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-xs sm:text-sm text-neutral-400">
              A quick comparison of how we handle your life&apos;s most precious events.
            </p>
          </div>

          <div className="mt-16 overflow-x-auto rounded-2xl border border-white/10 bg-neutral-950/40 backdrop-blur-sm">
            <table className="w-full min-w-[600px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  <th className="px-6 py-4">Capability</th>
                  <th className="px-6 py-4">WhatsApp Groups</th>
                  <th className="px-6 py-4">Google Drive</th>
                  <th className="px-6 py-4 text-violet-400">Creoxy Camera</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition hover:bg-white/2.5 ${
                      row.highlight ? "bg-violet-500/2.5" : ""
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-white">{row.feature}</td>
                    <td className="px-6 py-4 text-neutral-400">{row.whatsapp}</td>
                    <td className="px-6 py-4 text-neutral-400">{row.gdrive}</td>
                    <td className="px-6 py-4 font-semibold text-violet-300">{row.creoxy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="relative z-10 px-4 py-20 md:px-8 bg-neutral-950/40">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionLabel>MILESTONES</SectionLabel>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              Made for your life&apos;s biggest chapters.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-xs sm:text-sm text-neutral-400">
              No matter what you are celebrating, Creoxy brings everyone together.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <div
                key={useCase.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={`Creoxy ${useCase.label} event preview`}
                    fill
                    className="object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="relative p-5">
                  <h3 className="text-lg font-bold tracking-tight text-white">{useCase.label}</h3>
                  <p className="mt-1 text-xs text-neutral-400">{useCase.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sleek Features Highlight Section */}
      <section className="relative z-10 px-4 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>FEATURES</SectionLabel>
              <h2 className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                One private, organized gallery for everyone.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                Forget WhatsApp compression, complex logins, and expired download links. With Creoxy, you receive high-resolution, host-moderated folders that capture the joy of the party as it unfolds.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Private, host-controlled photo storage vaults",
                  "Zero app downloads or guest accounts required",
                  "Full-resolution, uncompressed image downloads",
                  "Printable custom QR code cards with event styling",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex size-5 items-center justify-center rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      <Check className="size-3" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-neutral-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative min-h-[300px] rounded-2xl border border-white/10 bg-neutral-950 overflow-hidden">
                <Image
                  src={images.birthday}
                  alt="Birthday camera candid shot"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
              <div className="relative min-h-[300px] rounded-2xl border border-white/10 bg-neutral-950 overflow-hidden">
                <Image
                  src={images.wedding}
                  alt="Wedding camera candid shot"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="relative z-10 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <SectionLabel>SUPPORT</SectionLabel>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              Frequently asked questions.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-xs sm:text-sm text-neutral-400">
              Everything you need to know about the Creoxy event camera experience.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-neutral-950/40 backdrop-blur-sm p-5 transition duration-300 open:border-violet-500/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm sm:text-base font-bold text-white">
                  {item.question}
                  <ImagePlus
                    className="size-4 text-neutral-500 transition duration-300 group-open:rotate-45 group-open:text-violet-400"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-400">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="relative z-10 px-4 pb-12 md:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/80 px-6 py-20 text-center relative shadow-[0_0_50px_rgba(139,92,246,0.1)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,rgba(0,0,0,0)_70%)]" />
          <div className="relative z-10">
            <Sparkles className="mx-auto size-8 text-violet-400 pulse-glow" aria-hidden="true" />
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              A single night becomes timeless when remembered together.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-neutral-400">
              Create a shared digital camera event for your party today. Collect original-quality snaps instantly.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.links.contact}
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-black transition hover:bg-neutral-200 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Real Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-black py-8 text-center text-xs text-neutral-500">
        <div className="mx-auto max-w-5xl flex flex-col justify-between items-center gap-4 px-4 sm:flex-row">
          <span>Creoxy — Capture together. Remember forever.</span>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/refund" className="hover:text-white transition">Refund Policy</Link>
            <Link href="/shipping" className="hover:text-white transition">Shipping</Link>
            <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

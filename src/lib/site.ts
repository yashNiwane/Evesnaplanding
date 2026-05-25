export const siteConfig = {
  name: "Creoxy",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://creoxy.app",
  tagline: "Capture together. Remember forever.",
  description:
    "Create a shared event camera for your party. Guests scan a QR code, capture photos, and add memories to one private event gallery. No app download needed.",
  keywords: [
    "Creoxy",
    "private event photo sharing app",
    "party camera app",
    "QR event photo sharing",
    "guest photo upload",
    "shared event camera",
    "private party album",
    "digital disposable camera",
    "birthday photo sharing app",
    "wedding photo sharing app",
  ],
  links: {
    ios: "https://apps.apple.com/",
    android: "https://play.google.com/store",
    contact: "https://wa.me/919356965876?text=Hi%20Creoxy!%20I'd%20love%20to%20set%20up%20a%20private%20shared%20camera%20for%20my%20upcoming%20event.%20Can%20you%20help%20me%20get%20started%3F",
  },
};



export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();

import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = "Evesnap disposable camera app";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fbfaf7",
          color: "#151515",
          padding: 72,
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "3px solid #151515",
            borderRadius: 36,
            padding: 56,
            background: "#fffdf7",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: 42, fontWeight: 800 }}>{siteConfig.name}</div>
            <div style={{ fontSize: 28 }}>27 exposures</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 82, fontWeight: 900, lineHeight: 0.98 }}>
              Disposable camera albums for real moments.
            </div>
            <div style={{ fontSize: 32, color: "#4b4b4b" }}>
              Shoot now. Reveal together later.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

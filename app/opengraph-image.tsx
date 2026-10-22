import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(circle at 80% 20%, #1c2748 0%, #060a17 60%)",
          color: "#f3eee3",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 8,
            color: "#d9bf8a",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 1.05, fontFamily: "serif" }}>
            Bridging Strategy
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.05,
              fontFamily: "serif",
              fontStyle: "italic",
              color: "#d9bf8a",
            }}
          >
            & Data
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a8afc0" }}>
          {siteConfig.name} · Marketing & Business Strategist
        </div>
      </div>
    ),
    size,
  );
}

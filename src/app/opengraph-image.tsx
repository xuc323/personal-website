import { ImageResponse } from "next/og";

export const alt = "Xu Chen — software engineer";
export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        fontFamily: "monospace",
        background: "linear-gradient(135deg, #f5f5f4 0%, #bae6fd 100%)",
      }}
    >
      <div style={{ display: "flex", fontSize: 72, color: "#1c1917" }}>Hello!</div>
      <div style={{ display: "flex", fontSize: 88, fontWeight: 700, color: "#1c1917" }}>I&apos;m Xu Chen,</div>
      <div style={{ display: "flex", fontSize: 40, color: "#44403c", marginTop: 24 }}>a software engineer 🖥️</div>
      <div style={{ display: "flex", fontSize: 40, color: "#44403c", marginTop: 8 }}>embracing the boundless possibilities of new technologies 📋</div>
    </div>,
    { ...size }
  );
}

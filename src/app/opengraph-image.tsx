import { ImageResponse } from "next/og";

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
          justifyContent: "center",
          padding: "90px",
          background: "#f5f2ea",
          color: "#17160f",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#625d4d" }}>
          LINKÖPING, SWEDEN — COMPUTER SCIENCE &amp; ENGINEERING
        </div>
        <div style={{ display: "flex", fontFamily: "serif", fontSize: 108, marginTop: 30 }}>
          Emil Lögdberg
        </div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 20, maxWidth: 900, color: "#3a382c" }}>
          Building at the intersection of software, AI, and business.
        </div>
      </div>
    ),
    { ...size }
  );
}

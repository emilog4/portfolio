import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17160f",
          color: "#f5f2ea",
          fontSize: 34,
          fontFamily: "serif",
          borderRadius: 14,
        }}
      >
        EL
      </div>
    ),
    { ...size }
  );
}

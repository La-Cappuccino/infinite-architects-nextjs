"use client";

import PageLayout from "@/components/PageLayout";

export default function MediaRoomPage() {
  return (
    <PageLayout>
      <div
        style={{
          backgroundColor: "#000000",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 200,
              color: "#FFFFFF",
              marginBottom: "20px",
            }}
          >
            Media Room
          </h1>
          <p
            style={{
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              fontSize: "19px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.7)",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Coming soon. News, press, and updates from LivingEdge.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

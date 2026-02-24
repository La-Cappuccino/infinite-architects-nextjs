"use client";

import Image from "next/image";
import Link from "next/link";

export default function MediaRoomPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        paddingTop: "100px",
        paddingBottom: "80px",
      }}
    >
      <div style={{ maxWidth: "90%", margin: "0 auto" }}>
        {/* Award 1 - Hotel & Property Awards 2022 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "250px 1fr",
            gap: "40px",
            marginBottom: "60px",
            alignItems: "start",
          }}
        >
          {/* Award Image */}
          <div
            style={{
              position: "relative",
              width: "250px",
              height: "300px",
            }}
          >
            <Image
              src="/images/awards/hotel-property-award-2022.png"
              alt="The International Hotel & Property Awards 2022 Winner"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Content */}
          <div>
            <h2
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "28px",
                fontWeight: 300,
                color: "#80AE50",
                marginBottom: "25px",
                lineHeight: 1.3,
              }}
            >
              LUXURY RESIDENCE £10 MILLION PLUS 2022 WINNER
            </h2>

            <div
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                marginBottom: "25px",
              }}
            >
              <p style={{ margin: "0 0 5px 0" }}>
                Project Name: Villa Shivnani
              </p>
              <p style={{ margin: "0 0 5px 0" }}>Location: Dubai Hills UAE</p>
              <p style={{ margin: "0 0 5px 0" }}>Date completed: June 2021</p>
              <p style={{ margin: "0 0 5px 0" }}>
                Interior Designer/ Designer: Helen Kristina Skea
              </p>
              <p style={{ margin: "0 0 5px 0" }}>
                Construction Company: BW Interiors (Interior Fit-Out) Dubai, UAE
              </p>
              <p style={{ margin: "0 0 5px 0" }}>
                MEP: Wallace Whittle Ltd & John Cullen Lighting Design
              </p>
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "30px" }}>
              <Link
                href="#"
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "13px",
                  color: "#80AE50",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "16px" }}>›</span> VIEW LINK
              </Link>
              <Link
                href="#"
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "13px",
                  color: "#80AE50",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "16px" }}>›</span> VIEW MAGAZINE
              </Link>
            </div>
          </div>
        </div>

        {/* Award 2 - Sleep Hotel Design Competition 2013 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "250px 1fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Award Image */}
          <div
            style={{
              position: "relative",
              width: "250px",
              height: "300px",
            }}
          >
            <Image
              src="/images/awards/sleep-competition.jpg"
              alt="2013 Sleep Hotel Design Competition Winner"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Content */}
          <div>
            <h2
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "28px",
                fontWeight: 300,
                color: "#FFFFFF",
                marginBottom: "25px",
                lineHeight: 1.3,
              }}
            >
              2013 SLEEP HOTEL DESIGN COMPETITION WINNER
            </h2>

            <div
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              <p style={{ margin: "0 0 5px 0" }}>
                Project Name: Sleep Hotel Guestroom Competition 2013 (Winner)
              </p>
              <p style={{ margin: "0 0 5px 0" }}>Location: London, UK</p>
              <p style={{ margin: "0 0 15px 0" }}>
                Client: Sleeper Hotel Magazine
              </p>
            </div>

            <p
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "14px",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#80AE50",
                marginBottom: "15px",
              }}
            >
              room revolution – all that rage...
            </p>

            <div
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "13px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
              }}
            >
              <p style={{ marginBottom: "15px" }}>
                The brief was to capture the spirit of 1960's 'swinging London'.
                Taking inspiration from the radical art, fashion, film and music
                scenes that flourished during this period, generating new ideas
                and creating a youth phenomenon that strongly emphasized the new
                and the modern, a time of optimism and hedonism, a rebellion
                against the artistic and social norms, creating an explosive
                cultural revolution.
              </p>

              <p style={{ marginBottom: "15px" }}>
                Infinite's design concept reconsidered the typical hotel
                guestroom configuration to deliver a revolutionary guest
                experience through a contemporary interpretation of the sixties
                counterculture that questioned the political, social and moral
                values of the time.
              </p>

              <p style={{ marginBottom: "15px" }}>
                The available area is split on the diagonal forming two primary
                asymmetric volumes which are then further divided via a series
                of overlapping vertical and horizontal planes shaped to
                facilitate their function. The detailing of these planes is
                intentionally simple to ensure the space remains uncluttered, a
                quality that is further supported by the selection of finishes.
                The result is a series of clean formed visually linked
                inter-leading areas, each with its own easily recognizable
                identity and function.
              </p>

              <p style={{ marginBottom: "15px" }}>
                Although the layout is designed to feel unrestricted, selected
                areas are highlighted through use of vibrant colour reminiscent
                of the media and symbolism of the sixties. These include a large
                kaleidoscopic mural, the psychedelic artwork derived from the
                experience of altered consciousness having been modernized into
                algorithmic art.
              </p>

              <p style={{ marginBottom: "15px" }}>
                The design, the functionality and the experience of the room are
                complimented harnessing today's new media and technologies, with
                fully integrated in-room operating systems all controlled from
                the guest's smart phone. The aim is to create a living
                environment that exudes ease-of-use and exceeds the expectations
                of today's discerning guest.
              </p>

              <p>
                The design, which was conceived, detailed and built in
                collaboration with Guttman Interiors in a period of six weeks,
                was announced as the{" "}
                <Link href="#" style={{ color: "#80AE50" }}>
                  Winner of the Sleep Event Competition
                </Link>{" "}
                at the Business Design Centre, London.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 250px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

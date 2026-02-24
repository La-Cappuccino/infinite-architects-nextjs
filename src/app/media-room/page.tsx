"use client";

import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function MediaRoomPage() {
  return (
    <PageLayout>
      <div style={{ backgroundColor: "#000000", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "90%", margin: "0 auto", paddingTop: "20px" }}>
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
            <div style={{ position: "relative", width: "250px", height: "300px" }}>
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
                <p style={{ margin: "0 0 5px 0" }}>Project Name: Villa Shivnani</p>
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
            <div style={{ position: "relative", width: "250px", height: "300px" }}>
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
                <p style={{ margin: "0 0 15px 0" }}>Client: Sleeper Hotel Magazine</p>
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
                  The brief was to capture the spirit of 1960&apos;s &apos;swinging London&apos;.
                  Taking inspiration from the radical art, fashion, film and music
                  scenes that flourished during this period, generating new ideas and
                  creating a youth phenomenon that strongly emphasized the new and the
                  modern, a time of optimism and hedonism, a rebellion against the
                  artistic and social norms, creating an explosive cultural revolution.
                </p>

                <p style={{ marginBottom: "15px" }}>
                  Infinite&apos;s design concept reconsidered the typical hotel guestroom
                  configuration to deliver a revolutionary guest experience through a
                  contemporary interpretation of the sixties counterculture that
                  questioned the political, social and moral values of the time.
                </p>

                <p style={{ marginBottom: "15px" }}>
                  The design, which was conceived, detailed and built in collaboration
                  with Guttman Interiors in a period of six weeks, was announced as the{" "}
                  <Link href="#" style={{ color: "#80AE50" }}>
                    Winner of the Sleep Event Competition
                  </Link>{" "}
                  at the Business Design Centre, London.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

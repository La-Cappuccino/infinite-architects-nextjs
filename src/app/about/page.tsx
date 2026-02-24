"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      {/* Page Title */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontFamily: '"neue-haas-grotesk-display", sans-serif',
            fontSize: "3vw",
            fontWeight: 200,
            letterSpacing: "0.05em",
          }}
        >
          <span style={{ color: "#80AE50" }}>About</span>{" "}
          <span style={{ color: "#FFFFFF" }}>Infinite</span>
        </h1>
      </div>

      {/* Value Cards */}
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto 60px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            border: "1px solid rgba(128, 174, 80, 0.3)",
            borderRadius: "8px",
            padding: "30px",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.7 }}>
            <span
              style={{
                color: "#80AE50",
                fontWeight: 400,
                fontSize: "16px",
              }}
            >
              we are...
            </span>{" "}
            <span style={{ color: "rgba(255,255,255,0.7)" }}>
              a boutique architecture and interior design firm made up of
              vibrant individuals passionate about design and the possibilities
              it unlocks to improve the lives of those within our society. Our
              core values are creativity, integrity, humility and
              accountability.
            </span>
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            border: "1px solid rgba(128, 174, 80, 0.3)",
            borderRadius: "8px",
            padding: "30px",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.7 }}>
            <span
              style={{
                color: "#80AE50",
                fontWeight: 400,
                fontSize: "16px",
              }}
            >
              we believe...
            </span>{" "}
            <span style={{ color: "rgba(255,255,255,0.7)" }}>
              through our design, Infinite is committed to enriching the lives
              of people by creating built environs moulded through conceptual
              innovation, attention to detail, technical excellence, appropriate
              functionality, social awareness and environmental responsibility.
              We believe we have a responsibility to ensure that each of our
              projects enrich those who experience them and their surroundings
              culturally, economically and socially.
            </span>
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            border: "1px solid rgba(128, 174, 80, 0.3)",
            borderRadius: "8px",
            padding: "30px",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.7 }}>
            <span
              style={{
                color: "#80AE50",
                fontWeight: 400,
                fontSize: "16px",
              }}
            >
              we work...
            </span>{" "}
            <span style={{ color: "rgba(255,255,255,0.7)" }}>
              through a trust based collaborative approach between our clients
              and interdisciplinary consultants. We nurture our professional
              relationships but remain fluid and in so doing, encourage
              creativity, evolution, development and maturation. We are
              committed to our design but encourage research and discovery to
              allow it to flourish. Through this we aim to create buildings and
              interior spaces that excite both the senses and the intellect.
            </span>
          </p>
        </div>
      </div>

      {/* Founder Images - Side by Side */}
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0",
        }}
      >
        <div style={{ position: "relative", aspectRatio: "1/1" }}>
          <Image
            src="/images/team/russell.jpg"
            alt="Russell"
            fill
            style={{
              objectFit: "cover",
              filter: "grayscale(100%)",
            }}
          />
        </div>
        <div style={{ position: "relative", aspectRatio: "1/1" }}>
          <Image
            src="/images/team/helen.jpg"
            alt="Helen"
            fill
            style={{
              objectFit: "cover",
              filter: "grayscale(100%)",
            }}
          />
        </div>
      </div>

      {/* Green Divider Line */}
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          height: "5px",
          backgroundColor: "#80AE50",
        }}
      />

      {/* Founder Bios */}
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          padding: "40px 0",
          backgroundColor: "#000",
        }}
      >
        {/* Russell Bio */}
        <div>
          <h2
            style={{
              color: "#80AE50",
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              fontSize: "24px",
              fontWeight: 300,
              marginBottom: "20px",
            }}
          >
            Russell
          </h2>
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "13px",
              lineHeight: 1.8,
            }}
          >
            <p>
              has always been inspired by the combination of the tangible and
              the intangible, a fascination that continues to this day. It was
              therefore almost inevitable that his chosen career would be
              Architecture. As through design, it unites the physical qualities
              of built form, material application, response to the environment
              and applicable technology with the creative arts, mathematical
              theories of form and proportion, human emotional response and
              history. This dichotomy pervades everything he does whether it is
              work related or social.
            </p>
            <p>
              With his 25 years' experience he has delivered a wide range of
              landmark and award winning projects ranging from industrial,
              residential, retail, commercial and high end hospitality for
              clients from Africa, Asia, Europe and the Middle East. Clients
              include the V&A Waterfront, Old Mutual, Sew Eurodrive, Robertson
              and Cain, Jumeirah Group, One & Only Resorts, Southern Sun,
              Fairmont, Hilton, Emaar, Mediclinic, City Hospital and Diyar.
            </p>
            <p>
              Russell's passion is sailing and he has taken part in many world
              class races including 'Fastnet', 'Cowes Regatta', Cape Town to Rio
              and Cape Town to St. Helena to name but a few.
            </p>
            <p>
              He continues sailing here at Dubai Offshore Sailing Club in his
              spare time on his yacht Sovereign.
            </p>
          </div>
        </div>

        {/* Helen Bio */}
        <div>
          <h2
            style={{
              color: "#80AE50",
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              fontSize: "24px",
              fontWeight: 300,
              marginBottom: "20px",
            }}
          >
            Helen
          </h2>
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "13px",
              lineHeight: 1.8,
            }}
          >
            <p>
              has always had a passion for design. With a Scottish RAF pilot
              Father and Swedish Mother, she grew up moving around the world,
              living in the UK, America & The Sultanate of Oman, finally
              settling in Dubai in 1998. She attained an Interior Design degree
              from Napier University in Edinburgh and has accumulated over 25
              years' experience in the Hospitality Design industry. During this
              time, she has earned a reputation as a dynamic, multi-disciplined
              award-winning designer. Her vast knowledge and experience of hotel
              design comes from years of working closely with many of the
              worlds' leading hotel operators in conjunction with many
              prestigious clients and project teams. Whether it be master
              planning, concept design, detailed coordination with other
              consultants or site work, Helen achieves excellence by immersing
              herself in all facets of the design. Her career has seen her work
              on a multitude of internationally recognised projects spanning
              Europe, South America, Africa, and the Middle East. These range
              from luxury hotels, bars, fine dining restaurants and private
              villas. Her work and interaction with people from these varied
              regions have given her an insight into the diverse cultures of the
              world and a love of travel that inspires her creativity. Helen
              believes that being sensitive to the Client's needs, matched with
              an impeccable eye for detail wins every time.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}

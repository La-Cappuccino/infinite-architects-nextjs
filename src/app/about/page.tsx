"use client";

import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const values = [
  {
    title: "we are...",
    text: "a boutique architecture and interior design firm made up of vibrant individuals passionate about design and the possibilities it unlocks to improve the lives of those within our society. Our core values are creativity, integrity, humility and accountability.",
  },
  {
    title: "we believe...",
    text: "through our design, Infinite is committed to enriching the lives of people by creating built environs moulded through conceptual innovation, attention to detail, technical excellence, appropriate functionality, social awareness and environmental responsibility. We believe we have a responsibility to ensure that each of our projects enrich those who experience them and their surroundings culturally, economically and socially.",
  },
  {
    title: "we work...",
    text: "through a trust based collaborative approach between our clients and interdisciplinary consultants. We nurture our professional relationships but remain fluid and in so doing, encourage creativity, evolution, development and maturation. We are committed to our design but encourage research and discovery to allow it to flourish. Through this we aim to create buildings and interior spaces that excite both the senses and the intellect.",
  },
];

const founders = [
  {
    name: "Russell",
    image: "/images/team/russell.jpg",
    bio: `has always been inspired by the combination of the tangible and the intangible, a fascination that continues to this day. It was therefore almost inevitable that his chosen career would be Architecture. As through design, it unites the physical qualities of built form, material application, response to the environment and applicable technology with the creative arts, mathematical theories of form and proportion, human emotional response and history. This dichotomy pervades everything he does whether it is work related or social.

With his 25 years' experience he has delivered a wide range of landmark and award winning projects ranging from industrial, residential, retail, commercial and high end hospitality for clients from Africa, Asia, Europe and the Middle East. Clients include the V&A Waterfront, Old Mutual, Sew Eurodrive, Robertson and Cain, Jumeirah Group, One & Only Resorts, Southern Sun, Fairmont, Hilton, Emaar, Mediclinic, City Hospital and Diyar.

Russell's passion is sailing and he has taken part in many world class races including 'Fastnet', 'Cowes Regatta', Cape Town to Rio and Cape Town to St. Helena to name but a few.

He continues sailing here at Dubai Offshore Sailing Club in his spare time on his yacht Sovereign.`,
  },
  {
    name: "Helen",
    image: "/images/team/helen.jpg",
    bio: `has always had a passion for design. With a Scottish RAF pilot Father and Swedish Mother, she grew up moving around the world, living in the UK, America & The Sultanate of Oman, finally settling in Dubai in 1998. She attained an Interior Design degree from Napier University in Edinburgh and has accumulated over 25 years' experience in the Hospitality Design industry. During this time, she has earned a reputation as a dynamic, multi-disciplined award-winning designer. Her vast knowledge and experience of hotel design comes from years of working closely with many of the world's leading hotel operators in conjunction with many prestigious clients and project teams. Whether it be master planning, concept design, detailed coordination with other consultants or site work, Helen achieves excellence by immersing herself in all facets of the design. Her career has seen her work on a multitude of internationally recognised projects spanning Europe, South America, Africa, and the Middle East. These range from luxury hotels, bars, fine dining restaurants and private villas. Her work and interaction with people from these varied regions have given her an insight into the diverse cultures of the world and a love of travel that inspires her creativity. Helen believes that being sensitive to the Client's needs, matched with an impeccable eye for detail wins every time.`,
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <div style={{ backgroundColor: "#000000", paddingBottom: "80px" }}>
        {/* Page Title */}
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <h1
            style={{
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              fontSize: "64px",
              fontWeight: 200,
              letterSpacing: "0.02em",
              color: "#FFFFFF",
            }}
          >
            <span style={{ color: "#80AE50" }}>About</span> Infinite
          </h1>
        </div>

        {/* Values Grid - 3 Columns */}
        <div
          style={{
            maxWidth: "90%",
            margin: "0 auto 60px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
          }}
        >
          {values.map((value) => (
            <div
              key={value.title}
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "25px",
                backgroundColor: "transparent",
              }}
            >
              <p
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "16px",
                  fontWeight: 100,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                <span style={{ color: "#80AE50" }}>{value.title}</span>{" "}
                {value.text}
              </p>
            </div>
          ))}
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
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="founder-image"
              style={{
                position: "relative",
                aspectRatio: "1/1",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                style={{
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                  transition: "filter 0.5s ease",
                }}
              />
            </div>
          ))}
        </div>

        {/* Green Divider */}
        <div
          style={{
            maxWidth: "90%",
            margin: "40px auto",
            height: "2px",
            backgroundColor: "#80AE50",
          }}
        />

        {/* Founders Bios - 2 Columns */}
        <div
          style={{
            maxWidth: "90%",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          {founders.map((founder) => (
            <div key={founder.name}>
              {/* Name with green underline */}
              <h2
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "32px",
                  fontWeight: 300,
                  color: "#80AE50",
                  paddingBottom: "15px",
                  marginBottom: "20px",
                  borderBottom: "2px solid #80AE50",
                }}
              >
                {founder.name}
              </h2>

              {/* Bio */}
              <div
                style={{
                  fontFamily: '"neue-haas-grotesk-display", sans-serif',
                  fontSize: "16px",
                  fontWeight: 100,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                }}
              >
                {founder.bio.split("\n\n").map((paragraph, i) => (
                  <p key={i} style={{ marginBottom: "15px" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hover effect styles */}
        <style jsx global>{`
          .founder-image:hover img {
            filter: grayscale(0%) !important;
          }
        `}</style>
      </div>
    </PageLayout>
  );
}

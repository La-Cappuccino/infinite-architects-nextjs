"use client";

import Image from "next/image";

const founders = [
  {
    name: "Russell",
    image: "/images/team/russell.jpg",
    bio: "has always been inspired by the combination of the tangible and the intangible, a fascination that continues to this day. It was therefore almost inevitable that his chosen career would be Architecture. As through design, it unites the physical qualities of built form, material application, response to the environment and applicable technology with the creative",
  },
  {
    name: "Helen",
    image: "/images/team/helen.jpg",
    bio: "has always had a passion for design. With a Scottish RAF pilot Father and Swedish Mother, she grew up moving around the world, living in the UK, America & The Sultanate of Oman, finally settling in Dubai in 1998. She attained an Interior Design degree from Napier University in Edinburgh and has accumulated over 25 years' experience in the",
  },
];

const teamMembers = [
  {
    name: "Joshua",
    image: "/images/team/joshua.jpg",
    bio: "inspired by the spectacular built landscape while traveling, Joshua pursued a career in architecture and became a licensed architect and a BIM practitioner. He is an alumnus of the University of San",
  },
  {
    name: "Anoop",
    image: "/images/team/anoop.jpg",
    bio: "originally from India, Anoop lived and worked in Paris, Thailand and Dubai, immersing himself in each of the countries diverse cultures. he has over 25 years of experience in the hospitality design industry",
  },
  {
    name: "Farha",
    image: "/images/team/farha.jpg",
    bio: "a confident, competent, and imaginative interior designer with 12 years of extensive experience working on high end hospitality and luxury residential projects. Her career has seen her work on",
  },
];

export default function TeamPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        paddingTop: "100px",
        paddingBottom: "80px",
      }}
    >
      {/* Page Title */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1
          style={{
            fontFamily: '"neue-haas-grotesk-display", sans-serif',
            fontSize: "3vw",
            fontWeight: 200,
            letterSpacing: "0.05em",
            color: "#FFFFFF",
          }}
        >
          Meet the <span style={{ color: "#80AE50" }}>team</span>
        </h1>
      </div>

      {/* Founders - 2 Column */}
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {founders.map((founder) => (
          <div key={founder.name}>
            {/* Image with green border */}
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                marginBottom: "20px",
                border: "1px solid rgba(128, 174, 80, 0.3)",
              }}
            >
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                style={{
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>

            {/* Name */}
            <h3
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "22px",
                fontWeight: 300,
                color: "#80AE50",
                margin: "0 0 15px 0",
              }}
            >
              {founder.name}
            </h3>

            {/* Bio */}
            <p
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "13px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {founder.bio}
            </p>
          </div>
        ))}
      </div>

      {/* Green Divider Line */}
      <div
        style={{
          maxWidth: "90%",
          margin: "40px auto",
          height: "5px",
          backgroundColor: "#80AE50",
        }}
      />

      {/* Team Members - 3 Column */}
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {teamMembers.map((member) => (
          <div key={member.name}>
            {/* Image with green border */}
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                marginBottom: "20px",
                border: "1px solid rgba(128, 174, 80, 0.3)",
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>

            {/* Name */}
            <h3
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "20px",
                fontWeight: 300,
                color: "#80AE50",
                margin: "0 0 12px 0",
              }}
            >
              {member.name}
            </h3>

            {/* Bio */}
            <p
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "12px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {member.bio}
            </p>
          </div>
        ))}
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          div[style*="gridTemplateColumns: 1fr 1fr"],
          div[style*="gridTemplateColumns: repeat"] {
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

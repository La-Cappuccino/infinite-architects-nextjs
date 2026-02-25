/**
 * LivingEdge Site Content
 */

export const siteConfig = {
  name: "LivingEdge",
  tagline: "Interior Design & Construction",
  description: "We design inspired spaces shaped by your vision, uniting architecture, function, and refined interior detail.",
  location: "Kampala, Uganda",
  
  contact: {
    email: "livingedge2026@gmail.com",
    address: {
      office: "Suite 1, 3rd Floor",
      building: "Impala House",
      street: "Plot 13/15 Kimathi Avenue",
      city: "Kampala, Uganda",
      poBox: "196910 Kampala GPO",
    },
  },

  social: {
    instagram: "https://www.instagram.com/livingedgeworks/",
    facebook: "https://www.facebook.com/livingedgeworks/",
  },
};

export const services = [
  "Interior",
  "Design",
  "Production",
  "Furniture",
  "Architectural",
  "Remodeling",
];

export const valueCards = [
  {
    title: "About",
    content: "LivingEdge — Interior Design & Construction. We are a design-focused firm made up of passionate individuals committed to transforming spaces that improve the lives of those within our community.",
  },
  {
    title: "Services",
    list: services,
  },
  {
    title: "Process",
    content: "We work closely with builders, consultants, and other partners to make sure each project runs smoothly and the final build delivers well beyond our shared aspirations.",
  },
];

// Design System Colors
export const colors = {
  green: "#80ae50",
  greenDark: "#6a9340",
  dark: "#000000",
  muted: "rgba(255,255,255,0.5)",
  text: "rgba(255,255,255,0.9)",
};

// Typography
export const typography = {
  fontFamily: "neue-haas-grotesk-display, sans-serif",
  fontWeights: {
    light: 200,
    normal: 300,
    medium: 400,
  },
};

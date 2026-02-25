"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export default function ContactPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <PageLayout>
      <div style={{ backgroundColor: "#000000" }}>
        {/* Hero Section */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "60vh",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/portfolio/project-07.jpg"
            alt="LivingEdge Project"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "6px",
                textTransform: "uppercase",
                color: "#80AE50",
                marginBottom: "25px",
              }}
            >
              Get In Touch
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 300,
                letterSpacing: "0.02em",
                color: "#FFFFFF",
                textAlign: "center",
                padding: "0 20px",
              }}
            >
              Let&apos;s Create Together
            </h1>
          </div>
        </div>

        {/* Contact Section */}
        <section
          style={{
            padding: "120px 40px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "100px",
            }}
          >
            {/* Left Column - Info */}
            <div className="fade-in-left">
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#80AE50",
                  marginBottom: "25px",
                }}
              >
                Contact
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: "30px",
                }}
              >
                Ready to transform your space?
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "17px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.9,
                  marginBottom: "50px",
                }}
              >
                We&apos;d love to hear about your project. Reach out and let&apos;s discuss how we can bring your vision to life.
              </p>

              {/* Contact Details */}
              <div style={{ marginBottom: "40px" }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "15px",
                  }}
                >
                  Email
                </p>
                <Link
                  href="mailto:livingedge2026@gmail.com"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "20px",
                    fontWeight: 300,
                    color: "#80AE50",
                    textDecoration: "none",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  livingedge2026@gmail.com
                </Link>
              </div>

              <div style={{ marginBottom: "40px" }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "15px",
                  }}
                >
                  Location
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "17px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.8,
                  }}
                >
                  Suite 1, 3rd Floor<br />
                  Impala House<br />
                  Plot 13/15 Kimathi Avenue<br />
                  Kampala, Uganda
                </p>
              </div>

              {/* Social */}
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "20px",
                  }}
                >
                  Follow Us
                </p>
                <div style={{ display: "flex", gap: "15px" }}>
                  <Link
                    href="https://www.instagram.com/livingedgeworks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#FFFFFF",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#80AE50";
                      e.currentTarget.style.color = "#80AE50";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.facebook.com/livingedgeworks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#FFFFFF",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#80AE50";
                      e.currentTarget.style.color = "#80AE50";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="fade-in-right">
              <div
                style={{
                  backgroundColor: "rgba(128,174,80,0.1)",
                  border: "1px solid rgba(128,174,80,0.3)",
                  padding: "60px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "32px",
                    fontWeight: 300,
                    color: "#FFFFFF",
                    marginBottom: "25px",
                  }}
                >
                  Start Your Project
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.8,
                    marginBottom: "40px",
                  }}
                >
                  Whether you&apos;re planning a complete renovation or a simple refresh, we&apos;re here to help. Send us an email to schedule a consultation.
                </p>
                <Link
                  href="mailto:livingedge2026@gmail.com?subject=Project%20Inquiry"
                  className="btn-modern"
                  style={{
                    display: "inline-block",
                    padding: "20px 50px",
                    backgroundColor: "#80AE50",
                    color: "#000000",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    textAlign: "center",
                    border: "1px solid #80AE50",
                    transition: "all 0.4s ease",
                  }}
                >
                  Send Email
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section style={{ padding: "0 40px 80px", maxWidth: "1400px", margin: "0 auto" }}>
          <div className="fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7576107!2d32.5825!3d0.3136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0!2sKimathi%20Avenue%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1708700000000!5m2!1sen!2sug"
              width="100%"
              height="400"
              style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LivingEdge Office Location"
            />
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

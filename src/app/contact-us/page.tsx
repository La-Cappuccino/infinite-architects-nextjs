"use client";

import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout>
      <div style={{ backgroundColor: "#000000", paddingBottom: "80px" }}>
        {/* Hero Section */}
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <h1
            style={{
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              fontSize: "64px",
              fontWeight: 200,
              letterSpacing: "0.02em",
              color: "#FFFFFF",
              marginBottom: "30px",
            }}
          >
            Inspired Spaces, Shaped by Vision
          </h1>

          {/* CTA Button */}
          <Link
            href="mailto:livingedge2026@gmail.com"
            style={{
              display: "inline-block",
              padding: "15px 40px",
              border: "1px solid #80AE50",
              color: "#80AE50",
              fontFamily: '"neue-haas-grotesk-display", sans-serif',
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            START YOUR PROJECT
          </Link>
        </div>

        {/* Contact Info Grid - 3 Columns */}
        <div
          style={{
            maxWidth: "90%",
            margin: "0 auto 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "40px",
          }}
        >
          {/* Contact us */}
          <div>
            <h2
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "24px",
                fontWeight: 300,
                color: "#80AE50",
                marginBottom: "20px",
              }}
            >
              Contact us
            </h2>
            <div
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "16px",
                fontWeight: 100,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 2,
              }}
            >
              <p style={{ margin: 0 }}>
                <Link
                  href="mailto:livingedge2026@gmail.com"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  livingedge2026@gmail.com
                </Link>
              </p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h2
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "24px",
                fontWeight: 300,
                color: "#80AE50",
                marginBottom: "20px",
              }}
            >
              Location
            </h2>
            <div
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "16px",
                fontWeight: 100,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: 0 }}>Suite 1, 3rd Floor</p>
              <p style={{ margin: 0 }}>Impala House</p>
              <p style={{ margin: 0 }}>Plot 13/15 Kimathi Avenue</p>
              <p style={{ margin: 0 }}>Kampala, Uganda</p>
              <p style={{ margin: 0 }}>196910 Kampala GPO</p>
            </div>
          </div>

          {/* Follow us */}
          <div>
            <h2
              style={{
                fontFamily: '"neue-haas-grotesk-display", sans-serif',
                fontSize: "24px",
                fontWeight: 300,
                color: "#80AE50",
                marginBottom: "20px",
              }}
            >
              Follow us
            </h2>
            <div style={{ display: "flex", gap: "15px" }}>
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/livingedgeworks/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "50%",
                  color: "#FFFFFF",
                }}
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/livingedgeworks/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "50%",
                  color: "#FFFFFF",
                }}
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Google Map - Kampala */}
        <div style={{ maxWidth: "90%", margin: "0 auto" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7576107!2d32.5825!3d0.3136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0!2sKimathi%20Avenue%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1708700000000!5m2!1sen!2sug"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LivingEdge Office Location"
          />
        </div>
      </div>
    </PageLayout>
  );
}

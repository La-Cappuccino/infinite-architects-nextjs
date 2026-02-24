"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatedSection, FadeUp, ScaleIn, Reveal } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

const contactInfo = [
  {
    title: "Get In Touch",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    items: [
      { label: "Phone", value: "+971 4 3636306", href: "tel:+97143636306" },
      { label: "Russell", value: "russell@infinitedesigners.co", href: "mailto:russell@infinitedesigners.co" },
      { label: "Helen", value: "helen@infinitedesigners.co", href: "mailto:helen@infinitedesigners.co" },
    ] as ContactItem[]
  },
  {
    title: "Visit Us",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      { label: "Address", value: "Office 2601, Mazaya Business Avenue" },
      { label: "", value: "Tower AA1, Jumeirah Lake Towers" },
      { label: "", value: "Dubai, United Arab Emirates" },
      { label: "PO Box", value: "63 43 56" },
    ] as ContactItem[]
  },
  {
    title: "Office Hours",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      { label: "Sunday - Thursday", value: "8:00 AM - 6:00 PM" },
      { label: "Friday", value: "8:00 AM - 12:00 PM" },
      { label: "Saturday", value: "Closed" },
      { label: "Consultations", value: "By Appointment" },
    ] as ContactItem[]
  }
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/infinitedubai/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/InfiniteDXB/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/infinite-architects-dubai",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    timeline: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: "",
      email: "", 
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
      timeline: ""
    });
    
    setIsSubmitting(false);
    
    // Show success message (you could implement a toast here)
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-infinite-gray-950 pt-fluid-lg pb-fluid-xl">
      {/* Hero Section */}
      <section className="container mx-auto px-fluid-sm">
        <div className="text-center mb-fluid-lg">
          <FadeUp delay={200}>
            <h1 className="font-display font-extralight text-display-lg text-white mb-6">
              Life through <span className="text-infinite-green-500">Design</span>
            </h1>
          </FadeUp>
          <FadeUp delay={400}>
            <p className="text-heading-sm text-infinite-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to transform your vision into reality? Let's collaborate to create 
              exceptional spaces that inspire and elevate the human experience.
            </p>
          </FadeUp>
          <FadeUp delay={600}>
            <Button 
              variant="primary" 
              size="xl"
              className="hover:scale-105 transition-transform"
            >
              <Link href="mailto:russell@infinitedesigners.co" className="flex items-center gap-3">
                Start Your Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="container mx-auto px-fluid-sm mb-fluid-xl">
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScaleIn delay={300}>
              <div className="glass-panel p-8 rounded-3xl border border-glass-border-green">
                <h2 className="font-display font-light text-heading-xl text-white mb-8">
                  Tell Us About Your <span className="text-infinite-green-500">Project</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-infinite-gray-300 text-body-md mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-infinite-gray-850/50 border border-infinite-gray-700 rounded-lg px-4 py-3 text-white placeholder-infinite-gray-500 focus:border-infinite-green-500 focus:ring-1 focus:ring-infinite-green-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-infinite-gray-300 text-body-md mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-infinite-gray-850/50 border border-infinite-gray-700 rounded-lg px-4 py-3 text-white placeholder-infinite-gray-500 focus:border-infinite-green-500 focus:ring-1 focus:ring-infinite-green-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-infinite-gray-300 text-body-md mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-infinite-gray-850/50 border border-infinite-gray-700 rounded-lg px-4 py-3 text-white placeholder-infinite-gray-500 focus:border-infinite-green-500 focus:ring-1 focus:ring-infinite-green-500 transition-colors"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-infinite-gray-300 text-body-md mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-infinite-gray-850/50 border border-infinite-gray-700 rounded-lg px-4 py-3 text-white placeholder-infinite-gray-500 focus:border-infinite-green-500 focus:ring-1 focus:ring-infinite-green-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-infinite-gray-300 text-body-md mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-infinite-gray-850/50 border border-infinite-gray-700 rounded-lg px-4 py-3 text-white focus:border-infinite-green-500 focus:ring-1 focus:ring-infinite-green-500 transition-colors"
                      >
                        <option value="">Select project type</option>
                        <option value="hospitality">Hospitality Design</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="retail">Retail</option>
                        <option value="planning">Urban Planning</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-infinite-gray-300 text-body-md mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-infinite-gray-850/50 border border-infinite-gray-700 rounded-lg px-4 py-3 text-white focus:border-infinite-green-500 focus:ring-1 focus:ring-infinite-green-500 transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="250k-500k">$250K - $500K</option>
                        <option value="500k+">$500K+</option>
                        <option value="consultation">Consultation Only</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-infinite-gray-300 text-body-md mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-infinite-gray-850/50 border border-infinite-gray-700 rounded-lg px-4 py-3 text-white focus:border-infinite-green-500 focus:ring-1 focus:ring-infinite-green-500 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="12months+">12+ months</option>
                      <option value="planning">Just planning</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-infinite-gray-300 text-body-md mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-infinite-gray-850/50 border border-infinite-gray-700 rounded-lg px-4 py-3 text-white placeholder-infinite-gray-500 focus:border-infinite-green-500 focus:ring-1 focus:ring-infinite-green-500 transition-colors resize-none"
                      placeholder="Tell us about your project vision, requirements, and goals..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full hover:scale-[1.02] transition-transform"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </ScaleIn>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((section, index) => (
              <FadeUp key={section.title} delay={500 + index * 100}>
                <div className="glass-panel p-6 rounded-2xl border border-glass-border-green">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-infinite-green-500/20 rounded-xl flex items-center justify-center text-infinite-green-500">
                      {section.icon}
                    </div>
                    <h3 className="font-display font-medium text-heading-md text-infinite-green-500">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col">
                        {item.label && (
                          <span className="text-infinite-gray-400 text-body-sm mb-1">
                            {item.label}
                          </span>
                        )}
                        {item.href ? (
                          <Link 
                            href={item.href}
                            className="text-infinite-gray-200 text-body-md hover:text-infinite-green-500 transition-colors"
                          >
                            {item.value}
                          </Link>
                        ) : (
                          <span className="text-infinite-gray-200 text-body-md">
                            {item.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
            
            {/* Social Links */}
            <FadeUp delay={800}>
              <div className="glass-panel p-6 rounded-2xl border border-glass-border-green">
                <h3 className="font-display font-medium text-heading-md text-infinite-green-500 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl border border-infinite-gray-700 flex items-center justify-center text-infinite-gray-400 hover:text-infinite-green-500 hover:border-infinite-green-500/50 hover:scale-110 transition-all duration-300"
                      title={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-fluid-sm">
        <Reveal delay={600}>
          <h2 className="font-display font-light text-heading-xl text-white text-center mb-fluid-md">
            Visit Our <span className="text-infinite-green-500">Studio</span>
          </h2>
        </Reveal>
        
        <ScaleIn delay={700}>
          <div className="glass-panel p-4 rounded-3xl border border-glass-border-green max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.168!2d55.1416!3d25.0764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46d7c!2sInfinite%20Architects%20Interior%20Design%20Urban%20Planning!5e0!3m2!1sen!2sae!4v1708700000000!5m2!1sen!2sae"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Infinite Architects Office Location"
                className="rounded-xl"
              />
            </div>
          </div>
        </ScaleIn>
      </section>
    </div>
  );
}
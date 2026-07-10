"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Web3Forms Integration
    try {
      const access_key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      
      if (!access_key) {
        console.error("Web3Forms access key is missing! Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your .env.local file.");
        setStatus("error");
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col bg-background overflow-x-clip">
      <Header />

      {/* Form Container */}
      <div className="flex-1 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto w-full py-16 md:py-24 flex flex-col justify-center animate-fade-in-up">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Let's <span className="text-accent">Connect</span>.
          </h1>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-xl backdrop-blur-sm">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
              <FaCheckCircle className="text-6xl text-green-500 mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Message Sent!</h2>
              <p className="text-muted text-lg">Thank you for reaching out. I will get back to you shortly.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 px-8 py-3 bg-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground/80 pl-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground/80 pl-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-foreground/80 pl-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground/80 pl-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Error Message */}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 px-4 py-3 rounded-lg text-sm font-medium">
                  <FaExclamationCircle />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0 flex items-center justify-center gap-3 mt-4"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer Container */}
      <div className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full mt-auto">
        <Footer />
      </div>
    </main>
  );
}

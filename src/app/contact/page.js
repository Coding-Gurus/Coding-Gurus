"use client";

import { useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";

const metadata = {
  title: "Contact Us | Coding Gurus",
  description:
    "Get in touch for a free consultation. We respond within 24 hours.",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectIdea: "",
    budget: "",
    timeline: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log('Submitting form to Telegram...');
      
      // Send to Telegram
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact_form',
          ...formData,
        }),
      });

      const responseData = await response.json();
      console.log('Telegram API response:', responseData);

      if (response.ok) {
        console.log('Form submitted and sent to Telegram successfully');
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            company: "",
            email: "",
            projectIdea: "",
            budget: "",
            timeline: "",
          });
          setSubmitted(false);
        }, 3000);
      } else {
        console.error('Failed to send to Telegram:', responseData);
        // Still show success to user but log the error
        alert(`Form submitted but notification failed: ${responseData.details || 'Unknown error'}. Please contact us directly.`);
        setSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: "",
            company: "",
            email: "",
            projectIdea: "",
            budget: "",
            timeline: "",
          });
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Form submission error. Please try contacting us directly via email.');
      // Still show success to user
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          company: "",
          email: "",
          projectIdea: "",
          budget: "",
          timeline: "",
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-dark overflow-hidden">
      <ConsultationModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)}
        sourcePage="Contact Page"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-blue-500/20 rounded-lg animate-shape-rotate"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100 animate-slide-in-left">
              Let&apos;s Build Something Amazing Together
            </h1>
            <p className="text-xl text-zinc-400 animate-slide-in-right">
              Fill out the form below or reach out directly — we typically
              respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-zinc-100">
                Get a Free Consultation
              </h2>

              {submitted ? (
                <div className="glass border border-green-500/30 bg-green-500/10 rounded-lg p-8 text-center backdrop-blur-sm">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-zinc-300">
                    We&apos;ve received your inquiry and will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-zinc-100 placeholder-zinc-500 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-zinc-300 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-zinc-100 placeholder-zinc-500 backdrop-blur-sm"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-zinc-100 placeholder-zinc-500 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-300 mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="projectIdea"
                      required
                      value={formData.projectIdea}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-zinc-100 placeholder-zinc-500 backdrop-blur-sm"
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-zinc-300 mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-zinc-100 backdrop-blur-sm"
                    >
                      <option value="" className="bg-zinc-900">
                        Select budget range
                      </option>
                      <option value="under-50k" className="bg-zinc-900">
                        Under ₹50,000
                      </option>
                      <option value="50k-1l" className="bg-zinc-900">
                        ₹50,000 - ₹1,00,000
                      </option>
                      <option value="1l-3l" className="bg-zinc-900">
                        ₹1,00,000 - ₹3,00,000
                      </option>
                      <option value="3l-5l" className="bg-zinc-900">
                        ₹3,00,000 - ₹5,00,000
                      </option>
                      <option value="above-5l" className="bg-zinc-900">
                        Above ₹5,00,000
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-zinc-300 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-zinc-100 backdrop-blur-sm"
                    >
                      <option value="" className="bg-zinc-900">
                        Select timeline
                      </option>
                      <option value="urgent" className="bg-zinc-900">
                        Urgent (1-2 weeks)
                      </option>
                      <option value="normal" className="bg-zinc-900">
                        Normal (1-2 months)
                      </option>
                      <option value="flexible" className="bg-zinc-900">
                        Flexible (2-3 months)
                      </option>
                      <option value="long-term" className="bg-zinc-900">
                        Long-term (3+ months)
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-zinc-100">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="glass border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg flex items-center justify-center text-xl">
                      📧
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-100 mb-1">Email Us</h3>
                      <a
                        href="mailto:contact@codinggurus.in"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                        onClick={async () => {
                          try {
                            await fetch('/api/telegram', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                                type: 'email_click',
                                page: 'Contact Page',
                              }),
                            });
                          } catch (error) {
                            console.error('Error notifying Telegram:', error);
                          }
                        }}
                      >
                        contact@codinggurus.in
                      </a>
                      <p className="text-sm text-zinc-500 mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Meeting */}
                <div className="glass border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center text-xl">
                      📅
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-100 mb-1">
                        Schedule a Meeting
                      </h3>
                      <a
                        href="#"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsConsultationModalOpen(true);
                        }}
                      >
                        Book a free consultation call
                      </a>
                      <p className="text-sm text-zinc-500 mt-1">
                        30-minute strategy session
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="glass border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="font-bold text-zinc-100 mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                    >
                      in
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      tw
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
                    >
                      gh
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 glass border border-zinc-800 rounded-xl p-6">
                <h3 className="font-bold mb-4 text-zinc-100">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">✓</span>
                    <span className="text-zinc-300">
                      Response within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">✓</span>
                    <span className="text-zinc-300">
                      Free project consultation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">✓</span>
                    <span>No-obligation quote</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">✓</span>
                    <span>Proven track record</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import sendToWhatsApp from "@/lib/sendToWhatsApp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form processing
    setTimeout(() => {
      sendToWhatsApp(form.name, form.message, form.phone);
      setLoading(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
      subtitle: "Call us anytime"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@srkinteriors.com",
      subtitle: "24/7 support"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Mumbai, Maharashtra",
      subtitle: "Visit our studio"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon - Sat: 9AM - 7PM",
      subtitle: "Sunday by appointment"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-600 font-semibold tracking-wide uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-black">
            Start Your Design
            <span className="text-yellow-600"> Journey</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for a consultation and let's bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-black mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send via WhatsApp</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                We're here to help you create the perfect space. Reach out through any of these channels.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-black mb-1">{info.title}</h4>
                  <p className="text-gray-800 font-medium">{info.details}</p>
                  <p className="text-gray-500 text-sm">{info.subtitle}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-black text-white p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Ready to get started?</h4>
              <p className="text-gray-300 mb-6">
                Book a free consultation with our design experts and discover how we can transform your space.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
              >
                Book Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
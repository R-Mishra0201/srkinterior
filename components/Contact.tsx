"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    };

    emailjs
      .send("service_q0ha99f", "template_jcv7nyw", templateParams, "UYZwRWWhKgDx-eMI_")
      .then(
        () => {
          setSuccess(true);
          setForm({ name: "", email: "", phone: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("❌ Failed:", error);
          alert("Something went wrong!");
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-4 py-3 rounded text-black"
              value={form.name}
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-3 rounded text-black"
              value={form.email}
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border px-4 py-3 rounded text-black"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border px-4 py-3 rounded text-black"
              value={form.message}
              required
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {success && (
              <p className="text-green-600 font-medium mt-3">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Phone className="text-yellow-600 mt-1" />
            <div>
              <h4 className="font-bold">Phone</h4>
              <p>+91 9871571613</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="text-yellow-600 mt-1" />
            <div>
              <h4 className="font-bold">Email</h4>
              <p>info@srkinteriors.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="text-yellow-600 mt-1" />
            <div>
              <h4 className="font-bold">Location</h4>
              <p>Noida, Uttar Pradesh</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Clock className="text-yellow-600 mt-1" />
            <div>
              <h4 className="font-bold">Hours</h4>
              <p>Mon - Sat: 9AM - 7PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

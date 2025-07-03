"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        },
        (error) => {
          console.error("❌ Failed:", error);
          alert("Something went wrong!");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-100 to-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-3xl shadow-2xl border-t-8 border-yellow-400"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Let’s Work Together ✨</h2>
          <p className="text-gray-500 mb-8">Fill in your details and we’ll get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {["name", "email", "phone", "message"].map((field, i) => (
              <div key={i} className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-600 capitalize">{field}</label>
                {field === "message" ? (
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:ring-2 focus:ring-yellow-400 outline-none resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                ) : (
                  <input
                    required={field !== "phone"}
                    type={field === "email" ? "email" : "text"}
                    placeholder={
                      field === "name" ? "Enter your name" :
                      field === "email" ? "you@example.com" :
                      "Optional"
                    }
                    className="rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:ring-2 focus:ring-yellow-400 outline-none"
                    value={form[field as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  />
                )}
              </div>
            ))}

            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
            >
              {loading ? "Sending..." : "🚀 Send Message"}
            </motion.button>

            {success && (
              <p className="text-green-600 font-medium mt-3 text-center">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8 text-gray-700"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">📞 Contact Info</h3>
            <p className="text-gray-500">We’d love to hear from you. Here’s how you can reach us...</p>
          </div>

          {[
            { icon: Phone, title: "Phone", detail: "+91 9871571613" },
            { icon: Mail, title: "Email", detail: "info@srkinteriors.com" },
            { icon: MapPin, title: "Location", detail: "Noida, Uttar Pradesh" },
            { icon: Clock, title: "Working Hours", detail: "Mon–Sat: 9AM–7PM" }
          ].map((info, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="flex items-start space-x-4">
              <info.icon className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">{info.title}</h4>
                <p>{info.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

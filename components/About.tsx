"use client";
import { motion } from "framer-motion";
import { Award, Users, Palette, Clock } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Palette, number: "200+", label: "Projects Completed" },
    { icon: Clock, number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-24 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-600 font-semibold tracking-wide uppercase">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Crafting Spaces That
              <span className="text-yellow-600"> Inspire</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With over 15 years of experience in luxury interior design, Shah Rukh Khan Interiors 
              has been transforming homes and commercial spaces into masterpieces that reflect 
              sophistication, comfort, and personal style.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our approach combines contemporary design principles with timeless elegance, 
              ensuring every project becomes a unique expression of our clients' vision and lifestyle.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Learn More About Our Process
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury Interior Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm font-semibold">Years of Excellence</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
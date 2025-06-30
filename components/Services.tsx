"use client";
import { motion } from "framer-motion";
import { Home, Building2, Palette, Lightbulb, Sofa, Twitch as Kitchen } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Complete home transformations that reflect your personal style and enhance your daily living experience.",
      features: ["Living Rooms", "Bedrooms", "Bathrooms", "Home Offices"]
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description: "Professional office and retail environments designed to inspire productivity and create lasting impressions.",
      features: ["Office Spaces", "Retail Stores", "Restaurants", "Showrooms"]
    },
    {
      icon: Kitchen,
      title: "Kitchen Design",
      description: "Functional and beautiful kitchen spaces that become the heart of your home with perfect blend of style and utility.",
      features: ["Modern Kitchens", "Traditional Designs", "Island Layouts", "Storage Solutions"]
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Strategic lighting solutions that enhance ambiance and highlight architectural features throughout your space.",
      features: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Smart Controls"]
    },
    {
      icon: Sofa,
      title: "Furniture Selection",
      description: "Curated furniture pieces and custom designs that perfectly complement your space and lifestyle needs.",
      features: ["Custom Furniture", "Space Planning", "Color Coordination", "Material Selection"]
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Expert color schemes and material selections that create cohesive and visually stunning interior environments.",
      features: ["Color Psychology", "Material Palettes", "Texture Combinations", "Trend Forecasting"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-600 font-semibold tracking-wide uppercase">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-black">
            Comprehensive Design
            <span className="text-yellow-600"> Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From concept to completion, we offer a full range of interior design services 
            tailored to transform your vision into reality with unmatched attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-yellow-600" />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  category: string;
  index: number;
}

export default function ProjectCard({ title, image, description, category, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </motion.div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-yellow-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
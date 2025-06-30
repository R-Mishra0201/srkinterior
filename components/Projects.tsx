"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "@/constants/projects";

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-600 font-semibold tracking-wide uppercase">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured
            <span className="text-yellow-600"> Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore our carefully curated collection of interior design projects that showcase 
            our commitment to excellence and attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title} 
              image={project.image} 
              description={project.description}
              category={project.category}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
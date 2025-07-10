import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  category: string;
  index: number;
  slug?: string; // optional for now
}

export default function ProjectCard({
  title,
  image,
  description,
  category,
  slug,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${slug}`} className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full h-60">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-500 text-sm mt-1">{category}</p>
          <p className="text-gray-700 mt-2 text-sm">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

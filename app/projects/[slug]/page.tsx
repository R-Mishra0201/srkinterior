"use client";
import { useState } from "react";
import projects from "@/constants/projects";
import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) return <div className="text-white p-8">Project not found</div>;

  return (
    <div className="min-h-screen bg-black text-white p-6 relative">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6 text-gray-400">{project.description}</p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {project.images.map((url, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(url)}
          >
            <Image
              src={url}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className="inline-block mt-10 text-yellow-400 hover:text-yellow-300 transition"
      >
        ← Back to Home
      </Link>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        >
          <div className="relative w-[90vw] h-[80vh] max-w-5xl">
            <Image
              src={selectedImage}
              alt="Selected"
              fill
              className="object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-white/10 z-50"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

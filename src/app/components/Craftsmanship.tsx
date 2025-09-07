"use client";
import { TextGenerateEffect } from "../components/text-generate-effect"; // aceternity component

export default function Craftsmanship() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
    
      <video 
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src="/craftsmanship.mp4" type="video/mp4" /> 
        {/* apna video yaha add karna */}
      </video>

      {/* Overlay (black gradient for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          The Art of Craftsmanship
        </h2>

        <TextGenerateEffect
          words="Every pair of Vellano shoes is handcrafted with precision, 
          blending modern technology and timeless artistry. 
          From the finest leather to the smallest stitch, 
          we create not just footwear, but a statement of luxury."
          className="text-lg md:text-xl text-gray-200 leading-relaxed"
        />
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { CometCard } from "../components/ui/comet-card"; 

export default function Featured() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState<number | null>(null);

  const shoes = [
    { id: 1, name: "Vellano Runner", price: "$120", img: "/SHOE.png" },
    { id: 2, name: "Vellano Classic", price: "$140", img: "/SHOE2.png" },
    { id: 3, name: "Vellano Smooth", price: "$160", img: "/SHOE3.png" },
    { id: 4, name: "Vellano Sport", price: "$180", img: "/SHOE4.png" },
    { id: 5, name: "Vellano +", price: "$200", img: "/SHOE5.png" },
    { id: 6, name: "Vellano Pro", price: "$220", img: "/SHOE2.png" },
  ];

  const handleAddToCart = (shoe: any) => {
    addToCart(shoe);
    setAdded(shoe.id);
    setTimeout(() => setAdded(null), 2000); 
  };

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-16 text-white">
        Featured Products
      </h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
        {shoes.map((shoe) => (
          <CometCard
            key={shoe.id}
            className="relative group rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-lg"
          >
         
            <motion.img
              src={shoe.img}
              alt={shoe.name}
              className="w-full h-64 object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

           
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                {shoe.name}
              </h3>
              <p className="text-gray-300 mb-4">{shoe.price}</p>

            
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAddToCart(shoe)}
                className="px-6 py-2 rounded-full font-semibold text-white
                  bg-white/10 backdrop-blur-md border border-white/20 shadow-lg 
                  transition-colors hover:bg-white/20"
              >
                {added === shoe.id ? "✅ Added!" : "Add to Cart"}
              </motion.button>
            </div>
          </CometCard>
        ))}
      </div>
    </section>
  );
}

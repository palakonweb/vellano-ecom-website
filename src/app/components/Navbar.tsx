"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link"; 
import { useCart } from "@/context/CartContext"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart(); 

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 
      bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg">

     
      <h1 className="text-2xl font-bold tracking-widest text-white">VELLANO</h1>

     
      <ul className="hidden md:flex gap-8 text-gray-300">
        {["HOME", "GYM", "SPORTS", "CASUAL", "BOOTS"].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="cursor-pointer font-medium transition-colors"
          >
            {item}
          </motion.li>
        ))}
      </ul>

     
      <div className="flex items-center gap-6 text-gray-300 relative">
       
        <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
          <Search size={22} />
        </motion.div>

       
        <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer relative">
          <Link href="/cart">
            <ShoppingCart size={22} />
          </Link>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </motion.div>

        
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

     
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-black/90 text-gray-300 flex flex-col items-center gap-6 py-6 md:hidden"
        >
          {["HOME", "GYM", "SPORTS", "CASUAL", "BOOTS"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: "#fff" }}
              className="cursor-pointer font-medium text-lg"
              onClick={() => setIsOpen(false)} 
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}

import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 pt-10 pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
       
        <h1 className="text-2xl font-extrabold tracking-widest text-white">
          VELLANO
        </h1>

      
        <ul className="flex gap-6 text-sm font-medium">
          {["Home", "Shop", "About", "Contact"].map((link) => (
            <li
              key={link}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {[
            { icon: <Instagram size={20} />, href: "#" },
            { icon: <Twitter size={20} />, href: "#" },
            { icon: <Youtube size={20} />, href: "#" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

     
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-white/5 pt-4">
        © 2025 Vellano. All Rights Reserved.
      </div>
    </footer>
  );
}

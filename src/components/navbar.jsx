"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }


    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-amber-50 via-stone-100 to-amber-50 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3 text-3xl font-semibold text-stone-800 tracking-tight">
          <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-3 py-1 rounded-full shadow-md font-serif">
            S
          </span>
          <span className="font-playfair tracking-wide text-2xl text-amber-600">
            Serena<span className="text-stone-800">Wellness</span>
          </span>

        </div>

        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[17px] text-gray-700 hover:text-amber-600 transition-all duration-300 relative group"
            >
              <span>{link.name}</span>

            </a>
          ))}
        </div>


        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-amber-600" /> : <Menu size={24} className="text-amber-600" />}
          </button>
        </div>
      </div>


      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600 text-lg transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

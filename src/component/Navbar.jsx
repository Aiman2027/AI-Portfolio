import { useState } from "react";
import OverLayMenu from "./OverLayMenu";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        
        <div>
          
        </div>

        <div className="hidden lg:block">
         <button
            onClick={() => setMenuOpen(true)}
            className="bg-gradient-to-red from-pink-500 to-blue-500 text-white px-8 py-8 rounded-full font-medium shadow-lg hover:opacity-90 transition duration-300 "
             aria-label="Open Menu"
          >
             <FiMenu />
          </button>
        </div>
      </nav>

      <OverLayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
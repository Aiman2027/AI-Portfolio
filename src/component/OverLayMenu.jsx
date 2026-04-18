import { motion, AnimatePresence } from "framer-motion";
import { FiXCircle } from "react-icons/fi";

export default function OverlayMenu({ isOpen, onClose }) {
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skill" },
    { name: "Projects", id:"proj" },
    { name: "Experiences", id:"exp" },
    { name: "Testimonials", id: "testimonial" },
    { name: "Achievements", id: "achievement" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/90 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <FiXCircle />
          </button>

          <ul className="space-y-6 text-center">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="text-4xl text-white font-semibold hover:text-pink-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
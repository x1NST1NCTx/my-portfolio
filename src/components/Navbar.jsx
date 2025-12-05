import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full border-b border-white/10 backdrop-blur-sm z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left Side - Hamburger + Logo (Mobile Order) */}
          <div className="flex items-center space-x-4">
            {/* Mobile Hamburger - First position */}
            <motion.button
              className="md:hidden text-white p-1 order-first"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>

            {/* Logo - Second position */}
            <motion.span
              className="text-xl font-semibold tracking-wide text-orange-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Annish Vykera.
            </motion.span>
          </div>

          {/* Desktop Menu - Right side only */}
          <motion.div
            className="space-x-8 hidden md:flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="hover:text-orange-500 transition">
                <motion.span
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Unchanged */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed top-20 left-0 w-full bg-black/90 backdrop-blur-md md:hidden z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col space-y-4">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-xl hover:text-orange-500 transition py-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

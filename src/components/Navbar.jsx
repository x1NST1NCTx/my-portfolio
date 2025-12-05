import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full border-b border-white/10 backdrop-blur-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.span
          className="text-xl font-semibold tracking-wide text-orange-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Annish Vykera.
        </motion.span>

        <motion.div
          className="space-x-8 hidden md:flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/" className="hover:text-orange-500 transition block">
            <motion.span
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              Home
            </motion.span>
          </Link>
          <Link to="/skills" className="hover:text-orange-500 transition block">
            <motion.span
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              Skills
            </motion.span>
          </Link>

          <Link
            to="/projects"
            className="hover:text-orange-500 transition block"
          >
            <motion.span
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              Projects
            </motion.span>
          </Link>

          <Link
            to="/contact"
            className="hover:text-orange-500 transition block"
          >
            <motion.span
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              Contact
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}

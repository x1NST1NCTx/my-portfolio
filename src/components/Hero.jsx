import NewtonsCradleMatter from "./NewtonsCradeMatter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 max-w-6xl mx-auto">
      <div className="flex w-full items-center justify-between gap-8">
        {/* Left side */}
        <div>
          <motion.h1
            className="text-5xl md:text-6xl font-light leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm{" "}
            <motion.span
              className="font-semibold text-orange-500"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Annish
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-white/70 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Full-stack developer building clean, reliable, and modern web
            applications.
          </motion.p>

          <motion.a
            href="/projects"
            className="inline-block mt-8 px-6 py-3 border border-orange-500 text-orange-500 rounded-lg transition-all"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#f97316",
              color: "#000000",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            View Projects
          </motion.a>
        </div>

        {/* Right side: cradle – only visible md and up */}
        <motion.div
          className="hidden md:flex items-center justify-center w-[260px] h-[220px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <NewtonsCradleMatter />
        </motion.div>
      </div>
    </section>
  );
}

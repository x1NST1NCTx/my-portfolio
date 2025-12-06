import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { MdEmail, MdDescription } from "react-icons/md";

export default function Hero() {
  return (
    <section className="hero-section min-h-screen flex items-center px-6 max-w-6xl mx-auto bg-transparent">
      <div className="flex w-full items-center justify-between gap-8">
        <div>
          {/* existing heading / text */}
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



          {/* Social icons row */}
          <div className="mt-6 flex items-center gap-6 text-white/80">
            <a
              href="https://github.com/x1NST1NCTx"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="hover:text-orange-400 transition transform hover:-translate-y-0.5"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:avykera@gmail.com"
              title="Email"
              className="hover:text-orange-400 transition transform hover:-translate-y-0.5"
            >
              <MdEmail size={22} />
            </a>
            <a
              href="https://linkedin.com/in/annish-vykera-1442881a1"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="hover:text-orange-400 transition transform hover:-translate-y-0.5"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://docs.google.com/document/d/1SV0KI5uEOoGHBTxY3AaXOKEujOQJC8QCpit8UrJx4oU/edit?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              title="Resume"
              className="hover:text-orange-400 transition transform hover:-translate-y-0.5"
            >
              <MdDescription size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

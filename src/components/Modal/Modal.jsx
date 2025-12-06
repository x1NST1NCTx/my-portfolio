import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {

  // ESC closes modal
  useEffect(() => {
    const handler = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP — clicking this closes */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}   // <-- closes modal
          />

          {/* WRAPPER — ALSO catches clicks outside modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            onClick={onClose}   // <-- ensures clicking ANY empty space closes
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}
          >
            {/* MODAL BOX — stops click from closing */}
            <div
              className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 max-w-lg w-full text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()} // <-- prevents accidental close
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="preloader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 2, // duration for fade-in and fade-out
          ease: "easeInOut", // Smooth easing for a better transition
        }}
      >
        <motion.h1
          style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2, // duration for fade-in and fade-out
            ease: "easeInOut", // Smooth easing for a better transition
            delay: 0.8,
          }}
        >
          Cake Art
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;

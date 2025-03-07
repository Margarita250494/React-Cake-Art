import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
    >
      <Helmet>
        <title>Cake Art | Home</title>
      </Helmet>
      Home
    </motion.section>
  );
};

import React from "react";
import { easeInOut, motion } from "framer-motion";
import productsData from "./productsData";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Products = () => {
  return (
    <div className="container my-16 space-y-4">
      {/** Header */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Check our <span className="text-primary">Coffee Delights</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Energize your day with our expertly crafted brews, specially designed
          to fuel your coding sessions and spark creativity. Enjoy the perfect
          flavor.
        </motion.p>
      </div>

      {/** Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {productsData.map((product) => (
          <motion.div
            variants={cardVariants}
            className="text-center p-4 space-y-5"
          >
            <img
              src={product.image}
              alt={product.title}
              className="img-shadow-two max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">
                {product.title}
              </h3>
              <p className="text-darkGray">{product.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;

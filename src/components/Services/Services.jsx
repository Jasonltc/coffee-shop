import React from "react";
import { motion, transform } from "framer-motion";
import { DUMMY_TEXT } from "../../data/DUMMY_PRODUCT";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      dumping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      dumping: 10,
      ease: "easeInOut",
      staggerChildren: 0.4,
    },
  },
};

export default function Services() {
  return (
    <section>
      <div className="container my-16 space-y-4">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              dumping: 10,
              delay: 0.2,
            }}
            className="text-3xl font-bold text-lightGray"
          >
            <span className="text-primary">Fresh and </span> Tasty Coffee
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              dumping: 10,
              delay: 0.4,
            }}
            className="text-sm opacity-50"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            similique cumque explicabo delectus vel est in id? Cupiditate,
            dolorem odit!
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {DUMMY_TEXT.map((coffee) => (
            <motion.div
              variants={cardVariants}
              key={coffee.id}
              className="text-center p-4 space-y-6"
            >
              <img
                src={coffee.image}
                alt="coffee"
                className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
              />
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">
                  {coffee.title}
                </p>
                <p className="text-darkGray max-w-60 mx-auto">
                  {coffee.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

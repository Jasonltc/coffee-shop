import React from "react";
import worldMap from "../../assets/world-map.png";
import { motion } from "framer-motion";

export default function WhereAreWe() {
  return (
    <section>
      <div className="container my-28">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-darkGray font-serif"
            >
              Buy our products from anyWhere
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <input
                type="text"
                placeholder="Name"
                className="input-style w-full lg:w-[150px]"
              />
              <input
                type="email"
                placeholder="Email"
                className="input-style w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <input
                type="text"
                placeholder="Country"
                className="input-style w-full "
              />
              <input
                type="text"
                placeholder="Zip code"
                className="input-style w-full lg:w-[150px]"
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="primary-btn w-full"
            >
              Order Now
            </motion.button>
          </div>

          <div className="col-span-2">
            <img
              src={worldMap}
              alt="world-map"
              className="w-full sm:w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

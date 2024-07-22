import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../../assets/coffee-cover.jpg";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const BannerStyle = {
  backgroundImage: `url(${bannerImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

export default function AppBanner() {
  return (
    <section>
      <div className="container my-14">
        <div
          style={BannerStyle}
          className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
        >
          <div>
            <div className="space-y-6 max-w-xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.2,
                }}
                className="text-2x; text-center sm:text-4xl font-semibold"
              >
                Download the app
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                className="text-center sm:px-20"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur, vero?
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.6,
                }}
                className="flex justify-center items-center gap-6"
              >
                <a
                  href=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                >
                  <img src={AppStoreImg} alt="" />
                </a>

                <a
                  href=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                >
                  <img src={PlayStoreImg} alt="" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

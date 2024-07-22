import { useState } from "react";
import { motion } from "framer-motion";
import BgImage from "../../src/assets/bg-slate.png";
import BlackCoffee from "../../src/assets/black.png";
import Navbar from "./Navbar/Navbar";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function Hero() {
  const [sidebar, setSidebar] = useState(false);

  function handleClick() {
    setSidebar((prev) => !prev);
  }
  return (
    <>
      <Navbar showSideBar={handleClick} />
      <section style={bgImage}>
        <div className="relative min-h-[750px] w-full">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
              <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                <motion.h1
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                  className="text-7xl font-bold leading-tight ml-14"
                >
                  Blvck Tumbler
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1.2,
                  }}
                  className="relative"
                >
                  <div className="relative z-10 space-y-4">
                    <p className="text-2xl">Black Lifestyle Lovers</p>
                    <p className="text-sm opacity-55 leading-loose">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero perferendis iusto neque dicta porro quibusdam, nisi
                      sapiente itaque recusandae! Deserunt delectus
                    </p>
                  </div>

                  <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
                </motion.div>
              </div>

              <div className="relative">
                <motion.img
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                  src={BlackCoffee}
                  alt="cup"
                  className="relative z-10 h-[400px] md:h-[700px] img-shadow"
                />

                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.8,
                  }}
                  className="h-[180px] w-[180px] absolute top-16 -right-8 lg:top-20 border-primary border-[20px] rounded-full z-5"
                ></motion.div>

                <div className="absolute -top-20 left-[200px] z-[1]">
                  <p className="hidden none lg:block lg:text-[5rem] 2xl:text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                    Blvck Tumbler
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative lg:mt-[230px] mt-[50px] mb-[50px]"
              >
                <div className="relative z-10 space-y-4 text-lightOrange">
                  <p className="text-2xl">Black Lifestyle Lovers</p>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero perferendis iusto neque dicta porro quibusdam, nisi
                    sapiente itaque recusandae!
                  </p>
                </div>

                <div className="absolute -top-6 -right-2 w-[250px] h-[190px] bg-darkGray/50"></div>
              </motion.div>
            </div>
          </div>

          {/* sidebar Menu */}
          {sidebar && (
            <motion.div className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10">
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-6 text-white">
                  <div className="w-[1px] h-[70px] bg-white"></div>

                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaFacebookF className="text-2xl" />
                  </div>

                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaTwitter className="text-2xl" />
                  </div>

                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaInstagram className="text-2xl" />
                  </div>

                  <div className="w-[1px] h-[70px] bg-white"></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

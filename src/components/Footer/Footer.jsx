import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import creditCard from "../../assets/website/credit-cards.webp";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary pt-12 pb-18 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <p className="text-3xl font-bold uppercase">Coders Cafe</p>

            <p className="text-sm max-w-[200px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam sunt dicta cupiditate fuga facilis reprehenderit
              inventore praesentium a? Repudiandae, soluta.
            </p>

            <p className="flex items-center gap-2">
              <FaPhone />
              +230 0000 0000
            </p>

            <p className="flex items-center gap-2">
              <FaMapLocation />
              Mauritius
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <p className="text-3xl font-bold">Quick Links</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2 cursor-pointer">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 cursor-pointer">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <p className="text-3xl font-bold">Follow Us</p>
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTwitter className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <p className="text-xl font-semibold mb-2">Payment Methods</p>
              <img src={creditCard} alt="credit card" className="w-[80%]" />
            </div>
          </motion.div>
        </div>

        <p className="text-white text-center mt-8 pt-8 border-t-2 pb-8">
          Copyright@ 2024 coder coffee. All rights reserved
        </p>
      </div>
    </footer>
  );
}

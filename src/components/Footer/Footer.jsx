import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaMapLocation,
} from "react-icons/fa6";
import creditCards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/** Company details */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold uppercase">Binary Beans</h3>
            <p className="text-sm max-w-[300px]">
              We blend the programming world with the rich aroma of freshly
              brewed coffee. Our cozy atmosphere is designed to inspire
              creativity and productivity.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone /> +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2">
                <FaMapLocation /> San Francisco, California
              </p>
            </div>
          </motion.div>
          {/** Links */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                  <li>Cookies Policy</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                  <li>Cookies Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/** Social media */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Follow Us</h3>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Payment Methods</h4>
              <img src={creditCards} alt="credit cards" className="w-[80%]" />
            </div>
          </motion.div>
        </div>

        {/** Copyright */}
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright &copy; 2024 Binary Beans. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

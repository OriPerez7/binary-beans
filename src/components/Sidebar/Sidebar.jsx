import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      whileInView={{ x: 0 }}
      className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
    >
      <div className="w-full h-full flex flex-col justify-evenly items-center">
        <div className="flex flex-col justify-center items-center gap-6 text-white">
          <div className="uppercase text-xl cursor-pointer">
            <p>Home</p>
          </div>
          <div className="uppercase text-xl cursor-pointer">
            <p>Menu</p>
          </div>
          <div className="uppercase text-xl cursor-pointer">
            <p>Order</p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center gap-6 text-white">
          {/** line */}
          <div className="w-[1px] h-[50px] bg-white"></div>
          {/** Social Icons */}
          <div className="inline-block p-2 rounded-full cursor-pointer border-white border">
            <FaFacebookF className="text-lg" />
          </div>
          <div className="inline-block p-2 rounded-full cursor-pointer border-white border">
            <FaXTwitter className="text-lg" />
          </div>
          <div className="inline-block p-2 rounded-full cursor-pointer border-white border">
            <FaInstagram className="text-lg" />
          </div>

          <div className="w-[1px] h-[50px] bg-white"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;

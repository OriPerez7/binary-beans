import React, { useState } from "react";
import BgImage from "../../assets/bg-blue.png";
import Cup from "../../assets/cup.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeta: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/*Navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />

          {/*Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h2
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.7,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Coder Lifestyle
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.9,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl">Welcome to Binary Beans,</h3>
                  <p className="text-sm opacity-55 leading-loose">
                    We blend the programming world with the rich aroma of
                    freshly brewed coffee. Our cozy atmosphere is designed to
                    inspire creativity and productivity, whether you're
                    debugging a complex algorithm or collaborating on the next
                    big tech innovation.
                  </p>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-lightGray/50"></div>
              </motion.div>
            </div>

            {/* hero image */}
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
                src={Cup}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
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
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                <p className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Coder Lifestyle
                </p>
              </motion.div>
            </div>

            {/* third div */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.9,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h2 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                The ultimate haven
              </h2>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl">The Ultimate Haven</h3>
                  <p className="text-sm opacity-55 leading-loose">
                    We understand that great code requires great coffee. Our
                    menu features a variety of premium coffee blends, each
                    meticulously roasted to perfection.
                  </p>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/** Sidebar Menu */}
        {sidebar && <Sidebar />}
      </section>
    </main>
  );
};

export default Hero;

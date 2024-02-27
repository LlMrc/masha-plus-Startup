"use client";

import Image from "next/image";
import price from "../../public/images/pricing.png";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zoomIn } from "@/app/utils/motion";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const onclick = () => {
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="z-10 fixed md:top-[50px] top-[10rem] mr-auto ml-auto left-0 right-0 md:w-3/5 md:h-[500px] sm:w-full px-6 md:px-0"
        >
          <motion.div
            key="popup"
            variants={zoomIn(0.1, 0.5)}
            initial={{ y: "50%", opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 8 }}
            exit={{ y: "50%", opacity: 0, transition: { duration: 0.2 } }}
            className={`bg-cover bg-popup bg-center md:h-full md:w-full h-[200px] rounded-lg  shadow-2xl border-2`}
          >
            <div
              onClick={onclick}
              className="bg-red-400 cursor-pointer absolute -top-3 -right-3 rounded-full h-8 w-8 flex items-center justify-center  text-white font-bold text-center"
            >
              X
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;

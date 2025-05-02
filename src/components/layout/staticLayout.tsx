import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Outlet } from "react-router";
import Navbar from "../staticComponents/navbar";
import Footer from "../staticComponents/footer";

const StaticLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-bDark">
        <motion.div
          className="w-16 h-16 border-4 border-t-tlight border-bDark rounded-full animate-spin"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
        ></motion.div>
      </div>
    );
  }

  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-32 max-w-[1440px] mx-auto">
      {/* navigation bar */}
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default StaticLayout;

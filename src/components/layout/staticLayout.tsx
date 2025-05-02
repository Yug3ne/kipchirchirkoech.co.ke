import { Outlet } from "react-router";
import Navbar from "../staticComponents/navbar";
import Footer from "../staticComponents/footer";

const StaticLayout = () => {
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

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-500">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LandingPageLayout() {
  return (
    <>
      <Header />
      <div className="px-5 pt-24 md:px-12 max-md:pt-20">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

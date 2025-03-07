import "@/styles/main.scss";
import { Header, Menu } from "@/components";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSidebar } from "./hooks/hooks";
import { Home, About, Services, Portfolio } from "./scenes";

//import Preloader from "./components/preloader/Preloader";

export const App = () => {
  const { isSidebarOpen, toggleSidebar, closeMenu } = useSidebar();
  return (
    <HelmetProvider>
      <Router>
        <Menu isSidebarOpen={isSidebarOpen} setMenuIsVisible={toggleSidebar} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Header toggleSidebar={toggleSidebar} closeMenu={closeMenu} />
      </Router>
    </HelmetProvider>
  );
};

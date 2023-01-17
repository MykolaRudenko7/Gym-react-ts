import React from "react";
//
import { Benefits } from "@/components/Benefits";
import { Home } from "@/components/Home";
import { Navbar } from "@/components/Navbar/index";
import { ContactUs } from "./components/ContactUs";
import { OurClasses } from "./components/OurClasses/insex";
import { SelectedPage } from "./shared/types";
import { Footer } from "./components/Footer";
//
//
//
//
//
function App() {
  // за замовчуванням вибрано дім
  const [selectedPage, setSelectedPage] = React.useState<SelectedPage>(
    SelectedPage.Home
  );
//
  const [isTopOfPage, setIsTopOfPage] = React.useState<boolean>(true)

  React.useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll', handleScoll)
    // при покиданні сторінки видаляю
    return () => window.removeEventListener('scroll', handleScoll)
  }, [])
//
  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;

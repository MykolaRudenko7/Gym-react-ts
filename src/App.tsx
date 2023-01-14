import React from "react";
//
import { Navbar } from "@/components/Navbar/index";
import { Home } from "./components/Home";
import { SelectedPage } from "./shared/types";
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

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
      <Home
        setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;

import "./App.css";
import { createContext, useContext, useState } from "react";
import NavBar from "./containers/NavBar";
import ShowPage from "./components/ShowPage";

export const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

export const App = () => {
  const pages = ["About Me", "Portfolio", "Contact", "Resume"];
  const [currentPage, setCurrentPage] = useState("About Me");
  return (
    <div>
      <PageContext.Provider value={{ pages, currentPage, setCurrentPage }}>
        <NavBar />
        <ShowPage />
      </PageContext.Provider>
    </div>
  );
};

import { usePageContext } from "../../App";
import { useEffect } from "react";
import AboutMe from "../../containers/AboutMe";
import Portfolio from "../../containers/Portfolio";
import Contact from "../../containers/Contact";

const ShowPage = () => {
  const { currentPage } = usePageContext();

  if (currentPage === "About Me") {
    return <AboutMe />;
  } else if (currentPage === "Portfolio") {
    return <Portfolio />;
  } else if (currentPage === "Contact") {
    return <Contact />;
  } else {
    return <h1>Downloading Resume</h1>;
  }
};

export default ShowPage;

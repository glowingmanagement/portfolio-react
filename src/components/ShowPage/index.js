import { usePageContext } from "../../App";
import AboutMe from "../../containers/AboutMe";
import Portfolio from "../../containers/Portfolio";
import Contact from "../../containers/Contact";
import myCV from "../../assets/Josh-Holmes-CV.pdf";
import { saveAs } from "file-saver";

const ShowPage = () => {
  const { currentPage } = usePageContext();

  if (currentPage === "About Me") {
    return <AboutMe />;
  } else if (currentPage === "Portfolio") {
    return <Portfolio />;
  } else if (currentPage === "Contact") {
    return <Contact />;
  } else {
    saveAs(
      "https://drive.google.com/file/d/1hUVGO7g0rG2cQCorFXnmiBBX12t5prU4/view?usp=sharing",
      "Josh_Holmes_CV.pdf"
    );
    return <Portfolio />;
  }
};

export default ShowPage;

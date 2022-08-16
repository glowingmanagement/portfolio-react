import PortfolioCard from "../../components/PortfolioCard";
import "./Portfolio.css";
import policeImage from "../../assets/images/police-fighter.png";

const Portfolio = () => {
  return (
    <div className="container">
      <PortfolioCard
        title="Police Crime Fighter"
        altText="Police Crime Fighter Application"
        githubLink="https://github.com/SkyIsNotGreen/police-crime-fighter"
        deployLink="https://skyisnotgreen.github.io/police-crime-fighter/"
        imageURL={policeImage}
      />
    </div>
  );
};

export default Portfolio;

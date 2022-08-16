import PortfolioCard from "../../components/PortfolioCard";
import "./Portfolio.css";
import policeImage from "../../assets/images/police-fighter.png";
import techBlog from "../../assets/images/Tech-blog.png";
import buddyupImage from "../../assets/images/Buddy-Up.png";
import passwordGeneratorImage from "../../assets/images/password-generator.png";
import workScheduleImage from "../../assets/images/Work-Scheduler.png";
import quizImage from "../../assets/images/quiz.png";
import weatherImage from "../../assets/images/Weather-App.png";

const Portfolio = () => {
  return (
    <div>
      <h1 className="title">My Portfolio</h1>
      <div className="container">
        <PortfolioCard
          title="Police Crime Fighter"
          altText="Police Crime Fighter Application"
          githubLink="https://github.com/SkyIsNotGreen/police-crime-fighter"
          deployLink="https://skyisnotgreen.github.io/police-crime-fighter/"
          imageURL={policeImage}
        />
        <PortfolioCard
          title="Tech Blog"
          altText="Tech Blog Application"
          githubLink="https://github.com/glowingmanagement/tech-blog/tree/dev"
          deployLink="https://tech-blog-jh22.herokuapp.com/"
          imageURL={techBlog}
        />
        <PortfolioCard
          title="Buddy Up"
          altText="Buddy Up Application"
          githubLink="https://github.com/roxywasiak/buddy-up"
          deployLink="https://limitless-citadel-05906.herokuapp.com/"
          imageURL={buddyupImage}
        />
        <PortfolioCard
          title="Password Generator"
          altText="Password Generator Application"
          githubLink="https://github.com/glowingmanagement/random-password-generator"
          deployLink="https://glowingmanagement.github.io/random-password-generator/"
          imageURL={passwordGeneratorImage}
        />
        <PortfolioCard
          title="Work Schedule"
          altText="Work Schedule Application"
          githubLink="https://github.com/glowingmanagement/Work-Schedule"
          deployLink="https://glowingmanagement.github.io/Work-Schedule/"
          imageURL={workScheduleImage}
        />
        <PortfolioCard
          title="Quiz App"
          altText="Quiz Application"
          githubLink="https://github.com/glowingmanagement/Quiz-App"
          deployLink="https://glowingmanagement.github.io/Quiz-App/"
          imageURL={quizImage}
        />
        <PortfolioCard
          title="Weather App"
          altText="Weather Application"
          githubLink="https://github.com/glowingmanagement/weather-app"
          deployLink="https://glowingmanagement.github.io/weather-app/"
          imageURL={weatherImage}
        />
      </div>
    </div>
  );
};

export default Portfolio;

import profileImage from "../../assets/images/about-me-image.jpg";
import "../AboutMe/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="boxContainer">
        <h1>Josh Holmes</h1>
      </div>
      <div className="boxContainer">
        <img src={profileImage} alt="Josh Holmes" className="image" />
      </div>
    </div>
  );
};

export default AboutMe;

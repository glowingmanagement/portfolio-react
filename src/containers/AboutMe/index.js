import profileImage from "../../assets/images/about-me-image.jpg";
import "../AboutMe/AboutMe.css";
import MusicPlayer from "../../components/MusicPlayer";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="boxContainer">
        <h1 className="title">About Me</h1>
        <p className="content">
          I began learning how to code over lockdown by building a React Native
          application for the Palace Drum Clinic. Since then, I have used Udemy
          courses to learn languages such as, Python, C#, React Native and more.
        </p>
        <p className="content">
          Since March 2022, I have been doing the Coding Bootcamp Course through
          Birmingham University, which is providing me with the skills for Full
          Stack Web Development. While I am looking forward to beginning a tech
          career, I also have many hobbies and interests. My main one is music.
          I have always loved learning instruments and the challenges that need
          to be overcome to improve.
        </p>
        <p className="content">
          I play drums, guitar, bass guitar, piano and vocals and I have been
          writing and recording my own music for the past 18 months. I have
          loved building up a following and had opportunities to play at gigs
          and festivals, as well as being supported by BBC Introducing and
          gaining over 100k streams on Spotify.
        </p>
        <div className="musicPlayerContainer">
          <MusicPlayer />
        </div>
      </div>
      <div className="boxContainer">
        <img src={profileImage} alt="Josh Holmes" className="image" />
      </div>
    </div>
  );
};

export default AboutMe;

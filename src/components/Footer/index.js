import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="footerContainer">
      <a
        target="_blank"
        href="https://www.github.com/glowingmanagement"
        rel="noreferrer"
      >
        <GitHubIcon sx={{ fontSize: 35, margin: 3 }} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/joshholmes22"
        rel="noreferrer"
      >
        <LinkedInIcon sx={{ fontSize: 35, margin: 3 }} />
      </a>
      <a
        target="_blank"
        href="mailto:josh@glowingmanagement.com"
        rel="noreferrer"
      >
        <EmailIcon sx={{ fontSize: 35, margin: 3 }} />
      </a>
    </div>
  );
};

export default Footer;

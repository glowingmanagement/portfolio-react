import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/material/Link";

const PortfolioCard = ({
  title,
  altText,
  githubLink,
  deployLink,
  imageURL,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={imageURL} alt={altText} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link target="_blank" href={githubLink}>
          <GitHubIcon sx={{ fontSize: 40 }} />
        </Link>
        <Link target="_blank" href={deployLink}>
          <LinkIcon sx={{ fontSize: 40 }} />
        </Link>
      </CardActions>
    </Card>
  );
};

export default PortfolioCard;
import { Project } from "./data";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { AspectRatio } from "react-aspect-ratio";

const makeImagePath = (path: string, extname: string): string => {
  const dotIndex = path.lastIndexOf(".");
  const basename = dotIndex >= 0 ? path.substring(0, dotIndex) : path;
  return `${process.env.PUBLIC_URL}/${basename}.${extname}`;
};

const makePictureSource = (imagePath: string): JSX.Element | undefined => {
  const dotIndex = imagePath.lastIndexOf(".");
  if (dotIndex < 0) return undefined;
  const type = imagePath.substring(dotIndex + 1);
  return <source srcSet={imagePath} type={`image/${type}`} />;
};

type CardProps = {
  project: Project;
  onLearnMore: (project: Project) => void;
};

export const ProjectCard: React.FunctionComponent<CardProps> = ({
  project,
  onLearnMore,
}: CardProps) => {
  const webpCardImagePath = makeImagePath(project.cardImage.path, "webp");
  const pngCardImagePath = makeImagePath(project.cardImage.path, "png");

  return (
    <Card square variant="outlined" sx={{ backgroundColor: "#444" }}>
      <AspectRatio ratio="16/9">
        <picture>
          {makePictureSource(webpCardImagePath)}
          {makePictureSource(pngCardImagePath)}
          <CardMedia
            component="img"
            image={pngCardImagePath}
            title={project.cardImage.caption}
          />
        </picture>
      </AspectRatio>
      <CardContent>
        <Typography gutterBottom variant="h6">
          {project.title}
        </Typography>
        <Typography gutterBottom variant="body2">
          {project.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onLearnMore(project)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

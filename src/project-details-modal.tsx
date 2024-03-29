import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactMarkdown from "react-markdown";
import { Project } from "./data";
import { StyledContent, StyledTitle } from "./project-details-modal.styles";
import { sendAnalyticsClickEvent } from "./analytics";
import { SlowLoad } from "./slow-load";

export type ProjectDetailsModalProps = {
  project: Project;
  onClose: () => void;
};

export const ProjectDetailsModal: React.FunctionComponent<
  ProjectDetailsModalProps
> = ({ project, onClose }: ProjectDetailsModalProps) => {
  const theme = useTheme();
  const mediaQuery = theme.breakpoints.down("md");
  const isSmallScreen = useMediaQuery(mediaQuery);
  const isSlowLoad = project.website.includes("onrender.com");

  return (
    <Dialog
      fullScreen={isSmallScreen}
      maxWidth="md"
      fullWidth={true}
      open={true}
      onClose={onClose}
    >
      <DialogTitle>
        <StyledTitle>
          <Typography variant="h5">{project.title}</Typography>
          <IconButton onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </StyledTitle>
      </DialogTitle>
      <DialogContent dividers>
        <StyledContent>
          <Typography variant="h6">Description</Typography>
          <ReactMarkdown>{project.longDescriptionMarkdown}</ReactMarkdown>
          <Typography variant="h6">Technologies</Typography>
          <ul>
            {project.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
          <Typography variant="h6">GitHub Repo</Typography>
          <p>
            <a
              href={project.repoLink}
              onClick={() => {
                sendAnalyticsClickEvent("repo_link_click", project);
              }}
            >
              {project.repoLink}
            </a>
          </p>
          <Typography variant="h6">Deployed Website</Typography>
          <p>
            <a
              href={project.website}
              onClick={() => {
                sendAnalyticsClickEvent("website_link_click", project);
              }}
            >
              {project.website}
            </a>
            {isSlowLoad && <SlowLoad />}
          </p>
          {project.seeAlso?.length && (
            <>
              <Typography variant="h6">See Also</Typography>
              <ul>
                {project.seeAlso.map(({ url, name }, index) => (
                  <li key={index}>
                    <a href={url}>{name}</a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </StyledContent>
      </DialogContent>
    </Dialog>
  );
};

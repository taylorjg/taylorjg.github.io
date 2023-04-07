import { useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./app.styles";
import { ProjectCard } from "./project-card";
import { ProjectDetailsModal } from "./project-details-modal";
import { StyledCardContainer, StyledPageHeader } from "./app.styles";
import { Project } from "./data";
import { Version } from "./version";
import projects from "./data";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const App = () => {
  const [selectedProject, setSelectedProject] = useState<Project>();

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(undefined);
  };

  const onLearnMore = (project: Project) => {
    openModal(project);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Global styles={GlobalStyles} />
      <CssBaseline />
      <StyledPageHeader bgcolor={darkTheme.palette.background.default}>
        <Version />
      </StyledPageHeader>
      <StyledCardContainer>
        {projects.map((project) => (
          <ProjectCard
            key={project.repo}
            project={project}
            onLearnMore={onLearnMore}
          />
        ))}
      </StyledCardContainer>
      {selectedProject && (
        <ProjectDetailsModal project={selectedProject} onClose={closeModal} />
      )}
    </ThemeProvider>
  );
};

export type Project = {
  title: string;
  repo: string;
  repoLink: string;
  website: string;
  technologies: string[];
  shortDescription: string;
  longDescriptionMarkdown: string;
  cardImage: {
    path: string;
    caption: string;
  };
  screenshots?: [
    {
      path: string;
      caption: string;
    }
  ];
  videos?: [
    {
      path: string;
      caption: string;
    }
  ];
};

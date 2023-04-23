export type Project = {
  title: string;
  repo: string;
  repoLink: string;
  website: string;
  seeAlso?: {
    url: string;
    name: string;
  }[];
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

export default {
  title: "Repo Traffic",
  repo: "repo-traffic-react",
  repoLink: "https://github.com/taylorjg/repo-traffic-react",
  website: "https://repo-traffic-react.onrender.com/",
  technologies: [
    "TypeScript",
    "React",
    "react-query",
    "graphql-request",
    "Material UI",
    "Node.js",
    "Express",
    "GitHub REST API",
    "GitHub GraphQL API",
  ],
  shortDescription: "GitHub OAuth App to display repo traffic data",
  longDescriptionMarkdown: `
This little app lists your GitHub repos along with traffic details
(views and clones). It is a
[GitHub OAuth App](https://docs.github.com/en/apps/oauth-apps) - you need to
authorize it to allow access to
your GitHub repos. Once authorized, it maintains the GitHub access token
in an encrypted cookie.
  `,
  cardImage: {
    path: "screenshots/repo-traffic-react/card-image.webp",
    caption: "Repo Traffic screenshot",
  },
};

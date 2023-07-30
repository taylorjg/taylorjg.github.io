export default {
  title: "Basket Case",
  repo: "BasketCase",
  repoLink: "https://github.com/taylorjg/basketcase-react",
  website: "https://taylorjg.github.io/basketcase-react",
  seeAlso: [
    {
      url: "https://github.com/taylorjg/basketcase-serverless",
      name: "Serverless back end",
    },
    {
      url: "https://github.com/taylorjg/BasketCase",
      name: "Original AngularJS 1.x front end",
    },
  ],
  technologies: [
    "JavaScript",
    "React",
    "Vite and Vitest",
    "Cypress",
    "GitHub Actions",
    "Node.js",
    "Elasticsearch",
    "Serverless Framework",
  ],
  shortDescription:
    "Mock online store with faceted navigation built using React, Serverless Framework and Elasticsearch",
  longDescriptionMarkdown: `
A simple mock online store selling washing machines.

This web app features a section on the left hand
side (or a slide out panel on devices with a small screen)
that provides faceted navigation - implemented using Elasticsearch.
It also implements infinite scrolling to load more results and it updates
the browser history as search/filter criteria are changed.

Complete with unit tests, end-to-end tests and CI/CD via GitHub Actions.
  `,
  cardImage: {
    path: "screenshots/basketcase/card-image.webp",
    caption: "Basket Case screenshot",
  },
};

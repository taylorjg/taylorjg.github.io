export default {
  title: "DVLA Viewer",
  repo: "dvla-viewer",
  repoLink: "https://github.com/taylorjg/dvla-viewer",
  website: "https://taylorjg.github.io/dvla-viewer",
  technologies: [
    "Vite",
    "React & JavaScript",
    "Material UI",
    "react-query & axios",
    "Vitest & React Testing Library & Mock Service Worker",
    "Cypress & Cypress Testing Library",
    "GitHub Actions workflows",
    "Serverless Framework & Node.js",
  ],
  shortDescription: "Simple app to lookup car registrations using DVLA API",
  longDescriptionMarkdown: `
This is a small demo React app that doesn't do an awful lot. However, it does have the following features:

* A responsive UI
* A serverless backend
* Unit tests
* End-to-end tests
* A GitHub Actions CI/CD workflow
  `,
  cardImage: {
    path: "screenshots/dvla-viewer/card-image.webp",
    caption: "DVLA Viewer screenshot",
  },
};

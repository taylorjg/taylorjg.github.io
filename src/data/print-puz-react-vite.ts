export default {
  title: "Print Puz",
  repo: "print-puz-react-vite",
  repoLink: "https://github.com/taylorjg/print-puz-react-vite",
  website: "https://taylorjg.github.io/print-puz-react-vite",
  seeAlso: [
    {
      url: "https://github.com/taylorjg/print-puz-serverless",
      name: "Serverless Backend",
    },
  ],
  technologies: [
    "JavaScript",
    "React",
    "React Router 6",
    "Material UI",
    "Vite",
    "Vitest + React Testing Library",
    "Cypress + Cypress Testing Library",
    "GitHub Actions",
    "Serverless Backend",
  ],
  shortDescription:
    "Print the Private Eye crossword in the style of The Daily Telegraph crossword",
  longDescriptionMarkdown: `
If you print the Private Eye crossword page, you gets lots of unwanted surrounding guff.
This little web app allows you to print it as a single page using the styling of The Daily Telegraph crossword.
The frontend uses React/Material UI and the backend comprises three AWS Lambda functions 
which are managed using Serverless Framework.
  `,
  cardImage: {
    path: "screenshots/print-puz-react-vite/card-image.webp",
    caption: "Print Puz screenshot",
  },
};

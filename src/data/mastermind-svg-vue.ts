export default {
  title: "Mastermind",
  repo: "mastermind-svg-vue",
  repoLink: "https://github.com/taylorjg/mastermind-svg-vue",
  website: "https://taylorjg.github.io/mastermind-svg-vue",
  technologies: [
    "JavaScript",
    "Vue.js",
    "Scalable Vector Graphics (SVG)",
    "Web Workers API",
  ],
  shortDescription:
    "Play the game of Mastermind - or solve it automatically using Donald E. Knuth's algorithm",
  longDescriptionMarkdown: `
A little app to play Mastermind. In addition, you can add the "?autosolve"
query parameter to enable autosolving mode which implements
[Donald E. Knuths algorithm](https://en.wikipedia.org/wiki/Mastermind_(board_game)#Worst_case:_Five-guess_algorithm)
to solve the code for you!
  `,
  cardImage: {
    path: "screenshots/mastermind-svg-vue/card-image.webp",
    caption: "Mastermind screenshot",
  },
};

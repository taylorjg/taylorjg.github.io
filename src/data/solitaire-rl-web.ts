export default {
  title: "Peg Solitaire",
  repo: "solitaire-rl-web",
  repoLink: "https://github.com/taylorjg/solitaire-rl-web",
  website: "https://taylorjg.github.io/solitaire-rl-web",
  technologies: [
    "JavaScript",
    "React",
    "TensorFlow.js",
    "Scalable Vector Graphics (SVG)",
  ],
  shortDescription:
    "Use reinforcement learning to find a solution to peg solitaire",
  longDescriptionMarkdown: `
This little app uses reinforcement learning to solve peg solitaire. The app has three views:

* Manual Play - allows you to play a game of peg solitaire manually
* Agent Play - plays a game of peg solitaire using an agent to choose the moves. There are two agents to choose from:
  * Random - moves are chosen randomly
  * Trained - moves are chosen by a pre-trained agent
* Training Mode - uses TensorFlow.js to train an agent (directly in the browser) to play peg solitaire
  `,
  cardImage: {
    path: "screenshots/solitaire-rl-web/card-image.webp",
    caption: "Peg Solitaire screenshot",
  },
};

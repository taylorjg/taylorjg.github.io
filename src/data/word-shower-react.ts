export default {
  title: "Word Shower",
  repo: "word-shower-react",
  repoLink: "https://github.com/taylorjg/word-shower-react",
  website: "https://taylorjg.github.io/word-shower-react",
  seeAlso: [
    {
      url: "https://github.com/luciavelasco/word-shower",
      name: "Lucia Velasco's original repo",
    },
  ],
  technologies: ["JavaScript", "React", "Phaser", "Web Speech API", "Vite"],
  shortDescription:
    "A zen little game where you stare at your screen and come up with words from a transient stream of letters",
  longDescriptionMarkdown: `
After clicking the Start button, a stream of letters fall down the screen.
You then shout out words (with 4 or more letters) as they occur to you and
the app uses speech recognition to process the words. If the word is recognised
and can be spelt using the active letters, the Scrabble value of the word will be added
to your score.

This app is based on [this repo](https://github.com/luciavelasco/word-shower) by
[Lucia Velasco](https://github.com/luciavelasco).
  `,
  cardImage: {
    path: "screenshots/word-shower-react/card-image.webp",
    caption: "Word Shower screenshot",
  },
};

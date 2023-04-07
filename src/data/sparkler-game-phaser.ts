export default {
  title: "Sparkler Game",
  repo: "sparkler-game-phaser",
  repoLink: "https://github.com/taylorjg/sparkler-game-phaser",
  website: "https://taylorjg.github.io/sparkler-game-phaser/",
  technologies: ["TypeScript", "Phaser", "Web Audio API"],
  shortDescription:
    "Recreate Seb Lee-Delisle's sparkler game from the Royal Institution Christmas Lectures 2019 part 2 ",
  longDescriptionMarkdown: `
This is my attempt to recreate Seb Lee-Delisle's interactive sparkler game as
seen in the second of the Royal Institution Christmas lectures with Dr Hannah
Fry on 27 December 2019. The idea is to use the audience noise level to guide a
sparkler between a scrolling sequence of obstacles.
The lecture is available to watch on YouTube [here](https://www.youtube.com/embed/TtisQ9yZ2zo?start=563&end=643).

You can control the game in one of the following ways:

* Using the UP ARROW key
* By clicking/tapping the screen
* By making some noise (after turning on the microphone by clicking the icon in the bottom right corner of the window)
  `,
  cardImage: {
    path: "screenshots/sparkler-game-phaser/card-image.webp",
    caption: "Sparkler Game screenshot",
  },
};

export default {
  title: "Fractals WebGL",
  repo: "FractalsWebGL",
  repoLink: "https://github.com/taylorjg/FractalsWebGL",
  website: "https://taylorjg.github.io/FractalsWebGL",
  seeAlso: [
    {
      url: "https://taylorjg.github.io/FractalsWebGL?mode=manual",
      name: "Manual mode",
    },
  ],
  technologies: ["JavaScript", "WebGL", "Bootstrap"],
  shortDescription: "Playing around with fractals using WebGL",
  longDescriptionMarkdown: `
This project makes fairly basic use of WebGL to calculate each pixel's colour.

In manual mode, keyboard controls let you zoom in and out, change the colour map, switch between
Mandelbrot set and Julia set, increase/decrease the number of iterations,
create and manage bookmarks, etc. On touchscreens, the controls are currently
limited to panning and dragging.

By default, the app runs in automatic mode where a new region is chosen randomly every 10 seconds.
  `,
  cardImage: {
    path: "screenshots/FractalsWebGL/card-image.webp",
    caption: "Fractals WebGL screenshot",
  },
};

export default {
  title: "Shazizzle",
  repo: "shazizzle",
  repoLink: "https://github.com/taylorjg/shazizzle",
  website: "https://shazizzle.onrender.com/",
  technologies: [
    "JavaScript",
    "Web Audio API",
    "PostgreSQL",
    "RxJS (when matching in streaming mode)",
  ],
  shortDescription: "A very basic implementation of Shazam",
  longDescriptionMarkdown: `
After experimenting a bit with the Web Audio API, I then created a very
basic version of Shazam based on
[this paper](https://www.ee.columbia.edu/~dpwe/papers/Wang03-shazam.pdf)
and [this blog post](http://coding-geek.com/how-shazam-works).
There are only 12 tracks in the database!
  `,
  cardImage: {
    path: "screenshots/shazizzle/card-image.webp",
    caption: "Shazizzle screenshot",
  },
};

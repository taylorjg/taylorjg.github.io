export default {
  title: "Sudoku Buster",
  repo: "sudoku-buster-react",
  repoLink: "https://github.com/taylorjg/sudoku-buster-react",
  website: "https://taylorjg.github.io/sudoku-buster-react",
  technologies: [
    "TypeScript",
    "React",
    "OpenCV",
    "C++ Web Assembly",
    "TensorFlow.js",
    "Scalable Vector Graphics (SVG)",
  ],
  shortDescription: "Scan a Sudoku puzzle from a newspaper and solve it",
  longDescriptionMarkdown: `
This little web app uses the camera to scan a Sudoku puzzle from a
newspaper or magazine, solve it and display the solution.

I use OpenCV to find the bounding box of the Sudoku puzzle. Initially,
I used OpenCV.js but it is very large (I got the build of OpenCV.js down
to about 4MB by omitting stuff I wasn't using). Later, I moved this code
to C++ and packaged it as a web assembly. This got it down to about 1MB.
See [this separate project](https://github.com/taylorjg/emscripten-opencv).

In order to recognise the digits/blanks, I used TensorFlow.js to train a
convolutional neural network (CNN) using about 70 images of Sudoku
puzzles from newspapers and magazines.
See [this separate project](https://github.com/taylorjg/sudoku-scanner).

To solve the scanned Sudoku puzzle, I use my implementation of
Donald E. Knuth's Algorithm X.
See [this separate project](https://github.com/taylorjg/dlxlibjs).
  `,
  cardImage: {
    path: "screenshots/sudoku-buster-react/card-image.webp",
    caption: "Sudoku Buster screenshot",
  },
  videoClips: [
    {
      path: "videos/sudoku-buster-react/video-clip.mov",
      caption: "TODO",
    },
  ],
};

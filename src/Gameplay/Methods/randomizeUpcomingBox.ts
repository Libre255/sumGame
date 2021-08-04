import shuffleArray from "./shuffleArray";

const upComingBoxes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function randomizeUpcomingBox() {
  const shuffleArr = shuffleArray(upComingBoxes);
  const grabRandomNumber =
    shuffleArr[Math.floor(Math.random() * shuffleArr.length)];
  return grabRandomNumber;
}

export { randomizeUpcomingBox };

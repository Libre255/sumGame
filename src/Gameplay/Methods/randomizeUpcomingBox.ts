import shuffleArray from "./shuffleArray";

function randomizeUpcomingBox(array: number[]) {
  const shuffleArr = shuffleArray(array);
  const grabRandomNumber =
    shuffleArr[Math.floor(Math.random() * shuffleArr.length)];
  return grabRandomNumber;
}

export { randomizeUpcomingBox };

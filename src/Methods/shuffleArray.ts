const shuffleArray = (array:any[])=>{
  for (let index = array.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * index);
    const temp = array[index];
    array[index] = array[j];
    array[j] = temp;
  }
  return array
}

export default shuffleArray
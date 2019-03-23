const shuffleFunction = function(array) {
  const length = array.length
  for (let i = length -1; i> 0; i--){
    const temp = array[i];
    const random =  Math.floor(Math.random()*i)
    const randomLetter = array[random];
    array[i] = randomLetter;
    array[random] = temp;
  }
  return array
}



module.exports = shuffleFunction;

var forLoop = function(array){
  for (var i = 0; i < 25; i++){
      array.push(`"I am ${i} strange loop${i === 0 ? '' :
's'}."`);
  }
  return array;
}
var whileLoop = function(number){
  while (number >= 1){
    console.log(`${number}`);
    number--;
  }
  return "done";
}
var doWhileLoop = function(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}

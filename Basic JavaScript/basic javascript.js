var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line

  if (strokes === 1) return "Hole-in-one!";
  else if ((strokes - par) <= -2) return 'Eagle';

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
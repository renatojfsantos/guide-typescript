enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM,
}

function moveToFn(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log('Moving to ' + Direction.LEFT);
      break;
    case Direction.RIGHT:
      console.log('Moving right ' + Direction.RIGHT);
      break;
    case Direction.TOP:
      console.log('Moving top ' + Direction.TOP);
      break;
    case Direction.BOTTOM:
      console.log('Moving bottom ' + Direction.BOTTOM);
      break;
    default:
      console.log("I don't know where to go");
  }
}

moveToFn(Direction.BOTTOM);
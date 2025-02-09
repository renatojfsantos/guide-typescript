var Direction;
(function (Direction) {
    Direction[Direction["LEFT"] = 0] = "LEFT";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
    Direction[Direction["TOP"] = 2] = "TOP";
    Direction[Direction["BOTTOM"] = 3] = "BOTTOM";
})(Direction || (Direction = {}));
function moveToFn(direction) {
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

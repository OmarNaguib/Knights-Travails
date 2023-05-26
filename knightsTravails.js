const knightMoves = [
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

function addArrayElements(first, second) {
  return first.map((item, index) => first[index] + second[index]);
}
function makeMove(path, move) {
  return [...path].concat([addArrayElements(path[path.length - 1], move)]);
}

function isValidNumber(number) {
  return number < 8 && number > -1;
}

function isValidSquare(square) {
  return isValidNumber(square[0]) && isValidNumber(square[1]);
}

function isValidPath(path) {
  return isValidSquare(path[path.length - 1]);
}

function getChildren(path) {
  return knightMoves.map(makeMove.bind(null, path)).filter(isValidPath);
}

function knightsWay(initialPosition, targetPosition) {
  const queue = [[initialPosition]];
  while (queue.length > 1) {
    const currentPath = queue.pop();
    if (currentPath[currentPath.length - 1] === targetPosition)
      return currentPath;
    queue.unshift(...getChildren(currentPath));
  }
  return null;
}

// knightsWay([0, 0], [1, 2]);

console.log(addArrayElements([-1, 2], [-1, 2]));
console.log(getChildren([[4, 4]]));
console.log(
  getChildren([
    [4, 4],
    [5, 6],
  ])
);

console.log(
  isValidPath([
    [4, 4],
    [5, 6],
    [6, 7],
  ])
);
console.log(
  isValidPath([
    [4, 4],
    [5, 6],
    [-1, -1],
  ])
);

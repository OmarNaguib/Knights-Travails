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

function arrayEquals(first, second) {
  return JSON.stringify(first) === JSON.stringify(second);
}

function knightsWay(initialPosition, targetPosition) {
  const queue = [[initialPosition]];
  while (queue.length >= 1) {
    const currentPath = queue.pop();
    if (arrayEquals(currentPath[currentPath.length - 1], targetPosition))
      return currentPath;
    queue.unshift(...getChildren(currentPath));
  }
  return null;
}

function printWay(initialPosition, targetPosition) {
  const way = knightsWay(initialPosition, targetPosition);
  let string = `You made it in ${way.length} moves!  Here's your path:`;
  way.forEach((list) => {
    string += `
    ${list}`;
  });
  console.log(string);
}

console.log(knightsWay([0, 0], [1, 2]));
console.log(knightsWay([0, 0], [3, 3]));
console.log(knightsWay([3, 3], [0, 0]));
console.log(knightsWay([3, 3], [4, 3]));
printWay([3, 3], [4, 3]);

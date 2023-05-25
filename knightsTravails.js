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
function getChildren(path) {
  return knightMoves.map((move) => {
    const newPath = [...path];
    newPath.push(newPath[-1]);
  });
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

function getNextPaths() {}
function knightsWay(initialPosition, targetPosition) {
  const queue = [[initialPosition]];
  while (queue.length > 1) {
    const currentPath = queue.pop();
    if (currentPath[currentPath.length - 1] === targetPosition)
      return currentPath;
    queue.unshift(...getNextPaths(currentPath));
  }
  return null;
}

knightsWay([0, 0], [1, 2]);

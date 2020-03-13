function orangesRotting (grid) {
  let queue = [],
    minutes = 0,
    freshOranges = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        queue.push(i, j);
      }
      if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }
  while (freshOranges && queue.length) {
    let newQueue = [];
    console.log(queue)
    while (queue.length) {
      let rottenOranges = queue.shift();
      console.log(rottenOranges);
      let newRottens = infectOthers(grid, rottenOranges[0], rottenOranges[1], newQueue);
      freshOranges -= newRottens;

    }
    minutes++;
    queue = newQueue;
  }
    if (freshOranges !== 0) {
      return -1;
    }

  return minutes;
}

function infectOthers (grid, i, j, queue) {
  let infected = 0;
  console.log(i,j)
  if (grid[i - 1][j] === 1) {
    grid[i - 1][j]++;
    queue.push(i - 1, j);
    infected++;
  }
  if (grid[i][j - 1] === 1) {
    grid[i][j - 1]++;
    queue.push(i, j - 1);
    infected++;
  }
  if (grid[i + 1][j] === 1) {
    grid[i + 1][j]++;
    queue.push(i + 1, j);
    infected++;
  }
  if (grid[i][j + 1] === 1) {
    grid[i][j + 1]++;
    queue.push(i, j + 1);
    infected++;
  }
  return infected;
}
console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
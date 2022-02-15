function matrixpath(sr, sc, dr, dc) {
  if (sr == dr && sc == dc) return [""];
  let paths = [];
  //vertical move
  if (sr < dr) {
    let verticalmove = matrixpath(sr + 1, sc, dr, dc);
    paths = [...paths, ...verticalmove.map((item) => "v" + item)];
  }
  // horizontal move
  if (sc < dc) {
    let horizontalmove = matrixpath(sr, sc + 1, dr, dc);
    paths = [...paths, ...horizontalmove.map((item) => "h" + item)];
  }

  return paths;
}

console.log(matrixpath(0,0,2,2));
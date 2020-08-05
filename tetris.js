document.addEventListener("DOMContentLoaded", () => {
  // total number of divs
  const count = 200;

  // grab the grid id
  const grid = document.getElementById("grid");

  // width
  const width = 10;

  // grabbing the score span tag
  const score = document.querySelectorAll("#score");

  // grabbing the start-button
  const startButton = document.querySelectorAll("#start-button");

  // genereates 200 divs
  for (let i = 0; i < count; i++) {
    // create div element
    const div = document.createElement("div");

    div.innerHTML = i;

    // append child to grid
    grid.appendChild(div);
  }

  // grabbing div and storing it in square variable
  const square = Array.from(document.querySelectorAll("#grid div"));
  console.log(square);

  //The Shapes
  const lShape = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2],
  ];

  const zShape = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
  ];

  const tShape = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1],
  ];

  const oShape = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];

  const iShape = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];

  // grab all the shapes and store them into a variable
  const tetrisShapes = [lShape, zShape, tShape, oShape, iShape];
  console.log("All my shapes:", tetrisShapes);

  let currentPosition = 0;

  //  select random shape in first rotation
  const random = Math.floor(Math.random() * tetrisShapes.length);
  console.log("Random shape number", random);

  let current = tetrisShapes[random][currentPosition];
  console.log("Current shape:", current);

  // drawing first rotation of the first tetris shape
  const draw = () => {
    current.forEach((index) => {
      square[currentPosition + index].classList.add("tetrisShape");
    });
  };

  // drawing first rotation of the first tetris shape
  const unDraw = () => {
    current.forEach((index) => {
      square[currentPosition + index].classList.remove("tetrisShape");
    });
  };
});

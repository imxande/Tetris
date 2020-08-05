document.addEventListener("DOMContentLoaded", () => {
  // total number of divs
  const count = 200;

  // grab the grid id
  const grid = document.getElementById("grid");

  // width
  const width = 10;

  // genereates 200 divs
  for (let i = 0; i < count; i++) {
    // create div element
    const div = document.createElement("div");

    // append child to grid
    grid.appendChild(div);
  }

  // grabbing div and storing it in square variable
  const square = document.querySelectorAll("#grid div");
  console.log(square);
});

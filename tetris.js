document.addEventListener("DOMContentLoaded", () => {
  // total number of divs
  const count = 200;

  // genereates 200 divs
  for (let i = 0; i < count; i++) {
    // create div element
    const div = document.createElement("div");

    // sanity check
    div.innerHTML = "Hello, I am a div!";

    // grab the grid id
    const grid = document.getElementById("grid");

    // append child to grid
    grid.appendChild(div);
  }
});

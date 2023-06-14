//window.onload=()=>{
  function addRows(){
  // var getLast = document.querySelectorAll(".grid");
  // for(let i=getLast.length;i<getLast.length+6<i++){
  //   var gridContainer = document.getElementById("grid-container");
  // var newRow = document.createElement("div");
  // newRow.classList.add("cell");
  // gridContainer.appendChild(newRow);
  // }
  var grid = document.getElementById("grid-container");
  var cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);
  }

  function remove(){
    var grid = document.getElementById("grid-container");
    var lastChild = grid.lastElementChild;
    lastChild.remove();
 }
//}
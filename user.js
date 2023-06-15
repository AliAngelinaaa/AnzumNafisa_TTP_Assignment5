//set a global variable for color
  let selectedColor;

  function addRows(){
  var grid = document.getElementById("container");
  var cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.backgroundColor="white";
  grid.appendChild(cell);
  }

  function remove(){
    var grid = document.getElementById("container");
    var cell = grid.lastElementChild;
    cell.remove();
 }
 function clearColor(){
  var cell = document.querySelectorAll(".cell");
   cell.forEach((ele)=>{
    ele.style.backgroundColor = "white";
  });
 }
 function changeColor(){
  var cell = document.querySelectorAll(".cell");
  cell.forEach((ele)=>{
    ele.style.backgroundColor = selectedColor;
  });
 }
 function fillUncolored(){
  var cell = document.querySelectorAll(".cell");
  cell.forEach((ele)=>{
    console.log(ele.style.backgroundColor);
    if(ele.style.backgroundColor === 'white'){
    ele.style.backgroundColor = selectedColor;
    }
  });
 }

function pickColor(){
  const paint = document.getElementById("colorSelect");
  selectedColor = paint.value;
  paint.addEventListener("change", function() {
    selectedColor = paint.value;
  });
}

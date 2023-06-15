

    //set a global variable for color
  let selectedColor;

  let table = document.getElementById("grid");

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
// this method will add a column to the table by first iterating through it using table.rows.length so we know the size and then it will use .insertcell to the row. So it ends up adding a new column
 function addCollumn() {
  for (i = 0; i < table.rows.length; i++) {
     table.rows[i].insertCell();
  }
}
// this method will remove the last column and it will do so by checking first if there are any columns already. Then it will iterate through the columns until it reaches the last one and will delete that last cell.
function removeCollumn() {
  if (table.rows.length > 0) {
    let column = table.rows[0].cells.length;
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(column- 1);
        }
      }
  }   



//restore the color of every cell to inital color
 function clearColor(){
  var cell = document.querySelectorAll(".cell");
   cell.forEach((ele)=>{
    ele.style.backgroundColor = "white";
  });
 }

//change the color of every cell to the selected color
 function changeColor(){
  var cell = document.querySelectorAll(".cell");
  cell.forEach((ele)=>{
    ele.style.backgroundColor = selectedColor;
  });
 }

//fill the uncolored cell to the selected color
 function fillUncolored(){
  var cell = document.querySelectorAll(".cell");
  cell.forEach((ele)=>{
    console.log(ele.style.backgroundColor);
    if(ele.style.backgroundColor === 'white'){
    ele.style.backgroundColor = selectedColor;
    }
  });
 }

//change to the color selected by user
function pickColor(){
  const paint = document.getElementById("colorSelect");
  selectedColor = paint.value;
  paint.addEventListener("change", function() {
    selectedColor = paint.value;
  });
}
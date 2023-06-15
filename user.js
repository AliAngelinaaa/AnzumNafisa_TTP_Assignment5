

    //set a global variable for color
    let selectedColor;
  
    //This method will add a row to the table, first check if there is an existing number of columns, 
    //if yes, then add a row and add the number of cells according to the number of columns.
    //If false, then add a row and change the number of columns to 1.
    function addRows(){
      var table = document.getElementById("grid");
      let newRow = table.insertRow();
      if(table.rows[0].cells.length>0){
        for(let i=0;i<table.rows[0].cells.length;i++){
          let cell = newRow.insertCell(i);
          cell.classList.add("cell");
          cell.style.backgroundColor="white";
        }
      }else{
        let cell = newRow.insertCell(0);
        cell.classList.add("cell");
        cell.style.backgroundColor="white";
      }
    }

    //this method will remove the last row of the table
    function remove(){
      var table = document.getElementById("grid");
      var lastRow = table.rows[table.rows.length-1];
      lastRow.remove();
   }

  // this method will add a column to the table by first iterating through it using table.rows.length so we know the size and then it will use .insertcell to the row. So it ends up adding a new column
   function addCollumn() {
    let table = document.getElementById("grid");
    console.log(table.rows.length);
    for (let i = 0; i < table.rows.length; i++) {
      let cell = table.rows[i].insertCell();
      cell.classList.add("cell");
      cell.style.backgroundColor="white";
    }
  }
  // this method will remove the last column and it will do so by checking first if there are any columns already. Then it will iterate through the columns until it reaches the last one and will delete that last cell.
  function removeCollumn() {
    let table = document.getElementById("grid");
    if (table.rows.length > 0) {
      let column = table.rows[0].cells.length;
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(column- 1);
          }
        }
    }   
  
  //This method will restore the color of every cell to inital color by using a for each loop that iterate through each cell
   function clearColor(){
    var cell = document.querySelectorAll(".cell");
     cell.forEach((ele)=>{
      ele.style.backgroundColor = "white";
    });
   }
  
  //This method will change the color of every cell to the selected color, which using a for each loop that  iterate through each cell
  //and set to selected color
   function changeColor(){
    var cell = document.querySelectorAll(".cell");
    cell.forEach((ele)=>{
      ele.style.backgroundColor = selectedColor;
    });
   }
  
  //This method will fill the uncolored cell to the selected color, which using a for each loop that iterate through each cell
  //if a white color cell is detected then change it to current selected color
   function fillUncolored(){
    var cell = document.querySelectorAll(".cell");
    cell.forEach((ele)=>{
      console.log(ele.style.backgroundColor);
      if(ele.style.backgroundColor === 'white'){
      ele.style.backgroundColor = selectedColor;
      }
    });
   }
  
  //This method will change to the color selected by user, when user making change on select element the addEventListener will be excuted 
  //and assign the color to the global variable selectedColor
  function pickColor(){
    const paint = document.getElementById("colorSelect");
    selectedColor = paint.value;
    paint.addEventListener("change", function() {
      selectedColor = paint.value;
    });
  }
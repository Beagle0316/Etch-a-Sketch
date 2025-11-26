function deleteCanvas(numberOfCells){
    const container = document.querySelector(".container");
    
    for (let i = 0; i < numberOfCells; i++){
        const row = document.querySelector(".containerTwo");
        container.removeChild(row);
    }

}

function clearCanvas(){
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
}
function squareDivs(numberOfCells){
    const container = document.querySelector(".container");
    
    for (let i = 0; i < numberOfCells; i++){
        const containerTwo = document.createElement("div");
        containerTwo.classList.add("containerTwo");
        containerTwo.style.height = (850 / (numberOfCells)) + "px";

        for (let j = 0; j < (numberOfCells); j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = (850 / (numberOfCells)) + "px";
            cell.style.height =(850 / (numberOfCells)) + "px";
            containerTwo.appendChild(cell);
        }
            
                
        container.appendChild(containerTwo);

    }

    hover();
    
}
    

function hover(){
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) =>{
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        });
    });
}

function main(){
    const button = document.querySelector(".brushSize");
    const buttonTwo = document.querySelector(".clearCanvas");

    button.addEventListener("click", () =>{
        let newCells = prompt("Enter Pen Size (Larger Number = Smaller Pen Size) (Maximum is 100) (All marks will be cleared):");

        if (newCells !== null){
            if (newCells <= 0){
                alert("Invalid input");
            }
            else if (newCells > 100){
                alert ("Too large input");
            }
            else{
                deleteCanvas (numberOfCells);
                numberOfCells = newCells;
                squareDivs (numberOfCells);
            }
        }
    });

    buttonTwo.addEventListener("click", () =>{
        clearCanvas();
    });

}

// Start of Program
let numberOfCells = 16;
squareDivs(numberOfCells);
main();

function squareDivs(numberOfCells){
    const container = document.querySelector(".container");
    
    for (let i = 0; i < numberOfCells; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
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

    button.addEventListener("click", () =>{
        let newCells = prompt("Enter number of cells:");

        if (newCells !== null){
            if (newCells <= 0){
                alert("Invalid input");
            }
        }
    });

}

// Start of Program
let numberOfCells = 272;
squareDivs(numberOfCells);
main();

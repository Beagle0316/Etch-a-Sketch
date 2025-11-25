function squareDivs(){
    const container = document.querySelector(".container");
    
    for (let i = 0; i < 272; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
    
}

function hover(){
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) =>{
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        });
    });
}

squareDivs();
hover();
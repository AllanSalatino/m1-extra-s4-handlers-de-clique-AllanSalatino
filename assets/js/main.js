const color_box = document.getElementById("color_box");
            
const gray_button = document.getElementById("gray_button");
        
gray_button.addEventListener("click", () => {
    color_box.className = "gray";
})
        
const blue_button = document.getElementById("blue_button");

blue_button.addEventListener("click", () => {
    color_box.className = "blue";
})

//TODO 1

const pink_button = document.getElementById("pink_button");

pink_button.addEventListener("click", () => {
    color_box.className = "pink"
})



let count = 0;

const counter_button = document.getElementById("counter_button");

const countspan = document.getElementById("countspan");
            
counter_button.addEventListener("click", () => {
    // TODO 2

    countspan.innerText = `${(count += 1)}` 
})




const even_or_odd_button = document.getElementById("even_or_odd_button");

even_or_odd_button.addEventListener("click", () => {
    // TODO 3
    if(count % 2 === 0){
        alert("O numero do contador é par")
    }
    else{
        alert("O numero do contador é impar")
    }
})
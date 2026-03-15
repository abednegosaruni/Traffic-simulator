let red = document.querySelector(".red")
let green = document.querySelector(".green")
let yellow = document.querySelector(".yellow")

let car = document.querySelector(".car")

let move = true
let position = 0
function traffic(){
    //RED
red.style.background = "red"
yellow.style.background = "gray"
green.style.background = "gray"
move = false

setTimeout(function(){

//GREEN
red.style.background = "gray"
green.style.background = "green"
move = true;

setTimeout(function(){

//YELLOW
yellow.style.background = "yellow"
green.style.background = "gray"
move = false

},2000)
},2000)

}

traffic();
setInterval(traffic,6000);

function moveCar(){
    if(move){
        position += 2
        car.style.left = position + "px"
    }
    requestAnimationFrame(moveCar);
}

moveCar();
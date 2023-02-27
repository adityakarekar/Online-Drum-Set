//used to calucate the number of drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length

//this for loop is used to add the event listner to all of our drum buttons
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //alert("I got clicked!");
        // console.log(this.style.color="white");
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);// allows to generate sound when we click the button
        buttonPressed(buttonInnerHtml);
       

    });
}

//Section for detecting key presses
document.addEventListener("keydown", function(event){
    //alert("key pressed");
    //console.log(event);
    makeSound(event.key);
    buttonPressed(event.key);
})


function makeSound(key)
{
    switch (key) {
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
       
       
        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;


        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;


        case "k":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;
        

        case "l":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            //console.log(buttonInnerHtml);
            alert("you can only press keys 'a','s','d','w' 'j','k','l'.");
            break;
    }
}
//to add the button pressed Animation

function buttonPressed(key)
{
    document.querySelector("." + key);
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    },100);

}




//Demo of higher order functions
//basically its a function that takes other funtion as an input parameter
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}


function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function devide(num1, num2) {
    return num1 / num2;
}




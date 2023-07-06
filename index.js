//alert("Hello! Welcome to the DICE GAME");


// For Dice 1:::
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1);     // it gives the range from 0 to 5;
randomNumber1 = randomNumber1 + 1;      // Now the range becomes 1 to 6;

var randomImg1 = "images/dice"+randomNumber1+".png";

//document.querySelector(".dice .img1").attributes;     --> for getting the attribute list
//document.querySelector(".dice .img1").getAttribute("scr");         --> for gettinh the value in scr of image tag

//For changing the image source value so that random image is generated each time;
document.querySelector(".dice .img1").setAttribute("src",randomImg1);



// For dice 2:::
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2);     
randomNumber2 = randomNumber2 + 1;   

var randomImg2 = "images/dice"+randomNumber2+".png";

document.querySelector(".dice .img2").setAttribute("src",randomImg2);


// Function for returning the String of the winner;
function winner(randomNumber1,randomNumber2){
    if(randomNumber1>randomNumber2){
        return "🚩 Player 1 Wins!!";
    }
    else if(randomNumber1<randomNumber2){
        return "Player 2 Wins 🚩!!";
    }
    else{
        return "Draw!!";
    }
}

// Now using DOM to manipulate the H1 tag;
document.querySelector(".container h1").innerHTML = winner(randomNumber1,randomNumber2);
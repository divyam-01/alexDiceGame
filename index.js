var randomNumber1 = Math.floor((Math.random()*6)+1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "./images/" + randomDiceImage;

var Image1 = document.querySelectorAll("img") [0];

Image1.setAttribute("src", randomImageSource);



//for image 2>>>>>>>>>

var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "./images/" + randomDiceImage2;

document.querySelectorAll("img") [1].setAttribute("src", randomImageSource2);



// for declaring winner>>>>>>

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Annie Wins👍";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Alex Wins 👌";
}

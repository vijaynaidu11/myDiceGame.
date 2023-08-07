var randomNumber1 = Math.round((Math.random()*5)+1);
var randomDice = "Dice"+randomNumber1+".png";
var randomSource = "images/"+randomDice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource);

var randomNumber2 = Math.round((Math.random()*5)+1);
var randomDice2 = "Dice"+randomNumber2+".png";
var randomSource2 = "images/"+randomDice2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSource2);

var result = document.querySelectorAll("h1")[0];
if(randomNumber1 > randomNumber2)
{
result.innerHTML = "Player 1 is win!!";
}else if(randomNumber1 < randomNumber2)
{
    result.innerHTML = "Player 2 is win!!";
}else {
    result.innerHTML = "Both Tie!!";
}
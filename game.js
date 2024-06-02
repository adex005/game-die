var numberofdie1 = Math.floor(Math.random()*6)+1;
var randomimage1 = "./die" + numberofdie1 + ".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimage1);


var numberofdie2 = Math.floor(Math.random()*6)+1;
var randomimage2 = "./die" + numberofdie2 + ".png";
var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomimage2);



if (numberofdie1 > numberofdie2){
    document.querySelector("h2").textContent = "😂 Player 1 Won!"
}

else if (numberofdie1 < numberofdie2){
    document.querySelector("h2").textContent = "😹 Player 2 Won!"
}
else {
     document.querySelector("h2"). textContent = "🙃 It's a Draw!"

}



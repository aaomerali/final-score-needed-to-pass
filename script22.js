var Score = document.querySelector(".score");
const goBtn= document.querySelector(".goBtn");
var finalScore= document.querySelector(".finalScore");




goBtn.addEventListener('click' , function GetFinalScore(){


    var MidScore = Score.value;

    var neededScore = Math.ceil(((MidScore * 0.4 - 50 ) * (-1)) / 0.6) ;


    finalScore.style.transform = 'scale(1.2)'; // Reset to original size
    

    setTimeout(function() {
        finalScore.innerHTML = neededScore;
        finalScore.style.transform = 'scale(1)'; // Reset to original size
    }, 200);

}) 
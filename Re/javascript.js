/*Functions*/
//Fading fucntion to fade elements
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
//Fading fucntion to unfade elements
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.04;
    }, 10);
}
/*Index*/
//Problem
var problemEl = document.getElementById("p-head");
var problemMain = document.getElementById("p-main");
var countProblem = 0
var problemClick = function(){
	if(countProblem === 0){
		problemMain.textContent = "Our invention helps kids who are having trouble with their school subjects. It will help people study in a fun way; a trivia game! That way, it can promote them to having fun, and studying at the same time! With this game, People who aren't really into studying can study and have fun at the same time, with some competitiveness on the side.";
		unfade(problemMain);
		countProblem += 1;
	}
	else if(countProblem === 1){
		fade(problemMain);
		countProblem += 1;
	}
	else if(countProblem === 2){
		unfade(problemMain);
		countProblem -= 1;
	}
};
problemEl.addEventListener("click", problemClick);
//HIW
var hiwEl = document.getElementById("hiw-head");
var hiwMain = document.getElementById("hiw-main");
var countHiw = 0;
var hiwClick = function(){
	if(countHiw === 0){
        hiwMain.textContent = "We are making a trail-like path with dice to use as movement choice, and different spots have different types of questions,making getting different questions very easy. Using game currency, it can make the game exciting and competitive. And the first person to get a certain amount of points wins the game.";
        unfade(hiwMain);
        countHiw += 1;
    }
    else if(countHiw === 1){
        fade(hiwMain);
        countHiw += 1;
    }
    else if(countHiw === 2){
		unfade(hiwMain);
		countHiw -= 1;
    }
};
hiwEl.addEventListener("click", hiwClick);

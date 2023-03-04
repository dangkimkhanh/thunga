var greetings = document.getElementsByClassName("greeting");
var currentGreeting = 0;
var readmore = document.getElementById("readmore");
var readagain = document.getElementById("readagain");
var agree = document.getElementById("agree");

readmore.addEventListener("click", function(){
	currentGreeting++;
	if (currentGreeting < greetings.length) {
		greetings[currentGreeting-1].style.display = "none";
		greetings[currentGreeting].style.display = "block";
	} 
	if (currentGreeting == greetings.length-1) {
		readmore.style.display = "none";
		agree.style.display = "inline-block";
		readagain.style.display = "inline-block";
	}
});

readagain.addEventListener("click", function(){
	currentGreeting--;
	if (currentGreeting >= 0) {
		greetings[currentGreeting+1].style.display = "none";
		greetings[currentGreeting].style.display = "block";
	}
	if (currentGreeting == 0) {
		readagain.style.display = "none";
		agree.style.display = "none";
		readmore.style.display = "inline-block";
	}
});

agree.addEventListener("click", function(){
	window.location.href = "newpage.html";
});

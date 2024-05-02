var titles = ["K", "K E", "K E M", "K E M O", "K E M O N", "K E M O N", "K E M O N I", "K E M O N I A", "K E M O N I A N"];
var currentIndex = 0;

function changeTitle(){
    document.title = titles[currentIndex];
    currentIndex = (currentIndex + 1) % titles.length;
}

setInterval(changeTitle, 500); // Adjust the interval as needed

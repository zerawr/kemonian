var titles = ["K", "K E", "K E M", "K E M O", "K E M O N", "K E M O N O"];
var currentIndex = 0;

function changeTitle(){
    document.title = titles[currentIndex];
    currentIndex = (currentIndex + 1) % titles.length;
}

setInterval(changeTitle, 500); // Adjust the interval as needed

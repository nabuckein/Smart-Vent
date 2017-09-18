var randomTemp1 = 0;

setInterval(function(){
	randomTemp1 = Math.floor(Math.random([0,255])*255);
	var element = document.getElementById("room2");
	element.style.backgroundColor = "rgb(10,240," + randomTemp1 + ")";
},2000);
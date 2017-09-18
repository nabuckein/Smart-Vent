var randomTemp1 = 0;
setInterval(function(){
	randomTemp1 = Math.floor(Math.random([55,85])*30) + 55;
	document.getElementById("tempReading2").innerHTML = randomTemp1;
},2000)
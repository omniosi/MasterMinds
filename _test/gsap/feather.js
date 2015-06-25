var money = document.getElementById("money");
var egg = document.getElementById("egg");
var drop = document.getElementsByClassName("drop")[0];
var close = document.getElementById("close");
var rain;
var dup;
var dropd;
var last;
var most;
var n;

// pour();
egg.onclick = pour;
close.onclick = cleanup;

function pour(){
	stoprain();
	money.style.display = "block";
	// rain = window.setInterval(clones, 33);
	// rain = window.setInterval(clones, getRandomInt(33,1000));
	rain = window.setInterval(clones, getRandomInt(11,33));
	// rain();
	setTimeout(stoprain, 3000);
	// stoprain();
};

function stoprain() {
	window.clearInterval(rain);
}

function getRandomInt(min, max){
	return Math.floor( Math.random() * ( max-min ) ) + min;
}

function clones(){
 	dup = drop.cloneNode(true);
 	dup.style.left = getRandomInt(1,100) + "%";
 	money.appendChild(dup);
	console.log("bill added.");

	function completeHandler(){
		last = document.getElementsByClassName("drop")[1];
		money.removeChild(last);
		console.log("bill removed!");
	}

	// TweenMax.to(dup,7, {top:"120%"});
	TweenMax.to(dup, getRandomInt(4,7), {top:"120%",onComplete:completeHandler});
	// var t1 = new TimelineMax({repeat:6});
	var t1 = new TimelineMax({repeat: getRandomInt(2,10)});
	// t1.to(dup,1,{left:"-=200",rotation:"+=130"}).to(dup,1,{left:"+=200",rotation:"-=130"});
	// t1.to(dup,1,{left:"-="+getRandomInt(0,500),rotation:"+="+getRandomInt(0,180)})
		// .to(dup,1,{left:"+="+getRandomInt(0,500),rotation:"-="+getRandomInt(0,180)});
	t1.to(dup, getRandomInt(1,3),{left:"-="+getRandomInt(0,500),rotation:"+="+getRandomInt(0,180)})
		.to(dup, getRandomInt(1,3),{left:"+="+getRandomInt(0,500),rotation:"-="+getRandomInt(0,180)});
	var t2 = new TimelineMax({repeat: getRandomInt(2,10)});
	t2.to(dup,getRandomInt(0.25,1),{height:0})
		.to(dup,getRandomInt(0.25,1),{height:30})
}

function cleanup(){
	most = document.getElementsByClassName("drop");
	for (var i=1;i<most.length;i++){
		money.removeChild(most[i]);
		console.log("all bills removed!");
	}
	money.style.display = "none";
	stoprain();
}
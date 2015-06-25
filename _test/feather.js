var money = document.getElementById("money");
var egg = document.getElementById("egg");
var drop = document.getElementsByClassName("drop")[0];
var close = document.getElementById("close");
var rain;
var dup;
var dropd;
var n;

// pour();
egg.onclick = pour;
close.onclick = cleanup;

function pour(){
	// if( money.style.display === "none" ){
		// cleanup();
	// }
	money.style.display = "block";
	// cleanup();
	/*money.appendChild('<div class="drop"><div class="sway"><div class="image"></div></div></div>');*/
	rain = window.setInterval(clones, 33);
	// rain();
	setTimeout(stoprain, 3000);
	// stoprain();
};

function stoprain() {
	window.clearInterval(rain);
	// setTimeout(cleanup,6000);
	// setTimeout(cleanup,14000);
}

function getRandomInt(min, max){
	return Math.floor( Math.random() * ( max-min ) ) + min;
}

function clones(){
  dup = drop.cloneNode(true);
  dup.style.left = getRandomInt(1,100) + "%";
  money.appendChild(dup);
	console.log("a new bill fired.");
}

function cleanup(){
	// dropd = document.getElementsByClassName("drop");
	dropd = money.getElementsByClassName("drop");

	for ( n=1; n < dropd.length; n++ ) {
		// if ( dropd[n].style.top > document.clientHeight ) {
			// dropd[n] remove from document
			// document.body.removeChild(dropd[n]);
			money.removeChild(dropd[n]);
		// }
		console.log("cleaned", n);
	}
	cleanup();
	money.style.display = "none";

}
// setInterval(cleanup, 7000);

// if money container display none, then cleanup
// if(money.style.display==="none"){
	// cleanup();
// }

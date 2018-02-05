var ctx = null;
var spriteList = [];
var img = new Image();


window.onload = function () {
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
    map = (Math.floor(Math.random() * 3) + 1);
    img.src = "images/battle" + map +  ".png";
    if(img.complete) {
        ctx.drawImage(img,0,0,1136,640);
        console.log("allo")
    }
	spriteList.push(new Boss("boss"));
    tick();
}

function tick() {
    if(img.complete) {
        ctx.drawImage(img,0,0,1136,640);
        console.log("allo")
    }
    for (var i = 0; i < spriteList.length; i++) {
        spriteList[i].tick();
    }
    window.requestAnimationFrame(tick);
}
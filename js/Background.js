class Background {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    tick() {
        var img = new Image();
        img.src = "images/battle" + (Math.floor(Math.random() * 3) + 1) +  ".png";
        // Affiche seulement si téléchargée au complet
        if (img.complete) {
            // x,y,newWidth,newHeight
            ctx.drawImage(img, this.x, this.y);
        }

    }
}
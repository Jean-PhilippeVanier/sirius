class FireBall {
    constructor(type, x, y) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.speed = 14;
        this.random = randomIntFromInterval(-2, 2);
        if (this.type == "Special2") {
            this.sprite = new Animation("images/ball.png", 7, 1, 20, true, 3);
            this.sprite.changeMinMaxInterval(0, 7);
            this.sprite.setFlipped(true);
        }
        else
        if(this.type == "blade"){
            this.sprite = new Animation("images/Blade.png", 8, 1, 5, true, 2);
            this.sprite.changeMinMaxInterval(0, 8);
            this.sprite.setFlipped(true);
        }
        else
        if(this.type == "SpecialBlade"){
            this.sprite = new Animation("images/Blade.png", 8, 1, 5, true, 1);
            this.sprite.changeMinMaxInterval(0, 8);
            this.sprite.setFlipped(true);
        }
        else{
            this.sprite = new Animation("images/ball.png", 7, 1, 20, true, 1.5);
            this.sprite.changeMinMaxInterval(0, 7);
            this.sprite.setFlipped(true);
        }
    }
    tick() {
        
        this.x -= this.speed;
        this.y += this.random
        var alive = this.x > 0;
        this.sprite.tick(ctx, this.x, this.y);
        return alive;

    }
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
class Explosion {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.z = 800;
        this.speed = 9;
        this.sprite = new Animation("images/Explosion.png", 15, 1, 100, true, 5);
        this.sprite.changeMinMaxInterval(0, 15);
        this.sprite.setFlipped(true);
    }
    tick() {
        this.z -= this.speed;
        var alive = this.z > 0;
        this.sprite.tick(ctx, this.x, this.y);
        return alive;

    }
}
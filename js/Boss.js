class Boss {
    constructor(id) {
        this.boss = 0;
        this.boss = randomIntFromInterval(1,4);
        console.log(this.boss);
        if(this.boss == 1){
            this.x = 250;
            this.y = 200;     
            this.sprite = new Animation("images/Boss1.png" , 2, 1, 40, true, 1.2);
            this.sprite.changeMinMaxInterval(0, 2);
            this.sprite.setFlipped(false);
        }
        if(this.boss == 2){
            this.x = 250;
            this.y = 280;
            this.sprite = new Animation("images/Boss2.png" , 3, 1, 150, true, 1.5);
            this.sprite.changeMinMaxInterval(0, 3);
            this.sprite.setFlipped(false);
        }
        if(this.boss == 3){
            this.x = 250;
            this.y = 200;
            this.sprite = new Animation("images/Boss3.png" , 6, 1, 100, true, 1.3);
            this.sprite.changeMinMaxInterval(0, 6);
            this.sprite.setFlipped(true);
        }
        if(this.boss == 4){
            this.x = 250;
            this.y = 290;
            this.sprite = new Animation("images/Boss4.png" , 5, 1, 150, true, 3);
            this.sprite.changeMinMaxInterval(0, 4);
            this.sprite.setFlipped(false);
        }
        
    }
    tick() {
        this.sprite.tick(ctx, this.x, this.y);
    }

}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
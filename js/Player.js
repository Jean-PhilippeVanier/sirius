class Player {
	constructor( id, type) {
		this.id = id;
		this.type = type;
		this.speed = 25;
		if (this.id == 0) {
			this.x = 750;
			this.y = 200;
		}
		if (this.id == 1) {
			this.x = 800;
			this.y = 250;
		}
		if (this.id == 2) {
			this.x = 750;
			this.y = 300;
		}
		if (this.id == 3) {
			this.x = 800;
			this.y = 350;
		}
		if (this.type == "Melee") {
			this.sprite = new Animation("images/player1.png", 6, 1, 100, true, 2);
			this.sprite.changeMinMaxInterval(0, 6);
			this.sprite.setFlipped(true);
		}
		if (this.type == "Range") {
			this.sprite = new Animation("images/player3.png", 8, 1, 100, true, 2);
			this.sprite.changeMinMaxInterval(0, 8);
			this.sprite.setFlipped(true);
		}
		if (this.type == "Heal") {
			this.sprite = new Animation("images/player2.png", 8, 1, 100, true, 2);
			this.sprite.changeMinMaxInterval(0, 8);
			this.sprite.setFlipped(false);
		}
		if (this.type == "Magic") {
			this.sprite = new Animation("images/player4.png", 10, 1, 100, true, 2);
			this.sprite.changeMinMaxInterval(0, 10);
			this.sprite.setFlipped(false);
		}
	}
	tick() {
		this.sprite.tick(ctx, this.x, this.y);
	}
	setAttack() {
		if (this.type == "Melee") {
			this.sprite = new Animation("images/player1A2.png", 15, 1, 50, true, 2);
			this.sprite.changeMinMaxInterval(0, 15);
			this.sprite.setFlipped(true);
		}
		if (this.type == "Range") {
			this.sprite = new Animation("images/player3A.png", 7, 1, 110, true, 2);
			this.sprite.changeMinMaxInterval(0, 7);
			this.sprite.setFlipped(true);
		}
		if (this.type == "Heal") {
			this.sprite = new Animation("images/player2A.png", 7, 1, 50, true, 2);
			this.sprite.changeMinMaxInterval(0, 7);
			this.sprite.setFlipped(true);
		}
		if (this.type == "Magic") {
			this.sprite = new Animation("images/player4A.png", 9, 1, 50, true, 2);
			this.sprite.changeMinMaxInterval(0, 9);
			this.sprite.setFlipped(false);
		}
	}
	setIdle() {
		if (this.type == "Melee") {
			this.sprite = new Animation("images/player1.png", 6, 1, 100, true, 2);
			this.sprite.changeMinMaxInterval(0, 6);
			this.sprite.setFlipped(true);
		}
		if (this.type == "Range") {
			this.sprite = new Animation("images/player3.png", 8, 1, 100, true, 2);
			this.sprite.changeMinMaxInterval(0, 8);
			this.sprite.setFlipped(true);
		}
		if (this.type == "Heal") {
			this.sprite = new Animation("images/player2.png", 8, 1, 100, true, 2);
			this.sprite.changeMinMaxInterval(0, 8);
			this.sprite.setFlipped(false);
		}
		if (this.type == "Magic") {
			this.sprite = new Animation("images/player4.png", 10, 1, 100, true, 2);
			this.sprite.changeMinMaxInterval(0, 10);
			this.sprite.setFlipped(false);
		}
		playerAttacked = false;
	}
}
function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

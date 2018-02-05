var cooldown = true;
var ctx = null;
var spriteList = [];
var spriteBoss = null;
var spritePlayer = null;
var spriteAttacks = [];
var spriteBossAttacks = [];
var img = new Image();
var img2 = new Image();
var resultats = 0;
var resultat = 0;
var bossAttacked = false;
var playerAttacked = false;
var playerSpecial1 = false;
var playerSpecial2 = false;
$(function () {
	setTimeout(getState, 2000)

	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	map = (Math.floor(Math.random() * 3) + 1);
	img.src = "images/battle" + map + ".png";
	img2.src = "images/ball.png";
	setTimeout(function () {

		for (var i = 0; i < resultat.other_players.length; i++) {
			spriteList.push(new Player(i + 1, resultat.other_players[i].type));
		}
		spriteBoss = new Boss("boss");
		spritePlayer = new Player(0, resultat.player.type);
	}, 2200)

	tick();
})

function tick() {
	if (img.complete) {
		ctx.drawImage(img, 0, 0, 1136, 640);
	}

	for (var i = 0; i < spriteList.length; i++) {
		spriteList[i].tick();
	}
	for (var i = 0; i < spriteAttacks.length; i++) {
		var attack = spriteAttacks[i].tick();

		if (!attack) {
			spriteAttacks.splice(i, 1);
			i--;
		}
	}
	for (var i = 0; i < spriteBossAttacks.length; i++) {
		var atttack = spriteBossAttacks[i].tick();

		if (!atttack) {
			spriteBossAttacks.splice(i, 1);
			i--;
		}
	}
	if (spriteBoss != null) {
		spriteBoss.tick();
		spritePlayer.tick();

	}
	window.requestAnimationFrame(tick);
}
function getState() {
	$.ajax({
		type: "POST",
		url: "ajaxGame.php",
		data: {}
	})
		.done(function (response) {
			resultat = JSON.parse(response);
			if (resultat == "GAME_NOT_FOUND_WIN") {
				$(function () {
					$("#dialog-message").dialog({
						modal: true,
						position: { my: "center center", at: "center center", of: canvas },
						buttons: {
							Ok: function () {
								$(this).dialog("close");
								window.location.href = "lobby.php";
							}
						}
					});
				});
			}
			else
				if (resultat == "GAME_NOT_FOUND_LOST") {
					$(function () {
						$("#dialog-message2").dialog({
							modal: true,
							position: { my: "center center", at: "center center", of: canvas },
							buttons: {
								Ok: function () {
									$(this).dialog("close");
									window.location.href = "lobby.php";
								}
							}
						});
					});
				}
				else
					if (resultat == "USER_NOT_FOUND") {
						$(function () {
							$("#dialog-message3").dialog({
								modal: true,
								position: { my: "center center", at: "center center", of: canvas },
								buttons: {
									Ok: function () {
										$(this).dialog("close");
										window.location.href = "index.php";
									}
								}
							});
						});
					}

			if (resultat.game.attacked == true) {
				spriteBossAttacks.push(new Explosion(750, 200));
			}
			$('.bossName').html(resultat.game.name);
			$('.bossHP').html(resultat.game.hp + "/" + resultat.game.max_hp);
			var div = document.getElementById("player1");
			div.querySelector(".playerName").innerHTML = resultat.player.name;
			div.querySelector(".playerHP").innerHTML = "HP : " + resultat.player.hp + "/" + resultat.player.max_hp;
			div.querySelector(".playerMP").innerHTML = "MP : " + resultat.player.mp + "/" + resultat.player.max_mp;
			for (var i = 0; i < resultat.player.skills.length; i++) {
				var div = document.getElementById("stats" + (i + 1));
				div.querySelector(".name").innerHTML = resultat.player.skills[i].name;
				div.querySelector(".heal_target").innerHTML = "Heal targets : " + resultat.player.skills[i].heal_target;
				div.querySelector(".level").innerHTML = "level : " + resultat.player.skills[i].level;
				div.querySelector(".cost").innerHTML = "cost : " + resultat.player.skills[i].cost;
				div.querySelector(".dmg").innerHTML = "damage : " + resultat.player.skills[i].dmg;
				div.querySelector(".heal").innerHTML = "heal ammount  : " + resultat.player.skills[i].heal;
			}
			for (var i = 0; i < 3; i++) {
				var div = document.getElementById("player" + (i + 2));
				div.querySelector(".playerName").innerHTML = "";
				div.querySelector(".playerHP").innerHTML = "";
				div.querySelector(".playerMP").innerHTML = "";
			}
			for (var i = 0; i < resultat.other_players.length; i++) {
				var div = document.getElementById("player" + (i + 2));
				div.querySelector(".playerName").innerHTML = resultat.other_players[i].name;
				div.querySelector(".playerHP").innerHTML = "HP : " + resultat.other_players[i].hp + "/" + resultat.other_players[i].max_hp;
				div.querySelector(".playerMP").innerHTML = "MP : " + resultat.other_players[i].mp + "/" + resultat.other_players[i].max_mp;
			}
			$(".skill").mousedown(function () {
				if (cooldown) {
					cooldown = false;
					var clicked = this.getAttribute("id");
					var skillName = this.querySelector(".name").innerHTML;
					$("#" + clicked).css("background-color", "black");
					var txt = this.querySelector(".name").innerHTML;
					$.ajax({
						type: "POST",
						url: "ajaxSkill.php",
						data: {
							skillname: txt
						}
					})
						.done(function (responses) {
							resultats = JSON.parse(responses);
							if (resultats == "NOT_ENOUGH_MP") {
								$(function () {
									$("#dialog-message4").dialog({
										modal: true,
										position: { my: "center center", at: "center center", of: canvas },
										buttons: {
											Ok: function () {
												$(this).dialog("close");
											}
										}
									});
								});
							}

							if (cooldown == false) {
								if (skillName == "Normal") {
									if (spritePlayer.type == "Range") {
										spritePlayer.setAttack();
										spriteAttacks.push(new FireBall("blade", 750, 200));
									}
									else {
										spritePlayer.setAttack();
										spriteAttacks.push(new FireBall("Normal", 750, 200));
									}
								}
								if (skillName == "Special1") {
									spritePlayer.setAttack();
									for (var i = 0; i < 5; i++) {
										if (spritePlayer.type == "Range") {
											spriteAttacks.push(new FireBall("blade", 750, 200));
										}
										else {
											spriteAttacks.push(new FireBall("Normal", 750, 200));
										}
									}
								}
								if (skillName == "Special2") {
									spritePlayer.setAttack();
									for (var i = 0; i < 10; i++) {
										if (spritePlayer.type == "Range") {
											spriteAttacks.push(new FireBall("SpecialBlade", 750, 200));
										}
										else {
											spriteAttacks.push(new FireBall("Special2", 750, 200));
										}
									}
								}
								skillName = "";
								setTimeout(function () {
									spritePlayer.setIdle();

								}, 900);
								setTimeout(function () {
									cooldown = true;
									$("#" + clicked).css("background-color", "rgba(160, 160, 160, 0)");
								}, 2000);
							}
						})
				}
			})
			setTimeout(getState, 2000);
		})
}
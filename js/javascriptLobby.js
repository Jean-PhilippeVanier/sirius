$(function () {
	setTimeout(getGames, 2000)
})
function getGames() {
	$.ajax({
		type: "POST",
		url: "ajaxLobby.php",
		data: {}
	})
		.done(function (response) {
			var resultat = JSON.parse(response);
			var template = document.querySelector("#template").innerHTML;
			if (resultat == "USER_NOT_FOUND") {
				$(function () {
					$("#dialog-message3").dialog({
						modal: true,
						position: { my: "center center", at: "center center", of: charstats },
						buttons: {
							Ok: function () {
								$(this).dialog("close");
								window.location.href = "index.php";
							}
						}
					});
				});
			}
			document.getElementById("container").innerHTML = "";
			for (var i = 0; i < resultat.length; i++) {
				var div = document.createElement("div");
				div.innerHTML = template;
				div.setAttribute("data-id", resultat[i].id);
				div.querySelector(".name").innerHTML = resultat[i].name;
				div.querySelector(".level").innerHTML = "level: " + resultat[i].level;
				div.querySelector(".players").innerHTML = "players: " + resultat[i].nb + "/" + resultat[i].max_users;
				div.querySelector(".bosshp").innerHTML = "hp: " + resultat[i].hp;
				div.querySelector(".bosstype").innerHTML = resultat[i].type;
				document.getElementById("container").appendChild(div);
			}
			$('.games').hover(function () {
				$(this).closest('.games').css({ opacity: 0.5 });
			},
				function () {
					$(this).closest('.games').css({ opacity: 1 });
				});
			$(".games").click(function () {
				var txt = this.parentElement.getAttribute("data-id");
				$.ajax({
					type: "POST",
					url: "ajaxEnterGame.php",
					data: {
						id: txt
					}
				})
					.done(function (responses) {
						var resultats = JSON.parse(responses);

						if (resultats == "GAME_ENTERED") {
							window.location.href = "game.php";
						}
					})
			})
			setTimeout(getGames, 2000);
		})
}
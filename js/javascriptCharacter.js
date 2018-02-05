$(function () {
	setTimeout(getStats, 2000)
})
function getStats() {
	$.ajax({
		type: "POST",
		url: "ajaxCharacter.php",
		data: {
		}
	})
		.done(function (response) {
			var result = JSON.parse(response);
			var path = window.location.pathname;
			var page = path.split("/").pop();
			if (page == "character.php") {
				console.log(window.location.pathname);
				document.getElementById("username").innerHTML = result.username;
				document.getElementById("niveau").innerHTML = result.level;
				document.getElementById("type").innerHTML = result.type;
				document.getElementById("xp").innerHTML = result.exp;
				document.getElementById("hp").innerHTML = result.hp;
				document.getElementById("mp").innerHTML = result.mp;
				document.getElementById("victoires").innerHTML = result.victories + "/" + result.loss;
				document.getElementById("feinte").innerHTML = result.dodge_chance;
				document.getElementById("reduction").innerHTML = result.dmg_red;
				document.getElementById("last").innerHTML = result.last_game_state;
			}
			else {
				document.getElementById("username").innerHTML = result.username;
				document.getElementById("niveau").innerHTML = result.level;
				document.getElementById("xp").innerHTML = result.exp;
				document.getElementById("hp").innerHTML = result.hp;
				document.getElementById("mp").innerHTML = result.mp;
			}
			if (result == "EMPTY_KEY") {
				$(function () {
					$("#dialog-message2").dialog({
						modal: true,
						position: { my: "center center", at: "center center", of: character },
						buttons: {
							Ok: function () {
								$(this).dialog("close");
								window.location.href = "index.php";
							}
						}
					});
				});
			}
			else
				if (result == "USER_IS_BANNED") {

				}
				else
					if (result == "TOO_MANY_CALLS_BAN") {

					}
			setTimeout(getStats, 2000);
		})
}
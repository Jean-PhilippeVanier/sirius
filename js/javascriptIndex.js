$(document).ready(function () {
	$(".login").animate({
		display: "block",
		height: "400px"
	}, 2000)
	$(".form-label").animate({
		marginTop: "90px"

	}, 2000, function () {
		$(".error").show(0);
		$(".error").animate({
			height: "20px"
		}, 1000);
	});
});
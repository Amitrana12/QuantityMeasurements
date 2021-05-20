var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('select');
var resultType = document.getElementById('select1');
var inputTypeValue, resultTypeValue;
$(document).ready(function () {
	var lengthoptions = ["meter", "centimeter", "millimeter", "kilometer", "mile"];
	$(length = () => {
		input.value = 1;
		result.value = 100;
		$("#select").empty();
		$("#select1").empty();
		$.each(lengthoptions, function (index, value) {
			selection(value,"centimeter");
		});
		$(".box1").addClass("card1");
		$(".box2").removeClass("card2");
		$(".box3").removeClass("card3");
		$("#image1").attr({style: "content:url(../assets/scale.svg)" });
		$("#image2").attr({style: "content:url(../assets/hot\ \(1\).svg)" });
		$("#image3").attr({style: "content:url(../assets/beaker.svg)" });

	})
	$(".box1").click(length);
	var temperatureoptions = ["Celsius", "Fahrenheit", "Kelvin"];
	$(".box2").click(() => {
		input.value = 0;
		result.value = 32;
		$("#select").empty();
		$("#select1").empty();
		$.each(temperatureoptions, function (index, value) {
			selection(value,"Fahrenheit");
		});
		$(".box2").addClass("card2");
		$(".box1").removeClass("card1");
		$(".box3").removeClass("card3");
		$("#image1").attr({style: "content:url(../assets/scalebw.svg)" });
		$("#image2").attr({style: "content:url(../assets/hotcolour.svg" });
		$("#image3").attr({style: "content:url(../assets/beaker.svg)" });
	});
	

});
const selection = (value,select,number)=>{
	if (value == select) {
		$("#select1").append(`<option selected> ` + value + `</option>` + '<br>');
		$("#select").append(`<option> ` + value + `</option>` + '<br>');
	}
	else {
		$("#select").append(`<option>` + value + `</option>` + '<br>');
		$("#select1").append(`<option>` + value + `</option>` + '<br>');
	}

};




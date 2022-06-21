$(document).ready(function () {
  $("form").submit(function (event) {
	var formData = {
	  text: $("#text").val(),
	  type: $("#type").val(),
	};

	$.ajax({
	  type: "POST",
	  url: "http://localhost:8081/hash",
	  data: formData,
	  encode: true,
	}).done(function (data) {
	  document.getElementById("hashtext").innerHTML = data;
	}).fail(function (jqXHR, textStatus, errorThrown) {
		console.log(errorThrown);
	});

	event.preventDefault();
  });
});
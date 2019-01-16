
$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    event.preventDefault();

    $("#outputappt").append($("#name").val() + "<br>");
		$("#outputappt").append($("#desc").val() + "<br>");
    $("#outputappt").append($("#date").val() + "<br>");
		$("#outputappt").append($("#start").val() + "<br>");
		$("#outputappt").append($("#end").val() + "<br> Booking Successful!");

  });

});

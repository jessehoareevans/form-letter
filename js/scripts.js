$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var name1Input = $("input#name1").val();
    var emailInput = $("input#email").val();
    var phoneInput = $("input#phone").val();
    var addressInput = $("input#address").val();


    $(".name1").text(name1Input);
    $(".email").text(emailInput);
    $(".phone").text(phoneInput);
    $(".address").text(addressInput);

    $("#form-text").show();

    event.preventDefault();

  });
});

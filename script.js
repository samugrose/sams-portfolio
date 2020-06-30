$(".btn-primary").on("click", function(event) {
    event.preventDefault();
    var email = $("#exampleFormControlInput2").val();
    var name = $("#exampleFormControlInput1").val();
    var message = $("#exampleFormControlTextarea1").val();
    console.log(email + " " + name + " " + message);
})
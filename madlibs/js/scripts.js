$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var gerund1Input = $("input#gerund1").val();
    var adjective1Input = $("input#adjective1").val();
    var person1Input = $("input#person1").val();
    var ptverbInput = $("input#ptverb").val();
    var adjective2Input = $("input#adjective2").val();

    $(".gerund1").append(gerund1Input);
    $(".adjective1").append(adjective1Input);
    $(".person1").append(person1Input);
    $(".ptverb").append(ptverbInput);
    $(".adjective2").append(adjective2Input);

    $("#story").show();

    event.preventDefault();
  });

});

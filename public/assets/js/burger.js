// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {


  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");

    var devoured = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/update/" + id, {
      type: "PUT",
      data: devoured
    }).then(
      function() {
        console.log("Burger is now eaten!", devoured);
        // Reload the page to get the updated list
        // location.reload();
        $(".burgers-eaten").load(location.href + " .burgers-eaten"); 


      }
    );
  });


  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.

    event.preventDefault();

    var newBurger = {
      burgers_name: $("#burger").val().trim(),
      devoured: 0

    };

    // Send the POST request.
    $.ajax("/api/add", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Burger Added...");
        // Reload the page to get the updated list
        // location.reload();
        // $(".card").load(location.href + " .card"); 
         $(".burgers-uneaten").load(location.href + " .burgers-uneaten"); 
      }
    );
  });

});



// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");

    // console.log(this);
    // var newSleep = $(this).data("newsleep");

    console.log(id);

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
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burgers_name: $("#burger").val().trim(),
      devoured: 0
      // sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/add", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Burger Added...");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE",
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});

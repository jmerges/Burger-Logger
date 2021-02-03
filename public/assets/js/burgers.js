$(function() {
    $("#submit").on("click", function() {
        var newBurger = {
            burger_name: $("#burgerInput").val(),
            devoured: false
        };
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        )
    });

    $(".devour-button").on("click", function(event) {
        var id = $(this).data("id");
        var nowDevoured = {
            devoured: true
        };

        $.ajax("/api/burgers/"+id, {
            type: "PUT",
            data: nowDevoured
        }).then(
            function() {
                console.log(id+" now devoured.");
                location.reload();
            }
        );
    })
});
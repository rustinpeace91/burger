$( document ).ready(function() {

    $(".addburger").on("click", function(event){
        event.preventDefault();


        var name = $("#ba").val().trim();
        var newBurger = {
            name: name,
            devoured: 0
        };

        $.ajax("api/burgers", {
            type: "POST",
            data:newBurger
        }).then(function(){
            console.log("burger added!");
            location.reload();
        });
    }) 

    $(".devourit").on("click", function(event){
        var id = $(this).data("id");
        console.log(id);
        $.ajax("api/burgers/" + id, {
            type: "PUT"
        }).then(function(){
                console.log("burger devoured");
                location.reload();
            }
        )
    });

});
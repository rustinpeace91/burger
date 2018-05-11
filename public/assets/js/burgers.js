//does not load any of this until the document loads first
$( document ).ready(function() {

    //fires on the click function
    $(".addburger").on("click", function(event){
        event.preventDefault();

        //grabs the burger name from the text box with id of #ba
        var name = $("#ba").val().trim();
        //stores the burger name in an object, by default it is not devoured os devoured is set to 0
        var newBurger = {
            name: name,
            devoured: 0
        };
        //makes the post request
        $.ajax("api/burgers", {
            type: "POST",
            data:newBurger
        }).then(function(){
            console.log("burger added!");
            location.reload();
        });
    }) 

    //sets a burger's devoured status to 1 by it's ID when the client makes a PUT request
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

//deletes a burger by it's ID (DELETE request)
    $(".deleteit").on("click", function(event){
        var id = $(this).data("id");
        $.ajax("api/burgers/" + id, {
            type: "DELETE"
        }).then(function(){
            console.log("burger deleted");
            location.reload();
        })
    })

});
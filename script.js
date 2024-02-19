$(document).ready(function(){
    var startTime; 
    
    $("#btnCargarImagen").click(function(){
        $("#loading").show(); 
        startTime = new Date().getTime(); 
        
        cargarImagen();
    });

    function cargarImagen() {
        
        var timestamp = new Date().getTime();
        var imageUrl = "image/jb.jpg?}" + timestamp;

        $.ajax({
            type: "GET",
            url: imageUrl,
            success: function(){
                $("#imagen").attr("src", imageUrl).css({"display": "block", "width": "400px", "height": "300px"});
            },
            complete: function(){
                var endTime = new Date().getTime(); 
                var totalTime = (endTime - startTime) / 1000; 
                $("#tiempo").text(totalTime.toFixed(2)); 
            },
            error: function(xhr, status, error) {
                console.error("Error al cargar la imagen:", error); 
            }
        });
    }
});

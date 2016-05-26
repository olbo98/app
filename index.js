$("document").ready(function(){
    
    $(".button").mousedown(function(){
        
        /*$(this).css("background-color", "black");
        $(this).css("color", "white");*/
        $(this).css({boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5) inset"})

    });
    
    $(".button").mouseup(function(){
        
        $(".button").css({boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)"})
        
    });
    
})
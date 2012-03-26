
$(document).ready(function(){
    
        var mov1;
        mov1 = new social();
        mov1.setTitle("Underworld");
        
        $("[type = 'button'].play").on("click",function(){
            mov1.play();
        });
        
        $("[type = 'button'].stop").on("click",function(){
            mov1.stop();
        });
        
        $("[type = 'button'].bShare").on("click",function(){
           var friend = $("text.tshare").val();
           mov1.share(friend);
        });    
});





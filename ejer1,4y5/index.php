<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <script type="text/javascript" src="Movie.js"></script>
        
        <script type="text/javascript" src="jquery-1.7.1.js"></script>
        
        <title> JavaScript and OOP </title>
        
        <script> 
            
            // 4.Publish “playing” event on Movie.play() -> details in Movie.js
            
            function playIt(){
                mov1.play();
            }
            
            // 5.Publish “stopped” event on Movie.stop() -> details in Movie.js
            
            function stopIt(){
                mov1.stop();
            }
  
        </script>
        
    </head>
    <body>
        
        <script>
            
            var mov1;
            mov1 = new movie();
            mov1.setTitle("Underworld");
            
        </script>
        
        <h4> Movie Player </h4>
        
        <div id="rec" class="res"> </div> <br>
        
        <input type="button" value=" Play " onclick="playIt();">
        
        <input type="button" value=" Stop " onclick="stopIt();">

    </body>
</html>


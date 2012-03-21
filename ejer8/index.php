<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <script type="text/javascript" src="Movie.js"></script>
        
        <script type="text/javascript" src="jquery-1.7.1.js"></script>
        
        <title> JavaScript and OOP </title>
        
        <script> 
            
            function playIt(){
                mov1.play();
            }
            
            function stopIt(){
                mov1.stop();
            }
            
            // 8.Create a DownloadableMovie that extends from Movie 
            // adding a download method -> details in Movie.js
            
            function downloadIt(){
                mov1.download();
            }
  
        </script>
    </head>
    <body>
                
        <script>
            
            var mov1;
            mov1 = new downloadableMovie();
            mov1.setTitle("Underworld");
            
        </script>
        
        <h4> Movie Player </h4>
        
        <div id="rec" class="res"> </div> <br>
        
        <input type="button" value=" Play " onclick="playIt();">
        
        <input type="button" value=" Stop " onclick="stopIt();">
        
        <input type="button" value=" Download " onclick="downloadIt();">
        
    </body>
</html>

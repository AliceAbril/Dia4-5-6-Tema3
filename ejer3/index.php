<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <script type="text/javascript" src="Movie.js"></script>
        
        <script type="text/javascript" src="MovieObserver.js"></script>
        
        <title> JavaScript and OOP </title>
    </head>
    <body>
        <script>
            
            var mov1;
            mov1 = new movie();
            mov1.setTitle("Underworld");
            
            var mOb1;
            mOb1 = new movieObserver();
            
            mov1.addOserver(mOb1);
            
        </script>
    </body>
</html>

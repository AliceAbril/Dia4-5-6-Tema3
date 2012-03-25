
$(document).ready(function(){
    
        var mov1;
        mov1 = new movie();
        mov1.setTitle("Underworld");

        var mOb1;
        mOb1 = new movieObserver(1);

        mov1.addObserver(mOb1); 
        
        $("[type = 'button'].play").on("click",function(){
            mov1.play();
            mOb1.getMoviesPlaying();
        });
        
        $("[type = 'button'].stop").on("click",function(){
            mov1.stop();
            mOb1.getMoviesStopped();
        });
        
        
});





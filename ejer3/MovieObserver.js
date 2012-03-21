/* 
 * Movie Observer class
 */

function movieObserver(){
    
     // Attributes ************************************************
     
     /* Set using standard JavaScript object.*/
     this.moviesPlaying = {};
     this.moviesStopped = {};
     
     //************************************************************
     
     // Methods ***************************************************
     
     this.update = function(event,movie){
         if (event == "playing"){
             // delete the movie from moviesStopped set (if exist in it) and add to moviesPlaying set
             if (title in this.moviesStopped){
                 delete this.moviesStopped[movie];
             }
             this.moviesPlaying[movie] = true;        
         } else if (event == "stopped"){
             // delete the movie from moviesPlaying set (if exist in it) and add to moviesStopped set
             if (movie in this.moviesPlaying){
                 delete this.moviesPlaying[movie];
             }
             this.moviesStopped[movie] = true; 
         }
     }
     
     this.getMoviesPlaying = function(){
         var i;
         
         //document.write('Movies playing <br>');
         
         for(i = 0; i < this.moviesPlaying.lenght ; i++){
            // document.write(this.moviesPlaying[i] + '<br>');
         }
     }
     
     this.getMoviesStopped = function(){
         
     }
     
     //************************************************************
}


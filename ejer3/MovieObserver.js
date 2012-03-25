/* 
 * Movie Observer class
 */

function movieObserver(id){
    
     // Attributes ************************************************
     
     /* id is a integer identificator*/
     this.id = id;
     
     /* Set using standard JavaScript object.*/
     this.moviesPlaying = new Array();
     this.moviesStopped = new Array();
     
     //************************************************************
     
     // Methods ***************************************************
     
     this.update = function(event,movie){
         if (event == "playing"){
             // delete the movie from moviesStopped array (if exist in it) and add to moviesPlaying array
             var i;
             /*for (i = 0; i < this.moviesStopped.length; i++){
                 if (this.moviesStopped[i].getTitle() == movie.getTitle()){
                    this.moviesStopped.splice(i,1);
             }}*/
             this.moviesPlaying.push(movie);     
             
         } else if (event == "stopped"){
             // delete the movie from moviesPlaying set (if exist in it) and add to moviesStopped set
             //var i;
             /*for (i = 0; i < this.moviesPlaying.length; i++){
                 if (this.moviesPlaying[i].getTitle() == movie.getTitle()){
                    this.moviesPlaying.splice(i,1);
             }}*/
             this.moviesStopped.push(movie); 
         }
         //$("div.obsStop").html(this.moviesStopped.length);
     }
     
     this.getMoviesPlaying = function(){
         //var i;
         $("div.obsPlay").html(this.moviesPlaying[0].getTitle());
         
         /*for(i = 0; i < this.moviesPlaying.lenght ; i++){
             $("div.obsPlay").html(this.moviesPlaying[i].getTitle());
         }*/
     }
     
     this.getMoviesStopped = function(){
         //var i;
         $("div.obsStop").html(this.moviesStopped[0].getTitle());
         
         /*for(i = 0; i < this.moviesStopped.lenght ; i++){
             $("div.obsStop").html(this.moviesStopped[i].getTitle());
         }*/
     }
     
     this.getId = function(){
         return this.id;
     }
     
     //************************************************************
}


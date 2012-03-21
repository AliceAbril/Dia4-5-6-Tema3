/* 
 * Movie Class
 */

function movie(){
    
    // Attributes ************************************************
    
    this.title = " ";
    this.rating = 0;
    this.id = 0;
    
    this.change = false;
    this.observers = new Array();
    
    //************************************************************
    
    // Methods ***************************************************
    
    this.play = function(){
        
        $("#rec").html('Playing '+ this.title);
        
        this.change = true;
        
        this.notifyObservers("playing");
    }
    
    this.stop = function(){
        
        $("#rec").html(this.title + ' stopped');
        
        this.change = true;
        
        this.notifyObservers("stopped");
    }
    
    this.setTitle = function(title){
        this.title = title;
    }
    
    this.getTitle = function(){
        return this.title;
    }
    
    this.setRating = function(rating){
        this.rating = rating;
    }
    
    this.getRating = function(){
        return this.rating;
    }
    
    this.setId = function(id){
        this.id = id;
    }
    
    this.getId = function(){
        return this.id;
    }
    
    //************************************************************
    
    // Methods for Observable ************************************
    
    this.addObserver = function(observer){}
        // Add a MovieObserver to observers
    this.deleteObserver = function(observer){}
        // Delete a MovieObserver to observers
    this.setChanged = function(){ 
        this.change = true;
    }
    this.clearChanged = function(){
        this.change = false;}
    this.hasChanged = function(){return this.change;
    }
    this.notifyObservers = function(event) {
        if (this.change){
           var i;
           for (i = 0; i < this.observers.lenght; i++){
               this.observers[i].update(event, this);
           }
        }
    }
        //Comprueba el flag interno para ver si el Observable ha cambiado de estado y lo notifica a todos los observadores

    
    //************************************************************
}

/* 
 * Downloadable Movie Class
 */

// 8.Create a DownloadableMovie that extends from Movie adding a download method

downloadableMovie.prototype = new movie();
downloadableMovie.prototype.constructor= downloadableMovie;

function downloadableMovie(){
    
    //Methods ****************************************************
    this.download = function(){
        $("#rec").html('Downloading ' + this.title);
    }
}


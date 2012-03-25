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
        
        $("div.res").html('Playing '+ this.title);
        
        this.change = true;
        
        this.notifyObservers("playing");
    }
    
    this.stop = function(){
        
        $("div.res").html(this.title + ' stopped');
        
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
    
    this.addObserver = function(observer){
        this.observers.push(observer);
        
       // $("div.obsPlay").html(this.observers.length);
    }
    
    this.deleteObserver = function(observer){
        var j;
        for(j = 0; j< this.observers.length; j++){
            if (this.observers[j].getId() == observer.getId()) {
                this.observers.splice(j,1);
            }
        }
    }
    
    this.setChanged = function(){ 
        this.change = true;
    }
    
    this.clearChanged = function(){
        this.change = false;
    }
    
    this.hasChanged = function(){
        return this.change;
    }
    
    this.notifyObservers = function(event) {
        if (this.change){
           var i;
           for (i = 0; i < this.observers.length; i++){
               this.observers[i].update(event, this);
           }
        }
    }
    
    //***********************************************************
}


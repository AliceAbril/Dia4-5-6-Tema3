/* 
 * Movie Class
 */

// 1.Create a Movie class 

function movie(){
    
    // Attributes ************************************************
    
    this.title = " ";
    this.rating = 0;
    this.id = 0;
    
    //************************************************************
    
    // Methods ***************************************************
    
    this.play = function(){
        
        $("#rec").html('Playing '+ this.title);
        // avisar a los observer
    }
    
    this.stop = function(){
        $("#rec").html(this.title + ' stopped');
        // avisar a los observer
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
}


/* 
 * Movie Class
 */

function movie(){
    
    // Attributes ************************************************
    
    this.title = " ";
    this.rating = 0;
    this.id = 0;
    
    //************************************************************
    
    // Methods ***************************************************
    
    this.play = function(){
        $("div.res").html('Playing '+ this.title);
    }
    
    this.stop = function(){    
        $("div.res").html(this.title + ' stopped');
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


function social(){
    
    this.share = function(name){
        $("div.dShare").html('Sharing with ' + name);
    }
    
    this.like = function(){}
}

//Here is the mixin magic! 

movie.call(social.prototype);

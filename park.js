var Park = function(){
  this.enclosure = [];

}

Park.prototype = {
  empty: function (){
    this.enclosure = [];
  },
  addDinosaur: function (dinosaur){
    this.enclosure.push(dinosaur);
  },

  removeDinosaur: function (type) {
    for (var closure of this.enclosure) {
      if (closure.type === type) {
        var index = this.enclosure.indexOf(closure);
        this.enclosure.splice(index, 1);
      }
      

      }
    },
  
  getAllOffSpringDinosaur: function(offspring){
    var num = [];
    for (var closure of this.enclosure) {
      if (closure.offspring = offspring) {
        num.push(closure.type);
        return num.length;
        
       
        
  }
}
}

};

module.exports = Park;
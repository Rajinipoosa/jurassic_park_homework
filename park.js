var Park = function(){
  this.enclosure = [];

}

Park.prototype = {
  empty: function (){
    this.enclosure = [];
  },
  addDinosaur: function (dinosaur){
    this.enclosure.push(dinosaur);
  }

};

module.exports = Park;
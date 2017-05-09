var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');
var assert = require('assert');

describe('A Park', function () {

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach( function () {
    park = new Park();
    dinosaur1 = new Dinosaur({
       type: 'Tyrannosaurus', offspring: 2
    });
 dinosaur2 = new Dinosaur({
    type: 'Velociraptor', offspring: 1
 });
 dinosaur3 = new Dinosaur({
    type: 'Triceratops', offspring: 3
 });
});
 it('should have no dinosaurs to begin with', function () {
   assert.strictEqual(0, park.enclosure.length);
 });

 it('should be able to add dinosaur to enclosure', function () {
   park.addDinosaur(dinosaur1);
   assert.strictEqual(1, park.enclosure.length);
 });

  });


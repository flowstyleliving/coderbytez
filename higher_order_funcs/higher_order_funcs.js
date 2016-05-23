var animals =[
  {name: 'Fluffy', species: 'rabbbit'},
  {name: 'Holla', species: 'dog'},
  {name: 'Athcha', species: 'dog'},
  {name: 'Bloop', species: 'fish'},
  {name: 'Meow', species: 'cat'},
  {name: 'Poop', species: 'human'}
];

var orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325},
];

//filter
var dogs = animals.filter(function(animal) {
  return animal.species === 'dog';
});

//map
var names = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species;
});

//reduce
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

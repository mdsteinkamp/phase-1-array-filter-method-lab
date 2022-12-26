const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(array, enteredName) {
  return array.filter(name => enteredName.toUpperCase().includes(name.toUpperCase()));
};

function fuzzyMatch(array, enteredName) {
  return array.filter(name => enteredName.slice(0, 2).includes(name.slice(0,2)));
};


const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
];

//below is for an array of objects 
function matchName(array, enteredName) {

    return array.filter(array => array.name.toUpperCase() === enteredName.toUpperCase())
}
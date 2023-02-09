//1
function alphabeticalOrder(arr) {
    return arr.sort(function(a,b) {
      return a === b ? 0 : a < b ? -1 : 1;
    })
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//2
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
return [].concat(arr).sort(function(a,b) {
  return a - b;
})
}
nonMutatingSort(globalArray);

//3
function splitify(str) {
  return str.split(/\W/);
  }
  splitify("Hello World,I-am code");

//4
function sentensify(str) {
  return str.split(/\W/).join(" ");
  } 
  sentensify("May-the-force-be-with-you");

//5
function urlSlug(title) {
    return title
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .join("-");
    }
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

//6
function checkPositive(arr) {
  return arr.every(val => val > 0);
  }
  checkPositive([1, 2, 3, -4, 5]);

//7
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
  }
  checkPositive([1, 2, 3, -4, 5]);

//8
function add(x) {
  return function (y){
    return function(z){
      return x + y + z;
    }
  }
  }
  add(10)(20)(30);
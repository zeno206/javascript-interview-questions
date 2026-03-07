/*//Q-1
//What is the output? 

for (var i = 0; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

//output
//6;
//6;
//6;
//6;
//6;
//6;

*/
//Q-3

/*var func = [];
for (var i = 0; i < 5; i++) {
  func[i] = function () {
    console.log(i);
  };
}
func[3]();

//output
5;*/

//Q-3

(function () {
  var a = (b = 5);
})();
console.log(b);

//output
//nothing
//if we chaneg the var to a = (b=5) then the output is 5

//Q-4

function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter();
counter();
counter();
//output
//1
//2
//3

//Q-5

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));
console.log(triple(5));
//output
//10//15

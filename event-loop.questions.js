console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

//output
//A,D,C,B

setTimeout(() => console.log(1));

Promise.resolve().then(() => console.log(2));

Promise.resolve().then(() => console.log(3));

console.log(4);

//output
//4,2,3,1

console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("promise1");
  })
  .then(() => {
    console.log("promise2");
  });

console.log("end");

//output
//start,end,promise1,promise2,timeout

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

Promise.resolve().then(() => {
  console.log("4");
});

console.log("5");

//output
//1,3,5,4,2

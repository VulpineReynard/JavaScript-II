// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const superDuperFunction = () => {
  let superDuperValue = 42;

  superDuperClosure = () => {
    console.log("The meaning to life is " + superDuperValue);
  }
  return superDuperClosure;
}

newSuperDuperFunction = superDuperFunction();
newSuperDuperFunction();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  count = 0;
  // Return a function that when invoked increments and returns a counter variable.
  return () => {
    count += 1;
    return count;
  }
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3
console.log(newCounter()); // 4

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variabsle in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  count = 0;

  return { increment: () => (count++), 
           decrement: () => (count--) };
};

const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
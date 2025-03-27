/**
 * Callback Demo
 * This file demonstrates the concept of callbacks in JavaScript
 */

// Example of sequential tasks with callbacks
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 completed");
    if (callback) callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 completed");
    if (callback) callback();
  }, 2000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 completed");
    if (callback) callback();
  }, 3000);
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 completed");
    if (callback) callback();
  }, 4000);
}

function task5(callback) {
  setTimeout(() => {
    console.log("Task 5 completed");
    if (callback) callback();
  }, 5000);
}

// Sequential execution using callbacks (callback hell example)
console.log("Starting tasks sequentially with callbacks...");
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          console.log("All tasks completed in sequence!");
        });
      });
    });
  });
});

// Alternative approach: Promise chain (modern approach)
// Uncomment this section to see the Promise approach
/*
function promiseTask1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promise Task 1 completed");
      resolve();
    }, 1000);
  });
}

function promiseTask2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promise Task 2 completed");
      resolve();
    }, 2000);
  });
}

function promiseTask3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promise Task 3 completed");
      resolve();
    }, 3000);
  });
}

function promiseTask4() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promise Task 4 completed");
      resolve();
    }, 4000);
  });
}

function promiseTask5() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Promise Task 5 completed");
      resolve();
    }, 5000);
  });
}

// Execute tasks in sequence using Promise chain
console.log("Starting tasks with Promises...");
promiseTask1()
  .then(() => promiseTask2())
  .then(() => promiseTask3())
  .then(() => promiseTask4())
  .then(() => promiseTask5())
  .then(() => console.log("All promise tasks completed in sequence!"));
*/

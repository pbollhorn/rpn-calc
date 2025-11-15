import Queue from "https://pbollhorn.github.io/datastruktur-portfolio/queue/queue.js";
import Stack from "https://pbollhorn.github.io/datastruktur-portfolio/stack/stack.js";

const expression = "2 3 4 * +";

const inputQueue = new Queue();

const resultStack = new Stack();

//parseExpression læser en expression og putter den i inputQueue
function parseExpression(expression) {
  const splitted = expression.split(" ");
  for (const val of splitted) {
    if (isNaN(val)) {
      // val er en operation
      inputQueue.enqueue(val);
    } else {
      inputQueue.enqueue(Number(val));
    }
  }
}

// går gennem køen og finder tal og operationer
function goThroughQueue() {
  while (inputQueue.length > 0) {
    console.log(inputQueue);
    console.log(resultStack);

    // dequeue element fra køen
    const element = inputQueue.dequeue();
    console.log("dequeued element: " + element);

    // hvis det er et number:
    //      push det til resultstack
    // ellers er det en operation
    //      så kald performOperation med den
    if (typeof element === "number") {
      resultStack.push(element);
      console.log("push this element to resultStack: " + element);
    } else {
      performOperation(element);
    }
  }
}

// udfører en bestemt operation
function performOperation(operation) {
  // pop de sidste to værdier fra resultStack til A og B
  // hvis operation == "+"
  //      læg A og B sammen, push resultatet til resultStack
  // hvis operation == "*"
  //    gang A og B, push resultat til resultStack
  // osv...

  const B = resultStack.pop();
  const A = resultStack.pop();
  switch (operation) {
    case "+":
      resultStack.push(A + B);
      break;
    case "*":
      resultStack.push(A * B);
      break;
  }
}

function rpncalc(expression) {
  parseExpression(expression);
  goThroughQueue();
  console.log(resultStack.pop());
}

rpncalc(expression);

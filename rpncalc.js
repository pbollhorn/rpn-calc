const expression = "2 3 4 x +";

const inputQueue = [];

const resultStack = [];

//parseExpression læser en expression og putter den i inputQueue
function parseExpression(expression) {
  const splitted = expression.split(" ");
  for (const val of splitted) {
    if (isNaN(val)) {
      // val er en operation
      inputQueue.push(val);
    } else {
      inputQueue.push(Number(val));
    }
  }
  console.log(splitted);
}

// går gennem køen og finder tal og operationer
function goThroughQueue() {
  while (inputQueue.length > 0) {
    // dequeue element fra køen

    // hvis det er et number:
    //      push det til resultstack
    // ellers er det en operation
    //      så kald performOperation med den
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



}

function rpncalc(expression) {
  parseExpression(expression);
  goThroughQueue();
}

rpncalc(expression);

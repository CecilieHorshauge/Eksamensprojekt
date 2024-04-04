let btn1, btn2, btn3, btn4;

function setup() {
  createCanvas(400, 400);
  // restartknap

  // Lav knap btn1
  btn1 = createButton("btn1")
  // Lav knap btn2
  btn2 = createButton("btn2")
  // Lav knap btn3
  btn3 = createButton("btn3")
  // Lav knap btn4
  btn4 = createButton("btn4")
  // Spiller input
  btn1.mousePressed(() => playerArray.push(1))
  btn2.mousePressed(() => playerArray.push(2))
  btn3.mousePressed(() => playerArray.push(3))
  btn4.mousePressed(() => playerArray.push(4))
}

function draw() {
  background(220);
  if (randomArray.length === playerArray.length) {
    Comparison()
  }
}

let randomArray = [1, 2, 3, 4];
console.log(randomArray)
let playerArray = [];

// Sammenligning

function Comparison() {
  let indentical = true;
  for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] !== playerArray[i]) { indentical = false }
  }
  if (indentical) { console.log("Congratulations") }
    else {console.log("You failed... Congrats")}
  playerArray=[]
}
let btn1, btn2, btn3, btn4;
let buttons1 = [];
let colors = ["rgb(255, 182, 193)", "rgb(107, 70, 227)", "rgb(145, 196, 108)", "rgb(227, 220, 93)"];
let currentColor = 0;
let btnStart, btnSubmit;
let playerArray = [];
let randomArray = [];

function setup() {
  createCanvas(400, 400);
  // restartknap
  // Lav start- og submit-knap
  btnStart = createButton("Start")
  btnSubmit = createButton("Submit")
  // Lav knap btn1
  btn1 = createButton("btn1")
  btn1.position(50,20);
  btn1.size(50,25)
  // Lav knap btn2
  btn2 = createButton("btn2")
  btn2.position(50,70);
  btn2.size(50,25)
  // Lav knap btn3
  btn3 = createButton("btn3")
  btn3.position(50,120);
  btn3.size(50,25)
  // Lav knap btn4
  btn4 = createButton("btn4")
  btn4.position(50,170);
  btn4.size(50,25)

  // Spiller input
  // btnStart.mousePressed(() => DisplaySequence())
  frameRate(1)
  btnSubmit.mousePressed(() => Comparison())
  btn1.mousePressed(() => playerArray.push(1))
  btn2.mousePressed(() => playerArray.push(2))
  btn3.mousePressed(() => playerArray.push(3))
  btn4.mousePressed(() => playerArray.push(4))
  // Opretter fire knapper og gemmer dem i knappe-arrayet
  for (let i = 0; i < 4; i++) {
    let Btn1 = createButton("");
    Btn1.position(20, i * 50 + 20);
    Btn1.size(25, 25)
    Btn1.style("background-color", "white");

    buttons1.push(Btn1);
  }
  
}
randomArray = [1, 2, 3, 4];
console.log(randomArray)



function draw() {
  background(220);
  ChangeColor(buttons[currentColor % Buttons.length]);
  currentColor++;
}

// Sammenligning

function Comparison() {
  let indentical = true;
  for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] !== playerArray[i]) { indentical = false }
  }
  if (indentical) { console.log("Congratulations") }
  else { console.log("You failed... Congrats") }
  frameRate(0)
  playerArray = []
}

//funktion til at skifte farve
function ChangeColor(Btn1) {
  let originalColor = Btn1.style("background-color"); // Gem den originale farve
  let newColor = colors[currentColor % colors.length]; // Vælg en ny farve baseret på nuværende indeks
  Btn1.style("background-color", newColor); // Sæt ny farve

  setTimeout(() => {
    Btn1.style("background-color", originalColor); // Sæt tilbage til original efter 1 sekund
  }, 1000);
}
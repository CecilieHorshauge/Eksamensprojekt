let btn1, btn2, btn3, btn4;
let Buttons = [];
let message = "";

//Farverne defineres i et array
let farver = [
  "rgb(255, 182, 193)",
  "rgb(107, 70, 227)",
  "rgb(145, 196, 108)",
  "rgb(227, 220, 93)",
];
let btnStart, btnSubmit;
let playerArray = [];
let randomArray = [];

function setup() {
  createCanvas(400, 260);
  background(220)
  btnStart = createButton("Start");
  btnStart.position(20,220)
  btnSubmit = createButton("Submit");
  btnSubmit.position(70,220)

 // Der laves en knap til farven pink
  btn1 = createButton("Pink");
  btn1.position(50, 20);
  btn1.size(50, 25);

// Der laves en knap til farven blå
  btn2 = createButton("Blue");
  btn2.position(50, 70);
  btn2.size(50, 25);

// Der laves en knap til farven grøn
  btn3 = createButton("Green");
  btn3.position(50, 120);
  btn3.size(50, 25);

// Der laves en knap til farven gul
  btn4 = createButton("Yellow");
  btn4.position(50, 170);
  btn4.size(50, 25);

  // Der oprettes fire knapper og de gemems i knappe-arrayet
  for (let i = 0; i < 4; i++) {
    let Btn = createButton("");
    Btn.position(20, i * 50 + 20);
    Btn.size(25, 25);
    Buttons.push(Btn);
  }

  btn1.mousePressed(() => playerArray.push(0)); // Gemmer indekset for farven
  btn2.mousePressed(() => playerArray.push(1));
  btn3.mousePressed(() => playerArray.push(2));
  btn4.mousePressed(() => playerArray.push(3));

  // Startknap
  btnStart.mousePressed(() => {
    randomArray.push(Math.floor(Math.random() * 4)); // Tilføj et nyt tilfældigt index
    DisplaySequence(); // Vis sekvens
  });

  btnSubmit.mousePressed(Comparison);
  textSize(20)
}
function draw(){
  text(message, 160,110)
}

function DisplaySequence() {
  let i = 0;
  let interval = setInterval(() => {
    if (i >= randomArray.length) {
      clearInterval(interval);
      return;
    }
    let colorIndex = randomArray[i];
    Buttons[colorIndex].style("background-color", farver[colorIndex]); // Vis farve
    setTimeout(
      () => Buttons[colorIndex].style("background-color", "white"),
      500
    ); // Nulstil farve efter 0.5 sekund
    i++;
  }, 1000);
}

function Comparison() {
  let identical = true;
  if (playerArray.length !== randomArray.length) identical = false; // Tjek længden først
  for (let i = 0; i < randomArray.length && identical; i++) {
    if (randomArray[i] !== playerArray[i]) {
      identical = false;
    }
  }
  playerArray = []; // Ryd spillerens indtastninger
  if (identical) {
    HideMessage()
    message = "Congratulations";
    setTimeout(HideMessage,1500)
    randomArray.push(Math.floor(Math.random() * 4)); // Tilføj et nyt tilfældigt index
    setTimeout(DisplaySequence, 1000); // Vent lidt og vis ny sekvens
  } else {
    randomArray = [];
    HideMessage()
    message = "You failed... Try again";
    setTimeout(HideMessage,1500)
  }
}

function HideMessage(){
  clear()
  background(220)
  message = ""
}
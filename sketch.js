function setup() {
  createCanvas(400, 400);
  // restartknap

  // Lav knap btn1
 let btn1 = createButton("btn1")
  // Lav knap btn2
  let btn2 = createButton("btn2")
  // Lav knap btn3
  let btn3 = createButton("btn3")
  // Lav knap btn4
  let btn4 = createButton("btn4")
}

function draw() {
  background(220);
}
// Pseudokode

randomArray defineres
playerArray initialiseres

// Knapper


// Spiller input
Når btn1 trykkes på "pushes" værdien 1 i playerArray
Når btn2 trykkes på "pushes" værdien 2 i playerArray
Når btn3 trykkes på "pushes" værdien 3 i playerArray
Når btn4 trykkes på "pushes" værdien 4 i playerArray

// Sammenligning

funktion Comparison
for i < længden af randomArray
  hvis RandomArray[i] = PlayerArray[i]
    ellers udskriv "You failed" i konsollen
  hvis i = længden af randomArray - 1
  så udskriv "Congratulations"
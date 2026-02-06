let scoregood = 0;
let scorebad = 0;
let stopcode = 0;

const selectionInput1 = prompt(`Which one is the largest?
[1] The Moon
[2] Elephant
[3] Saxaphone
`);
const selection1 = Number(selectionInput1);

if (Number.isNaN(selection1)) {
  alert("You must enter a number.");
  stopcode = 1;
} 
else if (selection1 < 1 || selection1 > 3) {
  alert("Your answer must be 1, 2, or 3.");
  stopcode = 1;
} 
else {
  if (selection1 === 1){
    scoregood ++;
    alert("correct");
  }
  else{
    scorebad ++;
    alert("INcorrect");
  }
}

if (stopcode === 0){
  const selectionInput2 = prompt(`Which one is the best car maker?
  [1] Porshe
  [2] BMW
  [3] Mercedes
  [4] Audi
  `);
  const selection2 = Number(selectionInput2);

  if (Number.isNaN(selection2)) {
    alert("You must enter a number.");
    stopcode = 1;
  } 
  else if (selection2 < 1 || selection2 > 4) {
    alert("Your answer must be 1, 2, 3, or 4.");
    stopcode = 1;
  } 
  else {
    if (selection2 === 2){
      scoregood ++;
      alert("Correct");
    }
    else{
      scorebad ++;
      alert("INcorrect, you should know better.");
    }
  }
}

if (stopcode === 0){
  const selectionInput3 = prompt(`Which is your favorite?
  [1] Adds that play constantly
  [2] Adds that play sometimes
  [3] Adds that play never
  `);
  const selection3 = Number(selectionInput3);

  if (Number.isNaN(selection3)) {
    alert("You must enter a number.");
    stopcode = 1;
  } 
  else if (selection3 < 1 || selection3 > 3) {
    alert("Your answer must be 1, 2, or 3");
    stopcode = 1;
  } 
  else {
    if (selection3 === 1){
      scoregood ++;
      alert("Correct, we want constant adds.");
    }
    else{
      scorebad ++;
      alert("INcorrect, we all love more adds.");
    }
  }
}





if (stopcode === 0){
  if (scoregood === 0){
    alert("You got them all wrong")
  }
  else if (scoregood === 3){
    alert("You got them all right")
  }
  else{
    alert(`You got this many correct: ${scoregood}
    And this many incorrect: ${scorebad}`);
  }
}







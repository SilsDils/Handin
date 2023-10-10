// Handin - Individual //
// What to wear opg 1//
/*
let answer = prompt ("Hvor mange grader er det i dag brorz");
if (answer > 15) {
    alert ("Shorts og T-shirt");
} else if (answer < 15) {
    alert ("Det er is udenfor brorz, bukser og hoodie");
} else if (answer == 15) {
    alert ("Smag og behag, do what u want");
}
 */


// Dice game opg 2

function diceroll(rolldicetimes) {
    let counter= 0;
    for (let polse = 0; polse < rolldicetimes; polse++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        if (roll === 6) {
            console.log("You just hit 6!");
            counter++;
        }
    }
    if (counter === rolldicetimes) {
        console.log ("Jackpot");

    }
}

diceroll (3);

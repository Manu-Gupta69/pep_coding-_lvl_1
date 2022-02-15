let keypad = {
  1: "1",
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
let finalarr = [];
function keypadcombination(keypadno, runningcombi, totalcombi) {
  // BASE CASE we'll come  back later to this
  if (keypadno == "") {
    totalcombi.push(runningcombi);
    return;
  }
  let arrofchar = keypad[keypadno[0]];
  for (let char = 0; char < arrofchar.length; char++) {
    keypadcombination(
      keypadno.slice(1),
      runningcombi + arrofchar[char],
      totalcombi
    );
  }
}
keypadcombination("23", "", finalarr);
console.log(finalarr);

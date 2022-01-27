import { words } from "../data/words";

export const getRandomWord = () =>
  words[Math.round(Math.random() * (words.length - 1))];

export const verification = async (
  currentWord,
  setCurrentWord,
  answer,
  testedWord,
  setTestedWord,
  currentIndex,
  setCurrentIndex,
  testedLetters,
  setTestedLetters
) => {

  if(currentWord.length!==5){
    return
  }
  let value;
  await fetch(`http://localhost:4000/wordle/exist/${currentWord.toLowerCase()}`)
    .then((res) => res.json())
    .then((val) => value=val[0]?.word)
    .then(()=>console.log(value));
  
  if (currentWord.toLowerCase()!==value) {
    alert("Ce mot n'est pas dans notre base de données");
    return;
  }

  if (currentWord === answer) {
    alert("gg wp");
    return;
  }

  let letters = currentWord.split("");

  let newTestedWord = testedWord;
  newTestedWord[currentIndex] = letters;
  setTestedWord(newTestedWord);

  let tmp = [];
  letters.forEach((letter, index) => {
    let color;
    if (!answer.includes(letter)) {
      color = "dark";
    }
    if (answer.includes(letter)) {
      color = "orange";
    }
    if (letter === answer[index]) {
      color = "green";
    }
    if (color === "green") {
      tmp.find((obj) => obj.letter === letter)?.color = "green";
      testedLetters.find((obj) => obj.letter === letter)?.color = "green";
    }
    if (
      !tmp.some((x) => x.letter === letter) &&
      !testedLetters.some((x) => x.letter === letter)
    ) {
      tmp.push({ letter, color });
    }
  });
  setTestedLetters((testedLetters) => {
    return [...testedLetters, ...tmp];
  });

  setCurrentIndex(currentIndex + 1);
  setCurrentWord("");
};

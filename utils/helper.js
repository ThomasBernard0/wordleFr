import { words } from "../data/words";

export const getRandomWord = () =>
  words[Math.round(Math.random() * (words.length - 1))];

export const verification = (
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
  if (!words.includes(currentWord)) {
    alert("Ce mot n'est pas dans notre base de données");
    return;
  }

  if (currentWord === answer) {
    alert("gg wp");
    return;
  }

  let newTestedWord = testedWord;
  newTestedWord[currentIndex] = currentWord.split("");
  setTestedWord(newTestedWord);
  setTestedLetters(testedLetters + currentWord.split(""));
  setCurrentIndex(currentIndex + 1);
  setCurrentWord("");
};

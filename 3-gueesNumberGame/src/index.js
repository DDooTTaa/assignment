const score = document.querySelector(".score");
const guessInfo = document.querySelector(".guessInfo");
const guessNumber = document.querySelector("#guessNumber");
const btn = document.querySelector("button");
const setNumber = document.querySelector("#setNumber");

function guess() {
    const setNum = setNumber.value;
    const gNum = guessNumber.value;
    const rand = Math.floor(Math.random() * (parseInt(setNum) + 1));
    guessInfo.innerText = `You Choose: ${gNum} the Machine choose ${rand}`;

    if (parseInt(gNum) === rand) {
        score.innerText = "You Won!";
    } else {
        score.innerText = "You Lostㅠㅠ";
    }
}

btn.addEventListener("click", guess);

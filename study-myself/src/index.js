const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];

const btn = document.querySelector("button");

function colorMix() {
    const first = Math.floor(Math.random() * colors.length);
    const second = Math.floor(Math.random() * colors.length);

    //    document.body.style = `background-image: linear-gradient(to right,${colors[first]},${colors[second]})`;
}

btn.addEventListener("click", colorMix);

const persist = 2500;
const textIds = ["text_1", "text_2", "text_3"];

const turnOnTransition = (el) => {
    el.classList.add("transitionOn");
    setTimeout(() => {
        el.classList.remove("transitionOn");
    }, persist);
};

const runTransition = (id) => {
    const el = document.getElementById(id);

    if (el) {
        setTimeout(() => {
            turnOnTransition(el);

            setInterval(() => {
                turnOnTransition(el);
            }, persist * textIds.length);
        }, 1);
    }
};

textIds.forEach((id, index) => {
    setTimeout(() => {
        runTransition(id);
    }, index * persist);
});
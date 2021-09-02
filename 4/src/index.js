// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const hello = document.querySelector("h2");

const superEventHandler = {
    enterMouse() {
        hello.style.color = colors[0];
        hello.innerText = "Mouse is here!";
    },
    leaveMouse() {
        hello.style.color = colors[1];
        hello.innerText = "Mouse is leave...";
    },
    handlleSize() {
        hello.style.color = colors[2];
        hello.innerText = "resized!";
    },
    rightClick() {
        hello.style.color = colors[3];
        hello.innerText = "RightClick!!";
        console.log("왜안돼");
    }
};

hello.addEventListener("mouseenter", superEventHandler.enterMouse);
hello.addEventListener("mouseleave", superEventHandler.leaveMouse);
window.addEventListener("resize", superEventHandler.handlleSize);
window.addEventListener("contextmenu", superEventHandler.rightClick);

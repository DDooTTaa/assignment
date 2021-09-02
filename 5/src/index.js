const h2 = document.querySelector(".hello");

function handleResize() {
    h2.style.color = "white";
    const width = document.body.clientWidth;
    if (width > 800) {
        document.body.style.background = "red";
    } else if (width > 500) {
        document.body.style.background = "blue";
    } else {
        document.body.style.background = "purple";
    }
}

window.addEventListener("resize", handleResize);

const setup = () => {
    let btnTry = document.getElementById("btnTry");

    btnTry.addEventListener("mouseover", onMouseover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", onMouseout);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnContent").addEventListener("click", changeContent);
}

const onMouseover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>"
}

const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Click!<br>"
}

const onMouseout = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>"
}

const withoutBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        //listItems[i].style.listStyleType = "none";
        //listItems[i].style.backgroundColor = "red";

        //listItems[i].className = "listStyleTypeNone colorRed";

        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.remove("listStyleTypeDisc");
        listItems[i].classList.add("colorRed");
        listItems[i].classList.add("listStyleTypeNone");
    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        //listItems[i].style.listStyleType = "disc";
        //listItems[i].style.backgroundColor = "white";

        //listItems[i].className = "listStyleTypeDisc colorWhite";

        listItems[i].classList.remove("colorRed");
        listItems[i].classList.remove("listStyleTypeNone");
        listItems[i].classList.add("colorWhite");
        listItems[i].classList.add("listStyleTypeDisc");
    }
}

const changeContent = () => {
    document.getElementById("textContent").textContent = "<a href='http://vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML = "<a href='http://vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);
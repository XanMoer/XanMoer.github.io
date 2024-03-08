const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", onMouseOver);
}

const onMouseOver = () => {
    document.getElementById("imgPhoto").src = "Images/happy.webp";
    document.getElementById("imgPhoto").alt = "happy pope";
    document.getElementById("txtText").textContent = "School of cats";
}
window.addEventListener("load", setup);
const setup = () => {
    document.getElementById("submit").addEventListener("click", onSubmit);
}

const onSubmit = () => {
    let text = document.getElementById("txtText").value;
    let amount = 0;
    text = text.toLowerCase();
    while (text.includes("an")) {
        amount++;
        text = text.replace("an", "");
    }
    console.log(amount);
}

window.addEventListener("load", setup);
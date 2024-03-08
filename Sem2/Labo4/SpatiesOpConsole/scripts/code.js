const setup = () => {
    document.getElementById("submit").addEventListener("mousedown", onSubmit);
}

const onSubmit = () => {
    let text = document.getElementById("txtText").value
    let newText = "";
    text = text.replaceAll(" ", "");
    for (let i = 0; i < text.length; i++) {
        newText += text[i] + " ";
    }
    console.log(newText);
}
window.addEventListener("load", setup);
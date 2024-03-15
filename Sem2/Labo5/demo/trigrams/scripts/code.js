const setup = () => {
    document.getElementById("submit").addEventListener("click", onSubmit);
}

const onSubmit = () => {
    const word = document.getElementById("txtInput").value;
    for (let i = 0; i < word.length-2; i++) {
        document.getElementById("output").innerHTML += word.slice(i, i + 3) + "</br>";
    }
}
window.addEventListener("load", setup);
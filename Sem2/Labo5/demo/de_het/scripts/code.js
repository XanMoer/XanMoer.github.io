const setup = () => {
    document.getElementById("submit").addEventListener("click", onSubmit);
}

const onSubmit = () => {
    let words = document.getElementById("txtInput").value.toLowerCase();

    let woordenVerzameling = words.split(" ");
    for (let i = 0; i < woordenVerzameling.length; i++) {
        if (woordenVerzameling.at(i) === "de"){
            woordenVerzameling[i] = "het";
        } else if (woordenVerzameling.at(i) === "het") {
            woordenVerzameling[i] = "de";
        }
    }

    console.log(woordenVerzameling.join(" "))

    // words = words.replaceAll("de", "het");
    document.getElementById("output").innerText = woordenVerzameling.join(" ");
}

window.addEventListener("load", setup);
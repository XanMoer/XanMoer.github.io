const setup = () => {
    let gemeente = "";
    let gemeenten = [];

    while(gemeente.toLowerCase() !== "stop") {
        gemeente = window.prompt("Geef een gemeente in:");
        if(gemeente.toLowerCase() !== "stop" && !gemeenten.includes(gemeente.toLowerCase())) {
            gemeenten.push(gemeente.toLowerCase());
        }
    }

    gemeenten = gemeenten.sort(compare);

    document.getElementById("gemeenten").innerHTML = "\n" +
        "    <label for=\"output\">Gemeente: </label>\n" +
        "    <select name=\"keuze\" size=\"1\" id=\"output\"></select>";

    for (let gemeentenKey in gemeenten) {
        document.getElementById("output").innerHTML += "<option>" + gemeenten[gemeentenKey] + "</option>";
    }
}

const compare = (a, b) => {
    return a.localeCompare(b);
}

window.addEventListener("load", setup);
const setup = () => {
    let str = "";
    const amount = 6;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < i; j++) {
            str += "*";
        }
        console.log(str);
        str = "";
    }
}
window.addEventListener("load", setup);
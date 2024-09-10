window.addEventListener('load', init);
const p = document.createElement("p");
p.id = "p";

function init() {
    const form = document.querySelector("#form");
    p.innerText = 'Result will go here';
    document.body.appendChild(p);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showResult();
    });
}

function showResult() {
    const input = form.querySelector("input[name='test']");
    let result = input.value;
    if (result === 'Shrek') {
        p.innerText = 'Get Shrekt';
        const shrimage = document.createElement("img");
        shrimage.classList.add('shrimmy');
        shrimage.src = "./img/Shrek.gif"
        document.body.appendChild(shrimage);
    } else if (result === 'Crash') {
        p.innerText = '';
        const crash = document.createElement("img");
        crash.classList.add('crash');
        crash.src = "./img/Crash.gif"
        document.body.appendChild(crash);
    } else if(result === "UserId = 1 OR 1=1;") {
        const hack = document.createElement("img");
        hack.classList.add('hack');
        hack.src = "./img/Hack.gif"
        document.body.appendChild(hack);
    } else {
        p.innerText = result;

    }
}
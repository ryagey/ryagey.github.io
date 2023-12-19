window.onload = function() {
    let name = "";
    while (!name) {
        name = prompt("Введи своє ім'я");
        if (name === null) {
            continue;
        }
        name = name.trim();
    }
    document.getElementById("greeting").innerHTML = 'Вітаю, '+name+', на моїй сторінці!';
};
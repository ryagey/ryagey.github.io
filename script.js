window.onload = function() {
    let name = "";
    while (!name) {
        name = prompt("����� ��� ��'�");
        if (name === null) {
            continue;
        }
        name = name.trim();
    }
    document.getElementById("greeting").innerHTML = '³���, '+name+', �� ��� �������!';
};
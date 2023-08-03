
for (let i = 0; i < 16; i++) {
    let cell = document.createElement('div');
    cell.className = "cell";
    cell.textContent = i;
    document.getElementById('container').appendChild(cell);
}

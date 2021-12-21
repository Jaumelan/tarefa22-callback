function concordar(flor) {
    alert(flor + " é muito bonita");
}

function inputDoUsuario(callback) {
    var gosto = prompt("Qual sua flor favorita?");
    callback(gosto);
}

inputDoUsuario(concordar);
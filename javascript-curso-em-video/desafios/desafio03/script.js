function contador() {
    var inicioInput = window.document.querySelector('input#inicio');
    var inicio = Number(inicioInput.value);

    var fimInput = window.document.querySelector('input#fim');
    var fim = Number(fimInput.value);

    var passoInput = window.document.querySelector('input#passo');
    var passo = Number(passoInput.value);

    var resultado = window.document.querySelector('div#resultado');

    resultado.innerHTML = '';

    if (isNaN(inicio) || inicioInput.value.trim() === "" || inicio === 0) {
        window.alert('Digite um valor válido e maior que zero para o início');
        return;
    }

    if (isNaN(fim) || fimInput.value.trim() === "" || fim <= inicio) {
        window.alert('Digite um valor válido e maior que o início para o fim');
        return;
    }

    if (isNaN(passo) || passoInput.value.trim() === "" || passo <= 0 || passo > fim - inicio) {
        window.alert('Digite um valor válido e maior que zero para o passo');
        return;
    }

    for (var c = inicio; c <= fim; c += passo) {
        resultado.innerHTML += `${c} &#128073; `;
    }
    resultado.innerHTML += `\u{1F3C1}`
}
// CÓDIGO AINDA SERÁ OTIMIZADO -----

// variavel com os alunos
var alunos = document.querySelectorAll(".linha")

// calculo de média e verificação
for (i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];
    var tdNota1 = aluno.querySelector(".nota1");
    var tdNota2 = aluno.querySelector(".nota2");
    var tdNota3 = aluno.querySelector(".nota3");
    var tdNota4 = aluno.querySelector(".nota4");
    var tdMed = aluno.querySelector(".media");
    var tdSitu = aluno.querySelector(".situacao");
    var n1 = Number(tdNota1.textContent);
    var n2 = Number(tdNota2.textContent);
    var n3 = Number(tdNota3.textContent);
    var n4 = Number(tdNota4.textContent);
    var med = Number(tdMed.textContent);
    var media = calculaMedia(n1,n2,n3,n4);
    var nota1Valida = validaN1(n1);
    var nota2Valida = validaN2(n2);
    var nota3Valida = validaN3(n3);
    var nota4Valida = validaN4(n4);
    tdMed.textContent = media;

    if (!nota1Valida) {
        nota1Valida = false;
        tdSitu.outerHTML = "Valor inválido";
        tdSitu.classList.add("aluno-invalido")
        console.log("capivara")
    }
    if (!nota2Valida) {
        nota2Valida = false;
        tdSitu.outerHTML = "Valor inválido";
        tdSitu.classList.add("aluno-invalido")
    }
    if (!nota3Valida) {
        nota3Valida = false;
        tdSitu.outerHTML = "Valor inválido";
        tdSitu.classList.add("aluno-invalido")
    }
    if (!nota4Valida) {
        nota4Valida = false;
        tdSitu.outerHTML = "Valor inválido";
        tdSitu.classList.add("aluno-invalido")
    }

    if (nota1Valida && nota2Valida && nota3Valida && nota4Valida) {
        var mediaValida = calculaMedia(n1,n2,n3,n4);
        tdMed.textContent = mediaValida
    } else {
        tdMed.textContent = "Algum valor está inválido!"
    }
}

// função para calculo de média
function calculaMedia(n1,n2,n3,n4) {
    var media = (n1+n2+n3+n4)/4;
    return media.toFixed(2);
}

function validaN1(n1) {
    if (n1 >= 0 && n1 <= 10) {
        return true;
    } else {
        return false;        
    }
}

function validaN2(n2) {
    if (n2 >= 0 && n2 <= 10) {
        return true;
    } else {
        return false;        
    }
}

function validaN3(n3) {
    if (n3 >= 0 && n3 <= 10) {
        return true;
    } else {
        return false;        
    }
}

function validaN4(n4) {
    if (n4 >= 0 && n4 <= 10) {
        return true;
    } else {
        return false;        
    }
}

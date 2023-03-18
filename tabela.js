var adcionar = document.querySelector("#Adcionar-aluno")

adcionar.addEventListener("click", function adcionarAluno() {
    var form = document.querySelector("#form");
    var alunos = pegaAlunoDoFormulario(form);
    var erros = validaAluno(alunos);

    if (erros.length > 0) {
        mensagensDeErro(erros);
        return;
    }

    adcionaAlunoNaTabela(alunos);
    form.reset();

    var mensagensErro = document.querySelector("#erro")
    mensagensErro.innerHTML = "";
})

function pegaAlunoDoFormulario(form) {
    var alunoForm = { 
        nome: form.nome.value,
        nota1: form.nota1.value,
        nota2: form.nota2.value,
        nota3: form.nota3.value,
        nota4: form.nota4.value,
        media: calculaMedia(Number(form.nota1.value),Number(form.nota2.value),Number(form.nota3.value),Number(form.nota4.value)),
    }
    return alunoForm;
}   

function defineTd(info, classe) {
    var td = document.createElement("td");
    td.textContent = info;
    td.classList.add(classe);
    return td;    
}

function defineTr(alunos) {
    var tr = document.createElement("tr");
    tr.classList.add("linha");

    tr.appendChild(defineTd(alunos.nome, "nome"));
    tr.appendChild(defineTd(alunos.nota1, "nota1"));
    tr.appendChild(defineTd(alunos.nota2, "nota1"));
    tr.appendChild(defineTd(alunos.nota3, "nota1"));
    tr.appendChild(defineTd(alunos.nota4, "nota1"));
    tr.appendChild(defineTd(alunos.media, "media"));

    if (alunos.media <= 3) {
        var situacaoTd = document.createElement("td");
        situacaoTd.classList.add("situacao");
        situacaoTd.classList.add("reprovado");
        situacaoTd.textContent = "REPRO";
        tr.appendChild(situacaoTd)
    } else if (alunos.media < 7) {
        var situacaoTd = document.createElement("td");
        situacaoTd.classList.add("situacao");
        situacaoTd.classList.add("recuperacao");
        situacaoTd.textContent = "RECUP";
        tr.appendChild(situacaoTd)
    } else {
        var situacaoTd = document.createElement("td");
        situacaoTd.classList.add("situacao");
        situacaoTd.classList.add("aprovado");
        situacaoTd.textContent = "APROV";
        tr.appendChild(situacaoTd)
    }  
    return tr;
}

function adcionaAlunoNaTabela(alunos) {
    var alunoTr = defineTr(alunos);
    var tabela = document.querySelector(".tabela");
    tabela.appendChild(alunoTr);
}

function validaAluno(alunoForm) {
    var erros = [];

    if (alunoForm.nome.length == 0) {
        erros.push("Nome está vazio")
    }    
    if (alunoForm.nota1.length == 0) {
        erros.push("Nota 1 está vazio")
    }
    if (alunoForm.nota2.length == 0) {
        erros.push("Nota 2 está vazio")
    }
    if (alunoForm.nota3.length == 0) {
        erros.push("Nota 3 está vazio")
    }
    if (alunoForm.nota4.length == 0) {
        erros.push("Nota 4 está vazio") 
    }
    if(!validaN1(alunoForm.nota1)) {erros.push("Nota 1 está inválida")};
    if(!validaN2(alunoForm.nota2)) {erros.push("Nota 2 está inválida")};
    if(!validaN3(alunoForm.nota3)) {erros.push("Nota 3 está inválida")};
    if(!validaN4(alunoForm.nota4)) {erros.push("Nota 4 está inválida")};
    return erros;
}

function mensagensDeErro(erros) {
    var ul = document.querySelector("#erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li);
    });      
}

// CÓDIGO AINDA SERÁ CONTINUADO -----

let listaAlunos = [
    "Alef Mourão dos Santos", 
    "Andrei Alexei Levy Buslik",  
    "Bruno Rafael", 
    "Danilo Silva Marques", 
    "Dayane Rodrigues Soares", 
    "Diego de Souza Sampaio",
    "Emerson de Matos Felisberto",
    "Gabriel de Oliveira Pinho", 
    "Henrique Pereira da Silva", 
    "Jhone Silva de Souza Justino", 
    "Jose Gildevan da Silva Santos", 
    "João Francisco dos Santos Chagas Goulart", 
    "Julia Torres Furtado Lima", 
    "Jônathas da Silva Maciel", 
    "Lorena Oliveira Muniz Ferreira",
    "Lucas Luna Cavalcante", 
    "Marcos Gabriel Pereira Silva",
    "Marcos Guilherme Barbosa da Silva",
    "Thays Ferreira Melo",
    "Yury Negreiros Santos"
    ]

    //console.log(listaAlunos)
    
function carregarTabela(numeroPagina) {

    tamanhoListaAlunos = Math.ceil((listaAlunos.length) / 5)
     if (numeroPagina <= 0 || numeroPagina > tamanhoListaAlunos) {
     return
    }

    fim  = (numeroPagina * 5)
    inicio = fim - 5
    textoLinhas = ""

    for(i = inicio; i < fim; i++){
        if (listaAlunos[i] == undefined){
            break
        }
        textoLinhas += `<tr><td>${Number(i) + 1}</td><td>${listaAlunos[i]}</td><td><span style="cursor:pointer;" onclick= "trocar(${Number(i) + 1}, 's')">&#9650; </span>
        <span style="cursor:pointer;" onclick= "trocar(${Number(i) + 1}, 'd')">&#9660;</span></td></tr>`
    }

    document.getElementById("corpoTabela").innerHTML = textoLinhas

    numeroListaPagina = document.getElementById("pagina-" + numeroPagina);
    numeroListaPagina.classList.add("active");

    paginaAtual = document.getElementById("paginaAtual");

    if (paginaAtual.value != '') {
        numeroListaPagina = document.getElementById("pagina-" + paginaAtual.value);
        numeroListaPagina.classList.remove("active");
    }

    paginaAtual.value = numeroPagina;
}
    
    

function trocar(numeroLinha, botao) {

    let auxiliar;

    numeroLinha = numeroLinha - 1;
    auxiliar = listaAlunos[numeroLinha];

        if (botao == 's' && numeroLinha != 0) {
            listaAlunos[numeroLinha] = listaAlunos[numeroLinha - 1];
            listaAlunos[numeroLinha - 1] = auxiliar;

        }else {

        if (numeroLinha < 19) {
            listaAlunos[numeroLinha] = listaAlunos[numeroLinha + 1];
            listaAlunos[numeroLinha + 1] = auxiliar;
            
        }
    }
         carregarTabela(document.getElementById("paginaAtual").value);
}

    listaPagina = `<li class="page-item"><a class="page-link" href="#" onclick="carregarTabela(paginaAtual.value- 1)">Anterior</a></li>`
       
    tamanhoListaAlunos = Math.ceil((listaAlunos.length) / 5)

       for(i = 0; i < tamanhoListaAlunos; i++){
           listaPagina += `<li id="pagina-${Number(i) + 1}" class="page-item"><a class="page-link" href="#" onclick="carregarTabela(${Number(i) + 1})">${Number(i) + 1}</a></li>`
        }

    listaPagina += `<li class="page-item"><a class="page-link" href="#" onclick="carregarTabela(Number(paginaAtual.value) + 1)">Próximo</a></li>`
    document.getElementById("paginacao").innerHTML = listaPagina
      
    carregarTabela(1)
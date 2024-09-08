function pesquisar(){
    //console.log("clicou");

    let section = document.getElementById("resultados-pesquisa"); //para pegar documentos / dados no HTML
    //console.log(section);

    //camel case --> convenção para nomear variaveis com mais de uma palavra
    let campoPesquisa = document.getElementById("campo-pesquisa").value; 
    //value -> valor que vai estar escrito dentro da tag
    console.log(campoPesquisa);

    //se campoPesquisa for uma string sem nada 
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nada encontrado</p>";
        return;
    }

    
    //coloca o conteudo digitado em letras minusculas
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let jogo = "";
    let historia = "";
    let habilidades = "";

    for(let dado of dados){ //para cada dado de uma lista de dados
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        jogo = dado.jogo.toLowerCase()
        historia = dado.historia.toLowerCase()
        habilidades = dado.habilidades.toLowerCase()

        //se titule includes campoPesquisa
        //entao faça...
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ||jogo.includes(campoPesquisa)|| historia.includes(campoPesquisa)|| habilidades.includes(campoPesquisa)){
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.habilidades}</p>
                <p class="descricao-meta">${dado.historia}</p>
                <p class="descricao-meta">${dado.jogo}</p>
            </div> 
        `}
        //console.log(dado.titulo.includes(campoPesquisa));
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
    
    section.innerHTML = resultados;
};

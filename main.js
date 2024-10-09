import './src/assets/scss/index.scss'

window.addEventListener("load", iniciarProcesso)
document.getElementById("inputBusca")
    .addEventListener("keyup", iniciarBusca)

console.log("=== EXECUTANDO CONTEXTO GLOBAL !!! ====")
let livros = [] // Global

async function iniciarProcesso() {
    livros = await buscarLivros()
    construirTabelaComLivros(livros)
}

function iniciarBusca(){
    const valorDeBusca = document.getElementById("inputBusca").value
    const livrosFiltrados = livros.filter((livro) => livro.title.includes(valorDeBusca))

    construirTabelaComLivros(livrosFiltrados)
}

async function buscarLivros() {
    const response = await fetch("https://api-aula.up.railway.app/livros")
    const livros = await response.json()

    return livros
}

function construirTabelaComLivros(livros) {
    const corpoTabela = document.getElementById("tabelaLivros__tbody")

    corpoTabela.innerHTML = ""
    const funcaoDeVolta = livro => {
        corpoTabela.innerHTML += `
        <tr>
            <td>${livro.id}</td>
            <td>${livro.title}</td>
            <td>${livro.description}</td>
        </tr>
    `
    }

    livros.forEach(funcaoDeVolta);
}
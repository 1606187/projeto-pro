import './src/assets/scss/index.scss'

console.log("Importação funcionou!")

window.addEventListener("load", iniciarProcesso)

async function iniciarProcesso() {
    // 1 - Fazer chamada para a API e pegar todos os livros
    const livros = await buscarLivros()
    // 2 - Botar os livros na tabela
    construirTabelaComLivros(livros)
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
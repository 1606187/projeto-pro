import './src/assets/scss/cadastro.scss'

console.log("Importação funcionou no cadastro!")

document.getElementById("btnCadastrar")
.addEventListener("click", iniciarProcesso)

// TODO - Refatorar para separar funções e módulos
async function iniciarProcesso() {
    // ENTRADAS DE DADOS - Pegando da tela titulo e descrição
    const titulo = document.getElementById("inputTitulo").value
    const descricao = document.getElementById("inputDescricao").value

    // PROCESSAMENTO - Fazendo chamada (fetch) para a API
    const settings = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: titulo, description: descricao })
    }

    const fetchResult = await fetch("https://api-aula.up.railway.app/livros", settings)
    const data = await fetchResult.json()
    console.log(data)

    // SAÍDA DE DADOS
    // TODO - Terminar lógica para mostrar sucesso ou erro em tela
}

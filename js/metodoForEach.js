const elementoParaInserirLivros = document.getElementById('livros')

const valorTotalElemento = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
    valorTotalElemento.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel'

        elementoParaInserirLivros.innerHTML += `
            <div class="livro anim-livro">
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
                <img class="${disponibilidade}" src="${livro.imagem}"
                    alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            </div>
        `
    });
}
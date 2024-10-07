const form = document.getElementById('form-contato');
const tabelaContatos = document.querySelector('#tabela-contatos tbody');
let contatos = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (contatos.some(contato => contato.nome === nome)) {
        alert('Contato já existe!');
        return;
    }

    contatos.push({ nome, telefone });

    atualizarTabela();
    
    form.reset();
});

function atualizarTabela() {
    tabelaContatos.innerHTML = '';
    
    contatos.forEach(contato => {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `<td>${contato.nome}</td><td>${contato.telefone}</td>`;
        tabelaContatos.appendChild(novaLinha);
    });
}

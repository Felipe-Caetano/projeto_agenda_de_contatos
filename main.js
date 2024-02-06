function adicionarContato() {
    // Obter valores do formulário
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    // Validar se os campos estão preenchidos
    if (nome === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criar nova linha na tabela
    var tabelaContatos = document.getElementById("tabelaContatos");
    var novaLinha = tabelaContatos.insertRow(-1);

    // Inserir células na nova linha
    var celulaNome = novaLinha.insertCell(0);
    var celulaTelefone = novaLinha.insertCell(1);

    // Preencher células com os valores do formulário
    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;

    // Limpar campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}

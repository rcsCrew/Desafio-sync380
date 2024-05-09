document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var nome = document.getElementById('nome').value;
  var idade = document.getElementById('idade').value;
  var enderecoRua = document.getElementById('endereco-rua').value;
  var enderecoBairro = document.getElementById('endereco-bairro').value;
  var enderecoEstado = document.getElementById('endereco-estado').value;
  var biografia = document.getElementById('biografia').value;

  var table = document.getElementById('dataTable');
  var rows = table.getElementsByTagName('tr');

  // Verifica se já existe uma linha com o mesmo nome
  var found = false;
  for (var i = 1; i < rows.length; i++) { // Começa do 1 para ignorar o cabeçalho
    var cells = rows[i].getElementsByTagName('td');
    if (cells.length > 0 && cells[0].textContent === nome) {
      // Se encontrar um usuário com o mesmo nome, atualiza os dados
      cells[1].textContent = idade;
      cells[2].textContent = cidade;
      found = true;
      break;
    }
  }

  // Se não encontrou um usuário com o mesmo nome, adiciona uma nova linha
  if (!found) {
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.textContent = nome;
    cell2.textContent = idade;
    cell3.textContent = cidade;
  }

  // Limpa o formulário
  this.reset();
});
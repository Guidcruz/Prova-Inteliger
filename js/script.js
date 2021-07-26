var html = '<div class="col-4">' +
            /* 
                Inserir o html dos cards dentro deste bloco
                Após isso, utilize a variável HTML para adicionar o conteúdo na div #cards-prova 
            */
                '<div class="card">'+
                    '<div class="card-body">'+
                        '<img src="./img/perigo.png" class="card-image">'+
                        '<h5 class="card-title">Título</h5>'+
                        '<p class="card-text">Conteúdo, conteúdo, conteúdo, conteúdo.</p>'+
                        '<a href="#" class="btn btn-dark">botão</a>'+
                    '</div>'+
                '</div>'
            + '</div>';

// Início do for para inserção dos cards.

for(var i = 0; i < 3; i++){
  $('#cards-prova').append(html);
}


// Início do for para mostrar por meio do console.log() valores de 1 a 100
// Utilize as condicionais para diferenciar ímpar de par

var x = 101;
for(var i = 1; i < x; i++){
  if(i % 2 == 0){
    console.log(i + ' - é Par');
  }else{
    console.log(i + ' - é Impar');
  }
};


// Início da função ajax ( o método de chamada da função pode ser executado como preferível 
$('#cep').on('blur', function(){
  let cep = $('#cep').val();
  
  $.ajax({
    url: "https://viacep.com.br/ws/"+cep+"/json",
    type: "get",
    dataType: "json",
    success: function(dados){
      $('#rua').val(dados.logradouro);
      $('#bairro').val(dados.bairro);
      $('#cidade').val(dados.localidade);
      $('#estado').val(dados.uf);
      $('#numero').trigger('focus');
    },
  });
});

// Preencher a tabela -----------------------------------------------------------
function preencherTabela(){
  let cadastrar = false;
  let mensagem = "";

  if($('#nome').val() == ""){
    mensagem += "Você deve inserir um Nome.\n";
  }

  if($('#idade').val() == ""){
    mensagem += "Você deve inserir uma Idade.\n";
  }

  if($('#cep').val() == ""){
    mensagem += "Você deve inserir um CEP.\n";
  }

  if($('#rua').val() == ""){
    mensagem += "Você deve inserir uma Rua.\n";
  }

  if($('#numero').val() == ""){
    mensagem += "Você deve inserir um Número.\n";
  }

  if($('#bairro').val() == ""){
    mensagem += "Você deve inserir um Bairro.\n";
  }

  if($('#cidade').val() == ""){
    mensagem += "Você deve inserir uma Cidade.\n";
  }

  if($('#estado').val() == ""){
    mensagem += "Você deve inserir um Estado.\n";
  }

  if(mensagem != ""){
    alert(mensagem);
  }
  else{
    cadastrar = true;
  }

  if(cadastrar == true){
    var btnDelete = `<button class="btn btn-danger" id="deletar" onclick="deletarLinha()">Deletar</button>`;

    $('.tbody').append(`
      <tr>
        <td>${$('#nome').val()}</td>
        <td>${$('#idade').val()}</td>
        <td>${$('#cep').val()}</td>
        <td>${$('#rua').val()}</td>
        <td>${$('#numero').val()}</td>
        <td>${$('#bairro').val()}</td>
        <td>${$('#cidade').val()}</td>
        <td>${$('#estado').val()}</td>
        <td id="deletar" onclick="deletarLinha()">${btnDelete}</td>
      </tr>  
    `);
    limpaFormulario();
  };
};

// Deletar linha ---------------------------------------------------------------
function deletarLinha(){
  $(".tbody").on("click", "#deletar", function(){
    $(this).closest('tr').remove(); 
    })
}

// Deletar tabela --------------------------------------------------------------
function deletarTabela(){
  $('.tbody').empty();
};

// Limpar Formulario -----------------------------------------------------------
function limpaFormulario(){
  $('#rua').val("");
  $('#bairro').val("");
  $('#cidade').val("");
  $('#estado').val("");
  $('#numero').val("");
  $('#nome').val("");
  $('#idade').val("");
  $('#cep').val("");
}

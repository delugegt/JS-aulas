function aparecerLog() {
  console.log("botão")
};

function aparecerTxt() {
  document.getElementById('apareceu').style.display = 'none';
}

function desaparecerTxt() {
  document.getElementById('apareceu').style.display = 'block';
}


//aqui

function enviarTxt() {
  var input1 = document.getElementById('enviar');

  //console.log(input1);
  document.getElementById(input1).innerHTML = 'enviar';
  
}


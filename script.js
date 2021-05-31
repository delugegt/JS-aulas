function aparecerLog() {
  console.log("botão")
};

function aparecerTxt() {
  document.getElementById('apareceu').style.display = 'none';
}

function desaparecerTxt() {
  document.getElementById('apareceu').style.display = 'block';
}


var valorCapturado = "";
function enviarTxt() {  
    
    valorCapturado = document.getElementById('input1').value; 
    document.getElementById('valorDigitado').innerHTML = valorCapturado;
    console.log(valorCapturado);
};



function cat_check() {

var bxTxt = document.getElementById('chkBoxTxt');
let hideBox = document.getElementById('chkBox');


  if(hideBox.checked === true) {
    bxTxt.style.display = "none";
    hideBox.value = "active";
  } else {
    bxTxt.style.display = "initial";
    hideBox.value = "disable";
  }
  //console.log(hideBox.value);
}

function enviarTxt2 () {
  
  var text1 = document.getElementById("txt1");
  var text2 = document.getElementById("txt2");
  var user = [];

  user.push(text1.value);
  user.push(text2.value);
  console.log(user);
  document.getElementById('userReceive').innerHTML = user;
}






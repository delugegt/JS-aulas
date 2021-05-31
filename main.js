// hoisting 

function fn () {
  log('Hoisting de função');

  function log(value) {
    console.log(value);
  }
}
//boa prática declarar função antes de usar. Função fn vai funcionar

fn();


//imutabilidade
//definir variável

const user = {
  name: 'jorge',
  lastName: 'Lopes'
};
//função que pra cada resposta representando a formatação user responsa full name 
function getUserwithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`
  }
}                  
//define variavel constante que recebe resultado da função com entrada user 
const userwithFullName = getUserwithFullName(user);
//log
console.log(userwithFullName);
*/




//escopo de bloco
//var não entende escopo de bloco.. só de função e global
{
  var escopo = 'opa'
}
//let entende escopo de bloco 
{
  let escopo = 'opa'
}

{
  const user = ['joao', 'jorge', 'marcela'];
  //adicionar
  user.push('juliana');
  //remover
  user.shift();
  //alterar
  user[0] = 'Pretinha'
  console.log(user)
}
*/


//replace procura um valor e altera para outro
const replacedText = 'texto'.replace('text', 'txet');
console.log(replacedText);

//numero para string 
MyNumber = 12345;
const numerocomostring = MyNumber.toString();
console.log(typeof numerocomostring);

//parseFloat parseInt




//objeto
let user = {
  name: 'jorge'
};

//alterar a propriedade do obj
user.name = 'outro nome 1';
user['name'] = 'outro nome 2';

//console.log(user);

const prop = 'name';
user[prop] = 'outro nome 3';
//user['prop'] assim eu criaria uma propriedade chamada prop


// criando a prop 
user.lastName = 'Lopes de Oliveira';
delete user.name;

console.log(user);

*/



const user = {
  name: 'jorge',
  lastName: 'lopes de oliveira'
}
//props do obj
//console.log(Object.keys(user));
//valores das props
//console.log(Object.values(user));
//arrays listas de prop e valores
//console.log(Object.entries(user));

//concatenar ou mergear props do obj
Object.assign(user, {fullName: 'Jorge Lopes de Oliveira Silva'});
console.log(user);
*/



function fn() {
  return 'code Here';
}
fn.prop = 'posso criar a prop';

//receber parametro
const logFnResult = fnParam => console.log(fnParam());
logFnResult(fn);
//compor um permissionamento com função:
//recebe fnParam que executa ao receber allowed
const controlFnExec => fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
}
//fn é um obj


const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //executa
handleFnExecution(); // não executa

function controlFnExec(fnParam) {
  return function(allowed) {
    if (allowed) {
    fnParam();
    }
  }
}

(() => {
  this.name = 'arrow function';
  const getNameArroFn = () => this.name;

  function getName() {
    return this.name;
  }

  const user = {
    name: 'nome do obj em execução',
    getNameArroFn,
    getName
  }

  console.log(user.getNameArroFn());
  console.log(user.getName());
})



//array
//iterar
PermissionStatus.forEach((person, index, arr) => {
  console.log(`nome: ${person.name}`);
});

//filtrar apenas MAN
const mens = persons.filter(person => person.gender === gender.MAN);
console.log(mens);

//retornar um novo
const personsWithCouse = persons.map(person => {
  person.couse = 'introdução ao js';
});

//condição
condicao ? valor1 : valor2

true ? 'foo' : 'bar' //retorna foo
false ? 'foo' : 'bar' //retorna bar
///////// orientação a objeto

// __proto__ -> prototype -> constructor



//banco de dados
//EXEMPLO1
var db = openDatabase('Dbexemplo', '1.0', 'minhaBase', 4048) ,
db.transaction(function(criar) {
  criar.executeSql("CREATE TABLE users (ID PRIMARY KEY, nome TEXT, senha TEXT");
})

//EXEMPLO2
var capturando = "";
function capturar() {
  capturando = document.getElementById('input1').value;
  documento.getElementById('//id tag vazia').innerHTML = capturando;

}

//exemplo3


//adicionar o ID 
//evento onclick para o botão tipo submit
//tag vazia com id especifico 
//a var no js tem que ser vazia para capturar o valor digitado



const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function (e) {
  if(hideBox.checked) {
    List.style.display = "none";
  } else {
    list.style.display = "initial";
  }
})


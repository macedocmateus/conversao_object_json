// Criação do objeto estudante e atribuindo valores

let estudante = {

name: 'josé',
idade: 42,
administrador: false,
cursos: ['html', 'css', 'js'],
casado: null

};

// Cria uma variavel para receber a conversao de objeto para json e imprime ela
// objeto virá um conjunto textual json

let json = JSON.stringify(estudante);
console.log(json);
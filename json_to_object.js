// Criando usuario em texto no formato json

let usuario = '{"nome": "mateus", "idade": "30", "administrador": "true", "cursos": ["html", "css", "javascript"]}';

// Converte o informação textual em json para objeto e imprime o valor
usuario = JSON.parse(usuario);

console.log(usuario.nome); 
console.log(usuario.idade); 
console.log(usuario.administrador);
console.log(usuario.cursos);
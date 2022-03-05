# Considerações
Primeiramente peço perdão por não terminar esse app, mas como estava somente aprendendo como faço as coisas passei muita raiva e resolvi fazer ele todo do zero. Provalvemente coloquei o nome de TODO-list mas como ainda não criei o Repositório provavelmente irá encontrar ele com outro nome.

## Entendendo o Backend

Primeiro de tudo estudamos o Frontend.O frontend cuida da parte de exibição dos dados. Agora vamos aprender sobre o backend. Nessa parte cuidamos dos dados em si. Todas as regras do negócio e dados que são armazenados pelo o usuário e termos maior consistência da aplicação.

O frontend e Backend conversão através de requisições onde o 'Servidor Web' que faz o meio de campo entre o front e backend.

### Executando códigos JS no Terminal

``` 
function sayMyName(name) {
  console.log(name);
}

sayMyName('Jean Carlos dos Santos Maidana ')
```

Resposta do console

```
 jean@jeanPc  ~/www/NodeJS_and_MongoDB   introducao ± node index.js
Jean Carlos dos Santos Maidadna
```

## Entrada e Saida de Dados
  Para usarmos a entrada de dados do usuário;

  ```
    const process = require('process')
    console.log(process.argv)

    node io.js --myName Jean -> [
      argumentos padrão,
      --myName,
      Jean
    ]
  ```

Se necessitamos em um script a entrada de alguns parâmetros, podemos usar o process para realizar este trabalho.

Podemos usar o *process.stdou.write(message)* para imprimirmos uma mensagem no console.
`
 process.stdout.write("Qual o seu nome?");
 `

Para a entradad de dados *process.stdin.on('data', (keyboard) => {
 process.stdout.write(`Texto do usuário: ${keyboard}`);
 process.exit();
})*

Chamamos o *process.exit()* para finalizar o request.

## Manipulando arquivos
  Para criarmos arquivos no nosso backend usarmos a biblioteca *fs*

  CREATE ->

  ```
  const fs = require('fs')

fs.writeFile('test.txt','Hello World!', error => {
  console.log(error);
})
  ```

  AppendFile testos dentro do arquivo sem apagar  o que estava guardado.
  
  ```
  const fs = require('fs')

fs.appendFile('test.txt','Hello World!', error => {
  console.log(error);
})
  ```

  Rename

  ```
  const fs = require('fs')

fs.rename('test.txt','test2.txt', error => {
  console.log(error);
})
  ```

  Remove

  ```
  const fs = require('fs')

fs.unlink('test.txt', error => {
  console.log(error);
})
  ```

  O *__dirname* é uma variável de ambiente, onde o node guarda o caminho atual da pasta.

## Chain of Responsibility 
### ( Cadeia de Responabilidades)

Encadeamento de responsabilidades onde cada middleware ira tratar com os dados enviados pela requisição.

### MiddleWares

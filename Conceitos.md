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

## Banco de Dados Relacionais e Não-Relacionais
Bancos de dados são conjuntos de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas. São coleções organizadas de dados que se relacionam de forma a criar algum sentido (informação) e dar mais eficiência durante uma pesquisa ou estudo científico.[2][3][4] São de vital importância para empresas e, há mais de duas décadas, se tornaram a principal peça dos sistemas de informação e segurança. Normalmente existem por vários anos sem alterações em sua estrutura  sistemática. *--Segundo o wikipedia*

#### Bando de dados realcionais

Tem uma estrutua mais organizadas e mais seguras. Onde temos uma tabela mais arquitada.
Além de ser mais seguros;
#### Banco de dados não relacionais.

São menos organizados como os relacionais.
Eles são armazenadas por chave e valor;
Porém são um pouco mais rápidos que os relacionais.
Onde guardamos os nossos dados em forma de documento, através do mongoDB.

### O que é mongoDB?

É um banco de dados orientados a Documentos.
Guardando em forma de json em sua base.
O mongoDB internamente representa os documentos Json em um formato chamado BSON que é uma versão binária-encodada do JSON para incluir alguns tipos extra de formatos de dadaos e para codificação e decodificação em linguagens diferentes.

SQL Terms/ Concepts
  -  dataBAse - dataBase
  -  table - colletction
  -  row - Documents ou Bson documents
  -  column -  Fields
  -  index - index
  -  table joins - References or embedded documents;


### EJS

É uma ferramenta para rederização de páginas.
Conseguimos embutir códigos JS para renderizar  as paginas.

O *EJS* não é lido diretamente no front, ele é utilizado para montar o html que depois sim é lido no front.

Podendo componetização das views com so dados gerados.

Podendo fazer o reuso dos códigos e deixar o app mais organizado.

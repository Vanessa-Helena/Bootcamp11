# Bootcamp11

# Back End

# Métodos HTTP

GET: Buscar informações do back-end

POST: Criar uma informação no back-end

PUT: Alterar uma informação no back-end

PATCH: Alterar uma informação específica no back-end

DELETE: Deletar uma informação no back-end

Não é possível teste o método POST, PUT, PATCH e DELETE no navegador. Somente conseguimos testar o GET. Mas tem uma ferramenta chamada insominia que é possível fazer o teste desses métodos. 

No método PUT como queremos fazer uma atualização no conteúdo precisamos colocar o /:id depois do endereço da rota, pois iremos fazer a atualização de determinado id e não só apresentação dos dados. O mesmo vale para o DELETE, pois queremos deletar certo dado e não todos, então para sabermos qual também colocamos o /:id na rota.  

# Insominia

Nele construimos um workspace para o projeto

Criamos as rotas para fazer as testagens das rotas

Também é possível na parte de Environment fazer uma postagem da URL usada para usar como padrão para as rotas então damos Control e espaço nas URL das rotas para adicionar o caminho que definimos como padrão.

## Tipos de parâmetros

Query Params: Filtros e paginação

Route Params: Identificar recursos (Atualizar/Deletar)

Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)

O query Params vem escrito na rota logo depois da informações padrão da rota, onde podemos especicar determinada informação que gostaríamos de filtar. Eles só são usados em parâmetros do tipo GET. Para fazer essa filtragem, após o nome da rota colocamos um ponto de interrogação "?" e então coloca o quer filtra por exemplo ?título=react se quiser adicionar mais parâmetros de filtragem é só colocar o E comercial "&" por exemplo ?título=react&owner=Vanessa. 

Um explo de como essa rota ficaria: http//:localhost:3333/projects?título=react&owner=Vanessa. 

Digamos que nessa rota eu gostaria de na parte de projetos, filtar o projeto que tem o título react e que o dono do projeto é a Vanessa. 

O request Params basicamente é usada nos médicos de atualizar e deletar, ele identifica qual está sendo deletado ou atualizado. 

Quanto ao paramento Request Body, usamos com os métodos POST e PUT, e usamos o formato JSON para retornar as informações que estão sendo criadas ou deletadas. Porém dentro da aplicação ele não faz isso de forma natural, por isso antes de todas as rotas colocamos a função: app.use(express.json());. Assim conseguiremos retornar JSON sempre que criarmos ou atualizarmos alguma informação. 

# Middleware

Ele é um interceptador de requisições, que interrompem totalmente a requisição ou altera os dados da requisição. Podemos dizer que tudo o que tem um request e response é um middleware. E podemos ter quantos middleware que quisermos dentro de uma rota ou dentro de um .use.

# Front-End

## React

Podemos chama-la de um framework apesar de ser definida como uma lib(biblioteca). Quando se observa o ecossistema do react conseguimos reconhece-la como um framework. Podemos retornar código HTML e css dentro do javascript. 

## React / ReacJS / React Native

### Qual a diferença?

React se refere a biblioteca de construção da interface e da componentização. Ela é usada tanto no reactjs quanto no react Native. 

ReactJS se refere ao comportamento do react diretamente no browser. É um react para o browser.

React Native ela é uma soma da biblioteca do react para interfaces com uma biblioteca que lida com elementos nativos nativos. 

## JSX

É uma funcionalidade dentro do react, que faz uma junção do javascript com o XML que é a sintaxe do HTML. Essa funcionalidade que permite escrever o HTML dentro do javascript. Dessa forma é possível criar os nossas próprios elementos com o react. 

Na prática: 

JSX: HTML dentro do javascript (Javascript XML)

## Imperativo & Declarativa

Com o react fazemos uma programação Declarativa. 

### Qual a diferença?

Na programação **imperativo** descrevemos todas as situações que podem acontecer e comparamos também com a situação anterior então descrevemos o passo a passo para solução de cada um para o computador.

Na programação **declarativa** nunca fazemos comparações com o estado anterior, criamos um componente e ele age conforme a situação atual. Não damos os passo a passo para determinada situação e sim damos as condições de ele executar. 

## Babel / Webpack

O browser não consegue entender toda essa tecnologia que estamos usando. Javascript com HTML mais o Css, o jsx, isso tudo não é compreendido por ele. Então o Babel converte o nosso código em javascript de forma que o browser entenda. Por exemplo ele pega os elementos do código como Export e import que o browser não entende e transforma de uma forma que ele entenda. 

Então temos o Webpack que pega todo o código que o Babel compila e transforma em um único código que é consumido pela nossa aplicação. O Webpack também ensina como o javascript do babel importa o Css, imagens etc. 

Na prática

Babel: converte (transpilar) código do react para um código que o browser entenda. 

Webpack: Para cada tipo de arquivo (.js, css, .png) vai converter um código de uma maneira diferente. 

Loaders: babel-loader, css-loader, img-loader

## Componentização

Seria dividir pedaços da aplicação em componentes, em pedaços. Criamos um pedaço um componente que podemos usar quantas vezes for necessário dentro da aplicação. Tudo no react é componente. 

### Componente

Arquivo que contém um trecho de código da nossa aplicação. Sempre começa com a letra maiúscula, por exemplo App.js. O componente é uma função que retorna HTML. Para todo o componente (arquivo) criado precisa ter o react importado "import React from 'react'". A função criada também leva o nome com a inicial maiuscula igual ao nome do arquivo, exemplo funciona App(). 

Ao final exportamos essa função: Export default App. Esse Export também pode ser feito no início da própria função criada. Exemplo: export default function App() {} o efeito é o mesmo. 

Depois disso o componente está pronto para ser importado em outro aquivo que desejamos usar e nesse arquivo que o componente foi importado podemos usar o componente criado como uma TAG do HTML, exemplo <App>. 

### Propriedade

É alguma informação que podemos passar de um componente pai para um componente filho. Passamos uma probriedade dentro do componente criado. Podemos criar um componente <Header> que é um título um <H1>. Porém quando exporto ele para usá-lo.  Coloco no meu componente Header um título específico que queremos mostrar, então fazemos o seguinte: <Header title="nome do título">. Para isso funcionar e o título aparecer na tela, lá no meu componente precisa passar o props assim: function Header(props). E dentro da função aonde estou criando meu componente defino assim: <Header>

   <H1>{props.title}</H1>

</Header>

Observa que para ser entendido como código dentro do HTML foi colocado chaves "{}" dessa forma o meu componente Header foi criado e tem a propriedade title que eu coloquei lá no Header que exportei para colocar um título qualquer. Se eu não colocasse as chaves seria simplicidade impresso na tela o meu código. 

Uma outra forma de fazer seria desestruturando a minha propriedade, para poder colocar quantas propriedades quisermos nesse componente. Então o código:

function Header({ title }).

<Header>

<H1>{title}</H1>

</Header>

Agora dentro das chaves, coloco a quantidade de propriedade que desejar para aquele componente. 

### Estado & Imutibilidade

Para fazer isso usamos o useStates ele retorna um array com duas posições, uma com o valor inicial que já definimos e a outra com a função para atualizarmos esse valor. É possível desestruturar a variável que guarda esse valor, também em duas partes. 

# Integrando o back com o front

Instalamos o axios, ele faz chamadas API e permite que façamos essa integração. 

Dentro do src criamos a pasta servises e dentro dela criamos o arquivo api.js. Na pasta servises guardamos qualquer arquivo que se comunique com algum serviço externo. 

Dentro do arquivo api.js importamos o axios. E instâciamos ele. Como?

Lembra de ter criado um base_url no insominia? Então usaremos essa mesma URL para instâciarmos então o código completo dentro do arquivo API.js ficaria assim:

import axios from 'axios';

const api = axios.create({

    baseUrl: http//localhost:

});

export default api;

E para que tudo funcione é só importa esse arquivo no App.js

Extra

Função useEffect. 

É usada para disparar funções sempre que tivermos alguma informação alterada ou quando queremos dispara uma função

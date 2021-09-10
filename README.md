# Calculadora octal

Aplicação desenvolvida em React na qual o objetivo era criar uma calculadora que permite realizar operações no sistema octal, um sistema de operação cuja base é 8 e utiliza símbolos de 0 a 7 para representação de quantidade. 

## Link do Surge

https://calculadora-octal-guilherme.surge.sh/

## Funcionalidades

A calculadora tem o sistema octal como padrão e realiza os cálculos de adição, subtração, multiplicação e divisão. Além de realizar contas, ela possibilita que o resultado final seja enviado ao WhatsApp do usuário.  

A calculadora contém:

- **Tela:** uma pequena tela que exibe os cálculos digitados pelo usuário e posteriormente o resultado final da operação;

- **Números:** botões que representam os números de 0 a 7 para realizar os cálculos desejados;

- **Operadores:** botões com os símbolos de adição, subtração, multiplicação e divisão que permitem ao usuário escolher a operação que deseja realizar;

- **Limpar tela:** botão "CE" que permite ao usuário da aplicação limpar a tela e começar suas contas do zero;

- **Conversor para decimal**: botão que ao ser clicado abre um popup exibindo o resultado convertido do sistema octal para o  decimal;

- **Conversor para binário**: botão que ao ser clicado abre um popup exibindo o resultado convertido do sistema octal para o binário;

- **Botão de Resultado:** botão com o sinal de igual que ao ser clicado exibe na tela o resultado da operação digitada pelo usuário;

- **Botão enviar:** botão que ao ser acionado, abre um popup pedindo que o usuário insira seu número de telefone, após inserir o número o usuário recebe uma mensagem em seu WhatsApp com o resultado da operação que estava sendo exibido na tela. 

## Como rodar a aplicação: 

No terminal, clone o repositório onde está situado o projeto:

    git clone <link>

Entre na pasta do projeto:

    cd Calculadora-octal

Instale as dependências: 

    npm install

Execute a aplicação:

    npm start


## Ferramentas utilizadas 🔧

- React Js - Biblioteca Javascript para construir interfaces;
- Axios - Biblioteca para fazer requisições do navegador;
- Styled-components - Bibilioteca que permite a utilização de CSS para estilização de componentes React;

# Sobre

Projeto desenvolvido durante a NLW Setup, evento criado pela Rocketseat, com intuito mostrar na prática o poder da stack NodeJS + React Native.
O Habits é um app para monitoramento de tarefas diárias para auxiliar seus usuários a rastrear suas atividades realizadas e não realizadas.

### Habits Mobile

O fluxo da aplicação é simples: o usuário cadastra os hábitos desejados indicando em quais dias da semana deverão ser realizados e todos os dias ele terá uma listas de hábitos de acordo com o dia atual, aonde ele irá indicar o status de cada hábito e a aplicação irá gerar um progresso diário que será ilustrado na barra de progresso e também nas cores dos quadrados que representam os dias onde cores mais claras representam números maiores de hábitos completos.

Ao acessar a home da aplicação, o usuário irá se deparar com a tela abaixo aonde será exibido um botão para cadastro de um novo hábito e vários quadrados os quais representam dias passados, dia atual e dia futuro. Como podemos ver a seguir, cada dia possui uma cor diferente, onde:


• Cinza indica que nenhum hábito foi realizado.

• Cores mais escuras indicam pouco progresso nos hábitos diários.

• Cores mais claras indicam muito progresso nos hábitos diários.

• Cinza com opacidade reduzida indica dias futuros e não são clicáveis.

![WhatsApp Video 2023-02-15 at 11 44 28](https://user-images.githubusercontent.com/64710438/219060709-a292047c-31d4-4226-8b72-363d3820615a.gif)

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Git, Node.js. Além disso é bom ter um editor para trabalhar com o código como VSCode.

⚠ Antes de executar o frontend e mobile verificar o IP da sua máquina e configurar no arquivo de setup do axios presente na pasta lib dos respectivos projetos

🎲 Rodando o Back End (servidor)
```
# Clone este repositório
$ gh repo clone alexandrecoura96/habits-server

# Acesse a pasta do projeto no terminal/cmd
$ cd habits-server

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor inciará na porta 3333 - acesse <http://localhost:3333>
```

📱 Rodando o App
```
# Clone este repositório
$ gh repo clone alexandrecoura96/habits-mobile

# Acesse a pasta do projeto no terminal/cmd
$ cd habits-mobile

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação
$ yarn start

# Será aberto no terminal o menu do Expo onde poderá scanear o QR Code para executar o app diretamente no seu celular ou as opções de executar no emulador android ou iOS
```

## Tecnologias
• React
• Expo
• Node
• Fastify
• Prisma

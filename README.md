# Minhas Reservas - App React Native

Aplicativo mobile desenvolvido em React Native para gerenciamento de reservas. O app permite aos usuários visualizar, gerenciar e cancelar suas reservas de forma intuitiva.

## Funcionalidades

- Listagem de reservas do usuário
- Visualização detalhada de cada reserva (local, data, horário, status)
- Cancelamento de reservas com confirmação
- Pull-to-refresh para atualização da lista
- Indicadores de status coloridos (confirmada, pendente, cancelada)
- Estados de loading e lista vazia
- Interface responsiva e moderna

## Tecnologias Utilizadas

- React Native
- React Navigation
- React Native Safe Area Context
- JavaScript (ES6+)

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Para iOS: Xcode (apenas macOS)
- Para Android: Android Studio e JDK 11+

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/minhas-reservas-app.git
cd minhas-reservas-app
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Para iOS, instale os pods:
```bash
cd ios && pod install && cd ..
```
## Estrutura do Projeto

```
├── screens/
│   └── MinhasReservasScreen.js    
├── scripts/
│   ├── fix-uimanager-error.sh    
│   └── quick-fix.sh              
├── metro.config.js                 
├── package.json                   
└── README.md                       
```

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia o Metro Bundler |
| `npm run android` | Executa no Android |
| `npm run ios` | Executa no iOS |
| `npm run lint` | Executa o linter |
| `npm test` | Executa os testes |


## Autor

Gabriel de Andrade
Desenvolvido com React Native

# Clínica React App

## API (backend): [Springboot](https://github.com/Henderson-da-rocha-porfirio/spring-api-clinica-medica-thippireddy)
## Instalando:
### 1. Instalar o [NVM](https://github.com/coreybutler/nvm-windows/releases) - > Se quiser baixar direto o [nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.zip)
#### 1.1 - Descompacte e instale nvm-setup.exe
### 2. Pegue aqui o número da versão estável do [Node](https://nodejs.org/) e rode o comando ( versão apenas de exemplo - use a que quiser ):
````
nvm use 16.13.0
````
### 3. Instalar o [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
````
npm install --global yarn
````
### 4. Instalando o instalador [Create REACT](https://www.npmjs.com/package/create-react-app) para criar um App React:
````
 npm i create-react-app
 ````
### 5. Crie o app React:
````
 npx create-react-app clinicaapp
 ````
### 6. Instalar o Módulo [DOM](https://www.npmjs.com/package/react-router-dom) - roteador react :
````
 npm i react-router-dom
 ````
### 7. Instalar o [Axios](https://www.npmjs.com/package/axios) - chama uma API Restful:
````
npm i axios
````
### 8. Instalar o [Toastify](https://www.npmjs.com/package/toastify) - Tipo de pop up para respostas:
````
 npm i react-toastify
````
### 8.1. Para fazer funcionar o toastify:
#### - Adicionar em App.js:
````
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
````
#### E abaixo de </Switch>:
````
<ToastContainer autoClose={2000} />
````
#### E em AdicionarPaciente.js:
````
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
````
#### E adicione aida em AdicionarPaciente:
````
.then(res => {
                toast.success('Paciente Adicionado Com Sucesso', { position: toast.POSITION.BOTTOM_CENTER })
            })
````
## App:
### 1. package.json: tem todas as dependências e todas as libraries requeridas pelo index.html.
### 2. index.html: Ponto de início da aplicação.
### 3. App.js: Componente chave que inicia tudo que está no index.js.

## React:
### 1. JSX: é uma extensão React para a sintaxe da linguagem JavaScript que fornece uma maneira de estruturar a renderização de componentes usando uma sintaxe familiar a muitos desenvolvedores. É semelhante em parência ao HTML. Ela é responsável em criar o HTML DOM.

### 2. Rodar a aplicação:
````
yarn start
````

## Routing:
### Roteando de um component para o outro ou de UI para outra precisamos trabalhar com dois arquivos js:
#### - index.js
#### - app.js
## Verificando Versão:
### NVM:
````
 nvm version
 ````
 ### NODE:
````
 node -v
 ````
### NPM:
````
npm -v
````
### YARN:
````
yarn -v
````
 ### 

import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ColetarClinicas from './components/ColetarClinicas';
import AdicionarPaciente from './components/AdicionarPaciente';
import AnaliseDados from './components/AnaliseDados';
import GeradorGrafico from './components/GeradorGrafico';


// Aqui em App.js é onde definiremos todas as nossas rotas
// Configurar rotas com o Switch.
// Route = / é a rota root. E precisamos adicionar as URI também das rotas que não são a root, como abaixo:
// ColetarClinicas é o componente que mostrará em tela, os detalhes e o que podem entrar. Assim acontecem também aos outros.
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pacienteDetalhes/:pacienteId" component={ColetarClinicas} />
        <Route exact path="/adicionarPaciente/" component={AdicionarPaciente} />
        <Route exact path="/analise/:pacienteId" component={AnaliseDados} />
        <Route exact path="/grafico/:componenteNome/:pacienteId" component={GeradorGrafico} />
      </Switch>
    </div>
  );
}
export default App;
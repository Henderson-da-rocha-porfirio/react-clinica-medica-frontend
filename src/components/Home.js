import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

// Este é o primeiro componente a ser trabalhado. É onde recuperaremos todos os detalhes do BackEnd e os mostraremos em forma tabular (tabelas)
// é onde serão recuperados todos os detalhes do Paciente.
// Todo component React herda da classe React.Component e implementa o método Render.
// Método render é aquele responsável pelo que aparece no Browser e retornará o que estiver dentro dos parênteses.
// Retornando um simples elemento de div e é preciso externar este component. Que exporta JSx.
// Exportando essa div. Daí agora poderemos utilizar em outros componentes.
// ComponentWillMount é o cara certo para montar a lifecycle. Ele será o responsável em recuperar toda a informação do paciente do BackEnd.
// É necessário importar axios para
// O método get é o que pega os métodos dentro destes parentêses que passarmos como parâmetros, que é a URL para o RestFul API.
// Dentro de axios colocamos a URI feita, possivelmente antes, e testada no Postman;
//res = response
// res.data = dar o dado JSON que vem do BackEnd e o "setamos" no estado ( state ).
// Alí em setState, fazemos o update do estado inicial, que não tem nada nele, mas dentro do método setState com chaves, onde colocaremos o PacienteDado
// paciente será pego, passará por RowCreator que o renderizará em tela.
// this.props.item nos dará acesso ao item={paciente}
class Home extends React.Component {
    state = {
        pacienteDado: []
    }

    componentWillMount() {
        axios.get('http://localhost:8080/clinicaservices/api/pacientes').then(res => {
            const pacienteDado = res.data;
            this.setState({ pacienteDado })
        })
    }

    render() {
        return (<div>
            <h2>Pacientes:</h2>
            <table align='center'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Primeiro Nome</th>
                        <th>Último Nome</th>
                        <th>Idade</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.pacienteDado.map(paciente => <RowCreator item={paciente} />)}
                </tbody>
            </table>
            <Link to={'/adicionarPaciente'}>Registrar paciente</Link>
        </div>)
    }
}

class RowCreator extends React.Component {
    render() {
        var paciente = this.props.item;
        return <tr>
            <td>{paciente.id}</td>
            <td>{paciente.primeiroNome}</td>
            <td>{paciente.ultimoNome}</td>
            <td>{paciente.idade}</td>
            <td><Link to={'/pacienteDetalhes/' + paciente.id}>Adicionar dados</Link></td>
            <td><Link to={'/analise/' + paciente.id}>Analise</Link></td>
        </tr>
    }
}

export default Home;
import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
/* import { Doughnut, Bar, Line } from 'react-chartjs-2' */

// Todo component React herda da classe React.Component e implementa o método Render.
// Método render é aquele responsável pelo que aparece no Browser e retornará o que estiver dentro dos parênteses.
// Retornando um simples elemento de div e é preciso externar este component. Que exporta JSx.
// Exportando essa div. Daí agora poderemos utilizar em outros componentes.
// clinicaData: [] = é onde aparecerá a lista de arrays no mesmo lugar onde aparece no teste do postman

class AnaliseDados extends React.Component {

    state = {
        clinicaData: []
    }


    componentWillMount() {

        axios.get('http://localhost:8080/clinicaservices/api/pacientes/analise/'
            + this.props.match.params.pacienteId).then(res => {
                console.log(res.data)
                this.setState(res.data)
                console.log(this.state)
            })
    }
    render() {
        return (<div>
            <h2>Detalhes do paciente:</h2>
            Primeiro Nome: {this.state.primeiroNome}<br />
            Último Nome: {this.state.ultimoNome}<br />
            Idade: {this.state.idade}<br />

            <h2>Relatório Clínico:</h2>
            {this.state.clinicaData.map(eachEntry => <TableCreator item={eachEntry}
                pacienteId={this.state.id} />)}
            <Link to={'/'}>Voltar</Link>
        </div>)

    }

}
class TableCreator extends React.Component {
    render() {
        var eachEntry = this.props.item;
        var pacienteId = this.props.pacienteId;

        return <div>
            <table border="1">
                <tr>
                    <td><b>{eachEntry.componenteNome}</b></td>
                </tr>
                <tr>
                    <td>{eachEntry.componenteNome}</td>
                    <td>{eachEntry.componenteValue}</td>
                    <td>{eachEntry.measuredDateTime}</td>
                </tr>
            </table>
        </div >
    }
}
export default AnaliseDados;


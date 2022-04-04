import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// Todo component React herda da classe React.Component e implementa o método Render.
// Método render é aquele responsável pelo que aparece no Browser e retornará o que estiver dentro dos parênteses.
// Retornando um simples elemento de div e é preciso externar este component. Que exporta JSx.
// Exportando essa div. Daí agora poderemos utilizar em outros componentes.
class ColetarClinicas extends React.Component {

    state = {}

    componentWillMount() {
        console.log("http://localhost:8080/clinicaservices/api/pacientes/" + this.props.match.params.pacienteId);
        axios.get("http://localhost:8080/clinicaservices/api/pacientes/" + this.props.match.params.pacienteId)
            .then(res => {
                console.log(res.data);
                this.setState(res.data);
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            pacienteId: this.props.match.params.pacienteId,
            componenteNome: this.componenteNome,
            componenteValue: this.componenteValue,
        }
        axios.post("localhost:8080/clinicaservices/api/dadosclinicos", data)
            .then(res => {
                toast.success('Dados do Paciente Salvos Com Sucesso', { position: toast.POSITION.BOTTOM_CENTER })

            })
    }

    render() {
        return (<div>
            <h2>Detalhes do Paciente:</h2>
            Primeiro Nome: {this.state.primeiroNome}<br />
            Último Nome: {this.state.ultimoNome}<br />
            Idade: {this.state.idade}<br />
            <h2>Dados Clínicos do Paciente:</h2>
            <form>
                Tipos de Entradas Clínicas:<select onChange={(event) => { this.componenteNome = event.target.value }}>
                    <option>Selecione um</option>
                    <option value="bp">Pressão Sanguínea Pressure(Sístole/Diástole)</option>
                    <option value="ap">Altura/Peso</option>
                    <option value="heartrate">Frequência Cardíaca</option>
                </select><br />
                Valor:<input type="text" name="componenteValue" onChange={(event) => { this.componenteValue = event.target.value }} /><br />
                <button onClick={this.handleSubmit.bind(this)}>Confirme</button>
            </form>
            <Link to={'/'}>Voltar</Link>
        </div>)
    }
}
export default ColetarClinicas;                   

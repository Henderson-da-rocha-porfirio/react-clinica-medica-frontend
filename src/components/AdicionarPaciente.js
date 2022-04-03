import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// Todo component React herda da classe React.Component e implementa o método Render.
// Método render é aquele responsável pelo que aparece no Browser e retornará o que estiver dentro dos parênteses.
// Retornando um simples elemento de div e é preciso externar este component. Que exporta JSx.
class AdicionarPaciente extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        const data = {
            primeiroNome: this.primeiroNome,
            ultimoNome: this.ultimoNome,
            idade: this.idade
        }
        console.log(data);
        axios.post("http://localhost:8080/clinicaservices/api/pacientes", data)
            .then(res => {
                toast.success('Paciente Adicionado Com Sucesso', { position: toast.POSITION.BOTTOM_CENTER })

            })
    }
    render() {
        return (<div>
            <h2>Criar Paciente:</h2>
            <form>
                Primeiro Nome:<input type="text" name="primeiroNome" onChange={(event) => { this.primeiroNome = event.target.value }} align="left" />
                Último Nome:<input type="text" name="ultimoNome" onChange={(event) => { this.ultimoNome = event.target.value }} align="left" />
                Idade:<input type="text" name="idade" onChange={(event) => { this.idade = event.target.value }} align="left" />
                <button onClick={this.handleSubmit.bind(this)}>Confirme</button>
            </form>
            <Link to={'/'}>Voltar</Link>

        </div>)
    }
}
export default AdicionarPaciente;                    // Exportando essa div. Daí agora poderemos utilizar em outros componentes.


import React from "react";
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
// Dentro de axios colocamos a URI feita, possivelmente antes, e testada no Postman
class Home extends React.Component { 

    componentWillMount() {

        axios.get('localhost:8080/clinicaservices/api/pacientes').then()

    }
    render(){                               
                                            
        return(<div>                        
    
    </div>)
    }
}
    export default Home;                    

                         
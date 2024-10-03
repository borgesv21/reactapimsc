import { useState } from 'react'
import { Link } from 'react-router-dom';
import './index.scss'

import axios from 'axios'



export default function Consultar() {
    const [listaTarefa, setListaTarefa] = useState([]);

    async function buscar() {
        const url = 'http://localhost:9000/tarefa';
        let resp = await axios.get(url);
        setListaTarefa(resp.data);
    }

    return (
        <div className='pagina-consultar'>
            <button><Link to='/'>Ir para tela inicial</Link></button>
            
            <h1> CONSULTAR </h1>

            <button onClick={buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tarefa</th>
                        <th>Ordem</th>
                        <th>Cadastro</th>
                        <th>Finalizado</th>
                        <th>Alterar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaTarefa.map(item =>
                        <tr>
                            <td>{item.idTarefa}</td>
                            <td>{item.tarefa}</td>
                            <td>{item.ordem}</td>
                            <td>{new Date(item.cadastro).toLocaleDateString()}</td>
                            <td>{item.finalizado == true ? "Sim" : "Não"}</td>
                            <td><Link to={`/alterar/    ${item.idTarefa}`}>Alterar</Link></td>
                        </tr>
                    )}
                </tbody>

            </table>       
        </div>
    )
}
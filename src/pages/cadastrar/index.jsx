import { useState } from 'react'
import { Link } from 'react-router-dom';
import './index.scss'

import axios from 'axios'

export default function Cadastrar() {
    const [tarefa, setTarefa] = useState('');
    const [ordem, setOrdem] = useState('');
    const [finalizado, setFinalizado] = useState(false);
    const [cadastro, setCadastro] = useState('');



    async function salvar() {
        const paramCorpo = {
            'tarefa': tarefa ,
            'ordem': ordem,
            'finalizado': finalizado ,
            'cadastro': cadastro 
        }

        const url = 'http://localhost:9000/tarefa';
        let resp = await axios.post(url, paramCorpo);

        alert('tarefa a adicionada na lista negra. Id: ' + resp.data.idTarefa);
    }


    return (
        <div className='pagina-cadastrar'>
            <button><Link to='/'>Ir para tela inicial</Link></button>
            
            
            <h1> CADASTRAR </h1>


            <div className='form'>
                <div>
                    <label>Tarefa:</label>
                    <input type='text' value={tarefa} onChange={e => setTarefa(e.target.value)} />
                </div>
                <div>
                    <label>Ordem:</label>
                    <input type='text' value={ordem} onChange={e => setOrdem(e.target.value)}/>
                </div>
                <div>
                    <label>Finalizado:</label>
                    <input type='checkbox' checked={finalizado} onChange={e => setFinalizado(e.target.checked)} />
                </div>
                <div>
                    <label>Cadastro:</label>
                    <input type='text' value={cadastro} onChange={e => setCadastro(e.target.value)} />
                </div>
            </div>
            <button className='salvar' onClick={salvar}> SALVAR </button>

        </div>
    )
}
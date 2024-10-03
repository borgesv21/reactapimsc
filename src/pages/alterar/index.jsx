import './index.scss'

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useState } from 'react'
import { Link } from 'react-router-dom';
import './index.scss'

import axios from 'axios'

export default function Alterar() {
    const [tarefa, setTarefa] = useState('');
    const [ordem, setOrdem] = useState('');
    const [finalizado, setFinalizado] = useState(false);
    const [cadastro, setCadastro] = useState('');

    const {id} = useParams();


    async function alterar() {
        const paramCorpo = {
            'tarefa': tarefa ,
            'ordem': ordem,
            'finalizado': finalizado ,
            'cadastro': cadastro 
        }

        const url = `http://localhost:9000/tarefa/${id}`;
        let resp = await axios.put(url, paramCorpo);

        alert('tarefa a alterada na lista negra. Id: ' + resp.data.idTarefa);
    }

    async function buscar(){
        const url = `http://localhost:9000/tarefa/${id}`
        let resp = await axios.get(url)

        setTarefa(resp.data.tarefa)
        setOrdem (resp.data.ordem)     
        setFinalizado(resp.data.finalizado)
        setCadastro(resp.data.cadastro)
    }

    useEffect(() => {
        buscar ();

    }, [])


    return (
        <div className='pagina-alterar'>
            <button><Link to='/'>Ir para tela inicial</Link></button>
            
            
            <h1> ALTERAR INTEM : </h1>
            <p> Id Tarefa : {id}</p>

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
            <button className='salvar' onClick={alterar}> ALTERAR </button>

        </div>
    )
}
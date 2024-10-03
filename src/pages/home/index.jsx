import { Link } from 'react-router-dom';// navega entre paginas 
import './index.scss';

function Home() {
  return (
    <div className="pag-home">
        <h1>O que vc quer fazer :</h1>

        <buttuon><Link to='/consultar'>Consultar</Link></buttuon>
        <buttuon><Link to='/cadastrar'>Cadastrar</Link></buttuon>
        
    </div>
  );
}

export default Home;

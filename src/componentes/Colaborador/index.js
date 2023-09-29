import { icons } from 'react-icons'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    
    const favoritar = () => {

        aoFavoritar(colaborador.id)
    }
    // props dos icons de favorito
    const propsFavorito = {

        size: 30,
        onClick: favoritar,
        color: corDeFundo,
        className: 'heart'
    }

    return (<div className="colaborador">

        <AiFillCloseCircle
            color='white'
            size={30}
            className='deletar'
            onClick={() => aoDeletar(colaborador.id)}
        />

        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>

        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito ?
                    <AiFillHeart
                        {...propsFavorito}
                    /> :
                    <AiOutlineHeart
                        {...propsFavorito}
                    />}
            </div>

        </div>
    </div>)
}

export default Colaborador
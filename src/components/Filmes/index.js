import './styles.css'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';
import api from '../../services/api'

export default function Filmes() {
    const { id } = useParams()
    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get(`https://sujeitoprogramador.com/r-api/?api=filmes/${id}`)
            
            if(response.data.length === 0){
                history.replace('/')
                return
            }
            
            setFilme(response.data)
            setLoading(false)
        }
        loadFilmes()

        return () => {
            console.log('component disable')
        }

    }, [history, id])


    function salvaFilme(){
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme) {
            alert('Voce já possui esse filme salvo');
            return
        }

        filmesSalvos.push(filme)

        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        alert('Filme salvo com sucesso')

    }



    if(loading) {
        return (
            <div className="filme-info">
                <h1>Carregando seu filme... </h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.nome} </h1>
            <img src={filme.foto} alt={filme.nome}/>
            <h3>Resumo</h3>
            <p>{filme.sinopse}</p>
            <div className="botoes">
                <button onClick={ salvaFilme}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.nome} Trailer`} target="blank">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom";
import './styles.css'

export default function Header() {
    return (
        <header>
            <Link className="logo" to="/">Film.io</Link>
            <Link className="favoritos" to="/favoritos">Salvos</Link>
        </header>
    )
}
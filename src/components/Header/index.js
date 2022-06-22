import './styles.scss'
import { Link } from 'react-router-dom'
export function Header(){
    return(
        <header>
            <div className='button'>
            <Link to="/"><h1>Breaking Bad</h1><a>Character List</a></Link>
            </div>
        </header>
    )
}
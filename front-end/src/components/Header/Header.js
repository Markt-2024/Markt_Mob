import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return(
        <div className='Header'>

        <div className='Markt-logo'>
            <h1>Markt</h1>
        </div>

        <Link to='/login'>
        <div className='profile'>
            <div className='pic'>
            Profile
            </div>
        </div>
        </Link>


        </div>
    )
}
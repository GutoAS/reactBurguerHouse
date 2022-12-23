import React,{useState} from 'react'
import {Link} from 'react-scroll'
import logo from '../assets/logo1.png';

const Navbar = () => {
    const[nav,setNav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        }
        else {
            setNav(false)
        }
    }

    window.addEventListener('scroll',changeBackground)

  return (
    <nav className={nav ? "nav active": "nav"}>
        <Link to="main" className='logo'>
            <img src={logo} alt= "" />
        </Link>
        <input type="checkbox" className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for="menu-btn">
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to="#">HOME</Link></li>
            <li><Link to="#">Produtos</Link></li>
            <li><Link to="#">Sobre Nós</Link></li>
            <li><Link to="#">Contactos</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
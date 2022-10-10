import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setLargeur(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    }

  })

  return (
    <div>

      <nav>
        {(toggleMenu || largeur > 500) && (
        <ul className='liste'>
          <Link to="/" className='items'>Accueil</Link>
          <Link to="/addarticle" className='items'>Écrire</Link>
          <Link to="/contact" className='items'>Contact</Link>
        </ul>)
        }
        <button onClick={toggleNav} className='btn'>Liste</button>
      </nav>
    </div>
  )
}

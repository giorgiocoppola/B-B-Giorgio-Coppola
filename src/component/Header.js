import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <nav class="navbar bg-dark">
             <div class="container-fluid">
                 <span class="navbar-brand m-2 fs-2 h1 text-white">B & B Le Cerase</span>

                  <ul>
                      <li className="list fs-3"><Link to="/" className="text-decoration-none text-white">HOME</Link></li>
                      <li className="list fs-3"><Link to="/camere" className="text-decoration-none text-white">CAMERE</Link></li>
                      <li className="list fs-3"><Link to="/contatti" className="text-decoration-none text-white">CONTATTI</Link></li>

                  </ul>
               </div>
     </nav>
  )
}

export default Header
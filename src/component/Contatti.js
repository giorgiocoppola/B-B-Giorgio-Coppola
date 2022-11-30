import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Contatti.css'


function Contatti() {

  return (
    <div className='contatti'>
        <Header />
        <main>
        <h1 className='contatti-title text-center'>Contatti</h1>
        </main>
        <Footer />
    </div>
  )
}

export default Contatti
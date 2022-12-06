import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Contatti.css'
import mappa from './mappa.png'


function Contatti() {

  return (
    <div className='contatti'>
        <Header />
        <main className='contatti-principale'>
        <h1 className='contatti-title text-center fs-1 text-white mt-4'>Contatti</h1>

         <div className='map'>
              <img className="mappa" src={mappa} alt="mappa" />
             
         </div>

         <div className='info'>
          
             <p className='infodescrizione fs-1 text-center text-white p-5'>Indirizzo: Via Martina Franca, 69 <br />
                                                             Localita': Crispiano (TA) <br />
                                                             Cellulare: 3342350701 <br />
                                                             Gmail: giorgiocoppola12@gmail.com </p>
             </div>    

        </main>
        <Footer />
    </div>
  )
}

export default Contatti
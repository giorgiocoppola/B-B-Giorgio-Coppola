
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './Camere.css'
import armadio from './armadio.jpg'
import bagno from './bagno.jpg'
import divanoletto from './divanoletto.jpg'
import cameretta from './cameretta.jpg'
import cucina from './cucina.jpg'
import cucina2 from './cucina2.jpg'
import bucataio from './bucataio.jpg'
import letto from './letto.jpg'
import panorama from './panorama.jpg'
import quadro from './quadro.jpg'
import quadro2 from './quadro2.jpg'
import tv from './tv.jpg'





function Camere() {
  return (
    <div>
      <Header />
       <main className='camera-principale'>
          <h1 className='camere-title text-center fs-1'>Camere</h1>

          <div className="appartamento">

             <div className="parte1">
                 <img className='image' src={bagno} alt ='bagno' />
             </div>

             <div className="parte2">
                 <img className='image' src={divanoletto} alt ='divanoletto' />  
             </div>
            
            <div className="parte3">

                 <img className='image' src={cameretta} alt ='cameretta' /> 
            </div>

            <div className="parte4">

               <img className='image' src={cucina} alt ='cucina' /> 

            </div>

            <div className="parte5">

               <img className='image' src={cucina2} alt ='cucina2' /> 

            </div>

            <div className="parte6">

              <img className='image' src={armadio} alt ='armadio'/> 

            </div>

            <div className="parte7">

              <img className='image' src={bucataio} alt ='bucataio'  /> 

            </div>

            <div className="parte8">

              <img className='image' src={letto} alt ='letto'  /> 

            </div>

            <div className="parte8">

               <img className='image' src={panorama} alt ='panorama'  /> 

            </div>

            <div className="parte9">

               <img className='image' src={quadro} alt ='quadro' /> 

            </div>

            <div className="parte10">

               <img className='image' src={quadro2} alt ='quadro2' /> 

            </div>

            <div className="parte10">

                <img className='image' src={tv} alt ='tv' /> 

            </div>
             
          </div>
         

                
           

        

        
          
       </main>
      <Footer />  
    </div>
  )
}

export default Camere
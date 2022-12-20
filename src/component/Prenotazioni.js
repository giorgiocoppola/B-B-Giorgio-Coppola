import React,{useState} from 'react'
import Footer from './Footer'
import Header from './Header'

import './Prenotazioni.css'

function Prenotazioni() {

    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    const [checkin,setCheckin] = useState("");
    const [checkout,setCheckout] = useState("");
    const max = 20;

    const handleDelete = (e) => {

       e.prevenDefault();
       setCheckin("");
       setCheckout("");
       setCount("");
       setCount2("");
    }

    const incrementa = () => {

         if( count < max ) {
             
            setCount(count + 1);

         } else {

            setCount(max);
         }

          
    }

    const incrementa2 = () => {

        if( count2 < max ) {
            
           setCount2(count2 + 1);

        } else {

           setCount2(max);
        }

         
   }

    const decrementa = () => {

        if(count === 0 ) {

            setCount(0);

        } else {

            setCount(count - 1);
        }

  }

  const decrementa2 = () => {

    if(count2 === 0 ) {

        setCount2(0);

    } else {

        setCount2(count2 - 1);
    }

}

  return (
    <div className="prenotazioni-main">
        <Header />
          <main className='prenotazioni-principale'>
            <h1 className='prenotazioni-title text-center'>Prenotazioni</h1>
               
               <form>

              
                   <label htmlFor='check-in' className='text-white fs-4 ms-3'>Check-in:</label>
                   <input type="date" className='ms-4' id="check-in" value={checkin} onChange={ (e) => setCheckin(e.target.value)}></input>
                   <label htmlFor='check-out' className='text-white fs-4 ms-3'>Check-out:</label>
                   <input type="date" className='ms-4' id="check-out" value={checkout} onChange={ (e) => setCheckout(e.target.value)}></input>
                   <span className='text-white fs-4 ms-3 mt-3'>Adulti:</span>
                   <span className='m-2 fs-3 text-white'>{count}</span>
                   <span className='text-white fs-4 ms-3 mt-3'>Bambini:</span>
                   <span className='m-2 fs-3 text-white'>{count2}</span>
                   <button className='btn btn-info ps-3 pe-3 ms-3 mb-2 fs-4 text-white' onClick={handleDelete}>Prenota</button>
            
              </form>
               
                 
                   <div className='text-white fs-4 ms-3 mt-3'>Adulti: <button className='btn btn-success rounded-circle border-dark fs-5' onClick={incrementa}>+</button><span className='cont m-2 p-2 dark-border bg-white text-dark '>{count}</span><button className='btn btn-success rounded-circle border-dark fs-5' onClick={decrementa}>-</button></div>
                   <div className='text-white fs-4 ms-3 mt-3'>Bambini: <button className='btn btn-success rounded-circle border-dark fs-5'  onClick={incrementa2}>+</button><span className='cont m-2 p-2 bg-white  text-dark '>{count2}</span><button className='btn btn-success rounded-circle border-dark fs-5' onClick={decrementa2}>-</button></div>
                   
          </main>

        <Footer />
    </div>
  )
}

export default Prenotazioni
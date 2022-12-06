import React from 'react'
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom'
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />
      <main className='home-principale'>
        <div className="overlay"> </div>
        <div className="title">
          <h1>
            <h1 className="title ">B & B</h1>
            <h1 className="title">Le Cerase</h1>
            <button className="button-contatti border-success bg-success text-white p-2"><Link style={{textDecoration:'none',color:'white'}} to='/contatti'>Contatti</Link></button>
            
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;


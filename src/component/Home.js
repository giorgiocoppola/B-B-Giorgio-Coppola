import React from 'react'
import Header from './Header';
import Footer from './Footer';
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="overlay"> </div>
        <div className="title">
          <h1>
            <div className="row ">B & B</div>
            <div className="row">La Via Delle Rose</div>
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;


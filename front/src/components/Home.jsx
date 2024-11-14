import React from 'react';
import './Home.css';
import Navbare from './Navbar'; 
import Card from './Card'; // Importez le composant Card

function Home() {




  return (
    <div className="Home">
      <Navbare />
      <div className="top-section">
        <div className="hero-section">
          <div className="hero-text">
            <h2>Charming guesthouses in the heart of Tunisia's nature</h2>
            <p>Create your perfect getaway, rent a guesthouse in Tunisia tailored to your vision.</p>
          </div>
          <div className="date-inputs">
            <input type="date" placeholder="Du" />
            <input placeholder="Au" type="date" />
            <button>OK</button>
          </div>
        </div>
      </div>
      
      <div className="middle-section">
        <h2>Choisissez votre destination</h2>
        <div className="card-section">
        <Card/>
        </div>
      </div>
      
      <footer className="Home-footer">
        <p>© 2024 La Maison. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

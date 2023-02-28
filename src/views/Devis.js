import './App.css';
import React, { Component }  from 'react';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Trajet</p>
          </header>
          <div class="card-content">
            <div class="content">
              <div><span>Départ:</span> CDG, Roissy-en-France</div>
              <div><span>Arrivée:</span> Domicile, 94800 Villejuif</div>
              <div style={{ marginTop: 10 }}>
                <div><span>Durée:</span> 64mn</div>
                <div><span>Heure d'arrivée:</span> 18:34</div>
              </div>
              <div className="itinerary"></div>
            </div>
          </div>
        </div>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Chauffeur</p>
          </header>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>

              </div>
            </div>
            <div className="com">
              <span>Commentaire: </span>
            </div>
          </div>
        </div>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Prix</p>
          </header>
          <div class="card-content">
            <div className="content">
              <div><span>Total TTC:</span> 112€</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

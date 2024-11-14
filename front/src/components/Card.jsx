import React from 'react';
import foret from '../assets/foret.jpg';
import desert from '../assets/desert.jpg';
import mer from '../assets/mer.jpg';

function Card() {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <img src={foret} className="card-img-top" alt="Forêt luxuriante" />
          <div className="card-body">
            <h5 className="card-title">Forêt</h5>
            <p className="card-text">
              Découvrez la beauté de la nature dans une forêt luxuriante, idéale pour une retraite paisible.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={desert} className="card-img-top" alt="Désert" />
          <div className="card-body">
            <h5 className="card-title">Désert</h5>
            <p className="card-text">
              Plongez dans l'immensité du désert tunisien pour une expérience unique et mémorable.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={mer} className="card-img-top" alt="Plage méditerranéenne" />
          <div className="card-body">
            <h5 className="card-title">Mer</h5>
            <p className="card-text">
              Profitez des plages paradisiaques et des eaux turquoise du littoral tunisien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

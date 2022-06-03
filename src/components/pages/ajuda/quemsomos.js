import React from 'react';
import './ajuda.css';
import cellphone from './img-ajuda/cellphone.jpg'

const Ajuda = () => (

    <section className="box-ajuda">

        <div className="box-img-ajuda">
            <img className="img-ajuda" src={cellphone} alt="Imagem de um Smatphone" />
        </div>

        <div className="box-description">

            <div className="box-title">
                <h1 class="title-ajuda"> Quem somos ?  </h1>
            </div>

            <div className="box-mente">
                <p className="description"> </p>
            </div>

            <div className="box-button">
                <a className="button-ajuda" href="https://docs.google.com/forms/d/e/1FAIpQLSd0ovSngYKJuvdfG6S2_EoXnRkCJdjygSf0mRKnMJGtceWAqA/viewform?usp=pp_url" target="_blank">Buscar Ajuda</a>
               
            </div>
        </div>

    </section>

);

export default Ajuda;
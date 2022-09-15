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
                <h1 class="title-ajuda"> Projeto integrado  </h1>
            </div>

            <div className="box-mente">
                <p className="description"> 
            Técnicos em enfermagem Turma de 2021.1 no Senac RJ Madureira</p>
            <p></p>
            <p></p>
            <p></p><h4> class="title-ajuda"> EQUIPE  </h4>
            <p></p>
            <div> João Felipe</div>
             <p></p>
             <p>Bruna Moreira</p>
             <p></p>
             <p>Rafaelle Soares</p>
             <p></p>
             <p>Diana Calçada</p>
             <p></p>
             <p>Stephany Rocha</p>
             <p></p>
             <p>Wilzete Silva</p>
             <p></p>
            </div> <p></p>

            <div>
               
            </div>
        </div>

    </section>

);

export default Ajuda;
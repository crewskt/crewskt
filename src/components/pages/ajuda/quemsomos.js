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
            <div>
            <p></p><h4>EQUIPE </h4>
            </div>
            <p></p>
            <p></p>
            <p></p><h6> João Felipe  </h6>
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
##########################################################################
         <h2 class="infor3">Técnicos em enfermagem Turma de 2021.1 no Senac RJ Madureira</h2>
         </div>
           <div className="row-lista-img">
             <ul className="ul-sintomas">
               <li className="li-sintomas">João Felipe</li>
               <li className="li-sintomas">Bruna Moreira</li>
               <li className="li-sintomas">Alterações de sono;</li>
               <li className="li-sintomas">Rafaelle Soares</li>
               <li className="li-sintomas">Diana Calçada</li>
               <li className="li-sintomas">Stephany Rocha</li>
               <li className="li-sintomas">Wilzete Silva</li>
             </ul>




            <div>
               
            </div>
        </div>

    </section>

);

export default Ajuda;
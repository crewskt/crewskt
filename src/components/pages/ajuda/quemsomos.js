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
                
         <h2> Técnicos em enfermagem Turma de 2021.1 no Senac RJ Madureira</h2>
         </div>
           
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
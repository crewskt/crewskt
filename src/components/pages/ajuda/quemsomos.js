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
                Alunos integrados no Senac RJ Madureira :</p>
             <p> João Felipe
                Bruna Moreira
                Rafaelle Soares
                Diana Calçada
                Stephany Rocha
                Wilzete Silva</p>
            </div> Técnicos em enfermagem Turma : 2021.1

            <div>
               
            </div>
        </div>

    </section>

);

export default Ajuda;
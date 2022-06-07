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
                <h1 class="title-ajuda"> Projeto integrador  </h1>
            </div>

            <div className="box-mente">
                <p className="description"> 
Alunos Senac Madureira
João Felipe, Bruna Moreira </p>
            </div>

            <div>
               
            </div>
        </div>

    </section>

);

export default Ajuda;
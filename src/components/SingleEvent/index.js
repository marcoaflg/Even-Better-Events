import React from 'react';
import './index.css';
import image6 from '../../assets/img/past.events/frontendday.png';
import Palestrantes from '../Palestrantes';


function SingleEvent() {




    return (


        <div>
            <div className="SingleEvent">
                <img src={image6} alt="Imagem"></img>
                <div className="CyT">
                    <div> Criado por #USUARIO em #DATA </div>
                    <div> #TittleImagem</div>
                </div>
                <div className="About-Slide">
                    <p>Uma Breve discussão a respeito da carreira front end.</p>
                </div>

            </div>
            <div className="Palestras">
                <Palestrantes />
            </div>
        </div>






    );
}

export default SingleEvent;

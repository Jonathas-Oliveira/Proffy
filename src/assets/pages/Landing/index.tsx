import React from 'react'
import logoimg from '../../images/logo.svg'
import landingimg from '../../images/landing.svg'
import studyIcon from '../../images/icons/study.svg'
import giveClassesIcon from '../../images/icons/give-classes.svg'
import purpleHeartIcon from '../../images/icons/purple-heart.svg'
import './styles.css'
import {Link} from 'react-router-dom'


function Landing (){
    return <div id="page-landing">
        <div id="page-landing-content" className='container'>
            <div className="logo-container">
                <img src={logoimg} alt="proffy"/>
                <h2>Sua plataforma de estudos esta online</h2>
            </div>
            
            
            <img 
                src={landingimg} alt="Plataforma de estudos"
                className="hero-image"
            />
            
            <div className="buttons-container">
               <Link to="/study" className="study">
                <img src={studyIcon} alt="estudar"/>
                Estudar
               </Link>

               <Link to="/give-classes" className="give-classes">
                <img src={giveClassesIcon} alt="Dar aulas"/>
                Dar aulas
               </Link>
            </div>

            <span className="total-connections">
                total de 200 conexões já realizadas <img src={purpleHeartIcon} className = 'heart' alt="coração roxo"/>
            </span>
        </div>
    </div>
}
export default Landing
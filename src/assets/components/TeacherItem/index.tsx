import React from 'react'
import './style.css'
import WhatsappIcon from '../../images/icons/whatsapp.svg'

function TeacherItem(){
    return(
        <article className='teacher-item'>
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/1732820?s=460&v=4" alt="John"/>
                <div>
                    <strong>Leonardo Sanchez</strong>
                    <span>Philosofy</span>
                </div>
                </header>
                <p>Entusiasta do javaScript, amante do paradigma funcional.
                    <br/><br/>
                    Maybe we can have an good class. Call me, this is an good idea. Trust in me! :)
                </p>
                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 70,00</strong>
                    </p>
                    <button>
                        <img src={WhatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
    )
}
export default TeacherItem
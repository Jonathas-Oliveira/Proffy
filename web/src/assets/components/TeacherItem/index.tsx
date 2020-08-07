import React from 'react'
import './style.css'
import WhatsappIcon from '../../images/icons/whatsapp.svg'
import api from '../../../services/api'


export interface TeacherIteM{
    avatar:string,
    bio:string,
    cost:number,
    id:number,
    name:string,
    subject:string,
    whatsapp:number
}
interface TeacherProps{
    teacher:TeacherIteM
}


const TeacherItem:React.FC<TeacherProps> = ({teacher}) =>{
function createNewConnection(){
    api.post('connections',{
        user_id: teacher.id
    })
}
    return(
        <article className='teacher-item'>
                <header>
                    <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
                </header>
                <p>{teacher.bio}
                    <br/><br/>
        
                </p>
                <footer>
                    <p>
                        Preço/hora
                    <strong>{teacher.cost}</strong>
                    </p>
                    <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}` }>
                        <img src={WhatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                    </a>
                </footer>
            </article>
    )
}
export default TeacherItem
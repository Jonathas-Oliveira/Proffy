import React,{useState, FormEvent} from 'react'
import PageHeader from '../../components/PageHeader'
import './style.css'
import Input from '../../components/input'
import warningIcon from '../../images/icons/warning.svg'
import Textarea from '../../components/Textarea/index'
import Select from '../../components/select'
import api from '../../../services/api'
import {useHistory} from 'react-router-dom'
function TeacherForm (){
    const history = useHistory()
    const [name,setName] = useState('')
    const [avatar,setAvatar] = useState('')
    const [bio,setBio] = useState('')
    const [whatsapp,setwhatsapp] = useState('')
    const [scheduleItems,setScheduleItems] = useState([
        {week_day:0,from: '',to:''}
       
    ])
    const [subject,setsubject] = useState('')
    const [cost,setcost] = useState('')

    function setScheduleItemValue(position:Number,field:string,value:string){
        const UpdateScheduleItem = scheduleItems.map((scheduleItem,index) =>{
            if(index === position){
                return {...scheduleItem, [field]:value}
            }
            return scheduleItem
        })
        setScheduleItems(UpdateScheduleItem)
    }

    function HandleCreateClass(e:FormEvent){
        e.preventDefault()
        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule : scheduleItems
        }).then(() =>{
            alert('Cadastro realizado com sucesso!')
            history.push('/')
        }).catch(() =>{
            alert('Erro no cadastro!')
        })

        console.log(name,
            avatar,
            bio,
            scheduleItems,
            cost,
            whatsapp)
    }

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day:0,from: '',to:''}
        ])
        
        scheduleItems.push()
    }
    return (
        <div id='page-teacher-form' className="container">
            <PageHeader 
            title='Que incrível que você quer dar aulas.'
            description='O primeiro passo é preencher este formulário de inscrição'
            ></PageHeader>
            <main>
                <form action="" onSubmit={HandleCreateClass}>
                <fieldset>
                    <legend> Seus dados</legend>  
                    <Input name='name' label='Nome completo'
                    value={name} onChange={(e) =>{setName(e.target.value)}}></Input>
                    
                    <Input name='avatar' label='Avatar'
                     value={avatar}
                    onChange={(e) =>{setAvatar(e.target.value)}}></Input>
                    
                    <Input name='whatsapp' label='WhatsApp'
                     value={whatsapp}
                    onChange={(e) =>{setwhatsapp(e.target.value)}}></Input>
                    
                    <Textarea name='bio' label='Biografia'
                     value={bio} 
                     onChange={(e) =>{setBio(e.target.value)}}></Textarea>
                </fieldset>
                <fieldset>
                    <legend> Sobre a aula</legend>
                    <Select name='subject' label='Matéria'
                    value={subject} 
                    onChange={(e) =>{setsubject(e.target.value)}}
                    options={[
                        {value: 'Artes', label:'Artes'},
                        {value: 'Biologia', label:'Biologia'},
                        {value: 'Química', label:'Química'},
                        {value: 'Matemática', label:'Matemática'},
                        {value: 'Filosofia', label:'Filosofia'},       
                        ]}></Select>
                    <Input 
                    value={cost} 
                    onChange={(e) =>{setcost(e.target.value)}}
                    name='cost' 
                    label='Custo da sua hora por aula'
                    ></Input>        
                
                </fieldset>
                
                <fieldset>
                    <legend>
                        Horários dísponiveis
                        <button type='button' onClick={addNewScheduleItem}>+ Novo horário</button>
                    </legend>
                   {scheduleItems.map((scheduleItem,index) =>{
                       return(
                        <div key={scheduleItem.week_day}className="schedule-item">
                        <Select 
                        onChange={e => setScheduleItemValue(index,'week_day', e.target.value)}
                        name='week_day' label='Dia da semana'
                         options={[
                             {value: '0', label:'Domingo'},
                             {value: '1', label:'Segunda-feira'},
                             {value: '2', label:'Terça-feira'},
                             {value: '3', label:'Quarta-feira'},
                             {value: '4', label:'Quinta-feira'},
                             {value: '5', label:'Sexta-feira'},
                             {value: '6', label:'Sábado'},       
                             ]}
                             value={scheduleItem.week_day}
                             />
                        

                         <Input name='from' label='Das' type='time'
                         onChange={e => setScheduleItemValue(index,'from', e.target.value)}
                         value={scheduleItem.from}
                         />                         
                         <Input name='to' label='Até' type='time'
                         onChange={e => setScheduleItemValue(index,'to', e.target.value)}
                         value={scheduleItem.to}
                         />
     
                        </div>
                       )
                   })}
                </fieldset>
                <footer>
                   
                    <p>
                        <img src={warningIcon} alt=""/>
                        Importante! <br/>
                        Preencha todos os dados.
                    </p>
                    <button type='submit'>Salvar cadastro</button>
                </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm
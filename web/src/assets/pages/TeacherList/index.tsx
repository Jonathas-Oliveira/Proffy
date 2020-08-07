import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'
import './style.css'
import TeacherItem ,{TeacherIteM} from '../../components/TeacherItem'
import Input from '../../components/input'
import Select from '../../components/select'
import api from '../../../services/api'




function Teacher (){
    
    const [teachers,setTeachers] = useState([])

    const[subject,setSubject] = useState('')
    const[week_day,setWeek_day] = useState('')
    const[time,setTime] = useState('')
    async function SearchTeachers(e:FormEvent){
        e.preventDefault()
        
    const response= await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        })
        setTeachers(response.data)
    }
    return (
    <div id='page-teacher-list' className="container">
        <PageHeader title='Estes são os proffys disponíveis'>
            <form  id="search-teachers" onSubmit={SearchTeachers}>
            <Select name='subject' label='Matéria'
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    options={[
                        {value: 'Artes', label:'Artes'},
                        {value: 'Biologia', label:'Biologia'},
                        {value: 'Química', label:'Química'},
                        {value: 'Matemática', label:'Matemática'},
                        {value: 'Filosofia', label:'Filosofia'},       
                        ]}></Select>

            <Select name='week_day' label='Dia da semana'
                    value={week_day}
                    onChange={e => setWeek_day(e.target.value)}
                    options={[
                        {value: '0', label:'Domingo'},
                        {value: '1', label:'Segunda-feira'},
                        {value: '2', label:'Terça-feira'},
                        {value: '3', label:'Quarta-feira'},
                        {value: '4', label:'Quinta-feira'},
                        {value: '5', label:'Sexta-feira'},
                        {value: '6', label:'Sábado'},       
                        ]}></Select>
               <Input type='time' name='time' label='Hora'
               value={time}
               onChange={e => setTime(e.target.value)}/>
               <button type="submit">Buscar</button>
            </form>
        </PageHeader>
        <main>
            {teachers.map((teacher:TeacherIteM) =>{
            return   <TeacherItem key= {teacher.id} teacher={teacher} ></TeacherItem>
            })}
            
        </main>
    </div>
    )
}

export default Teacher
import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Landing from './assets/pages/Landing'
import Teacher from './assets/pages/TeacherList'
import TeacherForm from './assets/pages/TeacherForm'


export default function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact component={Landing}/>
            <Route path='/study' component={Teacher}/>
            <Route path='/give-classes' component={TeacherForm}/>
        </BrowserRouter>
    )
}
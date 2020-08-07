import React, {TextareaHTMLAttributes} from 'react'

import './style.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{ //caso eu queira todos os attr possiveis de um Textarea
    label:string;
    name:string;
}


const Textarea:React.FC<TextareaProps> = ({label,name,...rest})  =>{
    return (
        <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} {...rest}/>
    </div>
    )
}

export default Textarea;
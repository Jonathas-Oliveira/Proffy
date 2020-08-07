import React, {InputHTMLAttributes} from 'react'

import './style.css'

//o extends foi pra fazer com que o input possa receber qualquer tipo de paramtro
//dai não preciso devir nas props quais seriam tooodos os possíveis..
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

//o ..rest ta dizendo que to inserindo todas as possiveis props nos meus inputs
const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}></input>
        </div>
    )
}

export default Input
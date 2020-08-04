import React from 'react'
import { Link } from 'react-router-dom'
import BackIcon from '../../images/icons/back.svg'
import Logo from '../../images/logo.svg'
import './style.css'
interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) =>{
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to='/' className='seta'>
                    <img src={BackIcon} alt="Voltar"/>
                </Link>
                    <img src={Logo} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                 {props.children}
            </div>
           
        </header>
    )
}
export default PageHeader
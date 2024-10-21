import {Link} from 'react-router-dom'
import logo1 from  '../assets/formula-e-logo.png'
import logo2 from  '../assets/logo-mahindra.png'
import { NavStyle } from "../css/NavStyle.jsx"
import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa6';




const  Nav= () =>{

    const [isActive, setIsActive] = useState(false);
 
    const toggleNavbar = () => {
        setIsActive(!isActive);
    };
    const handleResize = () => {
        if (window.innerWidth > 990 && isActive) {
            setIsActive(false); // Fecha o navbar se a tela for maior que 990px e o navbar estiver aberto
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isActive]); // Adiciona isActive como dependência


    return(
        <>
        <NavStyle>
            <header>
                <div className="nav">
                    {/* LOGO  */}
                    <Link to='/'>
                        <div className="logos">
                            <img id="logo1" src={logo1} alt="" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                            <img id="logo2" src={logo2} alt="" />
                        </div>
                    </Link>
                    
                    <div className={`navbar ${isActive ? 'active' : ''}`}>

                        {/* Ícone de Fechar */}

                        <div onClick={toggleNavbar} className="close-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </div>
                        
                        <Link to='/' className='navLink'>Home</Link>

                        <Link to='/classificacao' className='navLink'>Classificação</Link>
                        
                        <Link to='/corrida' className='navLink'>Corridas</Link>
                        
                        {/* <Link to='/highlights' className='navLink'>Highlights</Link> */}

                    </div>
                    <div onClick={toggleNavbar} className='btn-icon-header'> <FaBars /></div>
                
                </div>
            </header>
        </NavStyle>
        </>
    )
}

export default Nav
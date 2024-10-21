// import {Link} from 'react-router-dom'
import { FooterStyle } from '../css/FooterStyle.jsx';
import { CgInstagram } from "react-icons/cg";
import { CgFacebook } from "react-icons/cg";
import { CgTwitter } from "react-icons/cg";

const  Footer= () =>{
    return(
        <>
             <FooterStyle>
                <footer>
                    <div id="infos1">
                        <button>princípios editoriais</button>
                        <button>política de privacidade</button>
                        <button>minha conta</button>
                    </div>
                        
                    <div id='icons'>
                        <CgInstagram className='icones'/>
                        <CgFacebook className='icones'/>
                        <CgTwitter className='icones'/>
                    </div>

                    <div id="infos2">
                        <h5>@2024- Todos os direitos reservados</h5>
                    </div>
                </footer>
            </FooterStyle>
        </>
    )

}

export default Footer
import styled from "styled-components"
export const FooterStyle =styled.footer `

footer {
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center;     /* Centraliza verticalmente */
    flex-direction: column;  /* Coloca as divs em coluna */
    padding: 0px;
    margin: 0;
    position: relative;
    bottom: 0%;
    width: 100%;
    height: 120px;
    background-color: rgba(171,0,0,1);
    color: white;
    font-family: "Inter Tight", sans-serif;

}

#infos1, #icons, #infos2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px; 
}

button {
    margin: 0 10px;
    background-color:rgba(171,0,0,1);
    color: white;
    border: none;
    cursor: pointer;
    font:bold;
}

.icones {
    font-size: 24px;
    margin: 0 10px; 
}
    
.icones:hover{
    font-size:2rem;
    cursor:pointer;
}

#infos2 h5 {
    font-size: 14px;
    text-align: center;
    margin: 0;
}
`
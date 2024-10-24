import styled from "styled-components";
export const NavStyle = styled.header `

font-family: "Inter Tight", sans-serif;


background-color: #ffe9e9; 
margin:0;
padding:0;
width: 100%;


.logos{
    display:flex;
    align-items:center;
}

#logo1{
    width: 200px;
    height: 50px;
    margin-top: 25px;
}

.logos h1{
    margin: 30px;
    font-weight: 500;
}

#logo2{
    margin-top: 0px;
    width: 280px;
}


.navbar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    padding-right: 20px;
}


.nav {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #fff;
        z-index: 10;
}



// Quando o menu está aberto 
.navbar.active {
        width: 250px; 
        //display: block; 
        display: flex;
        flex-direction: column;  
        justify-content: space-evenly;
        gap: 5px;

}
.navLink{
    color: black; //aliceblue;
    padding: 10px 25px;
    border-radius: 50px;
    transition: 0.5s;
    margin: 0 5px;
    font-size:20px;
    font: bold;
    text-decoration: none;
}

.navLink {
        color: black;
        padding: 15px 20px;
        display: block;
        text-align: left;
        text-decoration: none;
}

.navLink::after {
    text-decoration:underline;
    width: 0;  //Inicialmente a linha tem 0 largura  
    transition: width 0.3s ease-in-out;  //Animação suave 
}

.navLink:hover::after {
    width: 100%; //A linha se expande para 100% do tamanho do link
}

.navLink:hover{
    background: white;
}

// Estilo básico do ícone de fechar 
.close-icon {
  position: absolute;
  top: 15px;
  right: 120px;
  cursor: pointer;
  display: none; 
  margin-left: auto; 
  margin-right: auto;

}


//Exibe o ícone de fechar quando o menu está ativo 
.navbar.active .close-icon {
  display: block;
}


.btn-icon-header{
    display: none;
    background-color: transparent;
    border:none;
    color: black;
    cursor: pointer;
    font-size: 1.5rem;
     
}

// Tablet 768px
@media screen and (max-width: 990px){
    #logo1{
        width: 150px;
        height: 50px;
        margin-top: 25px;
    }

    .logos h1{
        margin: 30px;
        font-weight: 500;
    }

    #logo2{
        margin-top: 0px;
        width: 200px; 
    }


    .btn-icon-header{
        display:block;
    }

    .navbar{
        display: none;
        position: fixed; 
        top: 0;
        right: 0; 
        height: 100vh; 
        background-color: #333; 
        z-index: 100;
        overflow-x: hidden; 
        transition: 0.3s ease; 
    }


    

}
    

`
 
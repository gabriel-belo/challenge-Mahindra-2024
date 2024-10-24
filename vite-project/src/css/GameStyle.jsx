import styled from "styled-components";
export const GameStyle = styled.div `

font-family: "Inter Tight", sans-serif;
background-color: #01161e;
color: white;

div{
    border: 2px solid  black;
}

.principal{
    border: 5px solid  red;
}

.cronometro{
    display: flex;
    align-items: center;
    justify-content: center;
}

.tempo{
    font-size: 1.5rem;
    font: bold;
}

.perguntas{
    display: flex;
    align-items: center;
    justify-content: center;
}

.pergunta{
    font-size: 1.5rem;
    font: bold;
}
.respostas {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 colunas com largura igual */
    gap: 10px; /* Espaçamento entre as divs */
}

.teste {
    background-color: #f0f0f0; /* Apenas para visualização */
    padding: 20px;
    text-align: center;
    // background-color: #737373;
    border-radius: 5px;
    width: 40%;
    height: 60%;
    cursor: pointer;
}

.respostas{
    color: #EFF6E0;
}

.resposta{
    color: black;
}

/* Estilos para o modal */
.cart-modal {
    background-color: rgba(0, 0, 0, 0.6); 
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99; 
    display: none;
    align-items: center; 
    justify-content: center; 
}

/* Estilos para o conteúdo do modal */
.modal-content {
    background-color: white; 
    padding: 1.25rem; 
    border-radius: 0.375rem; 
    // min-width: 90%; 
    width:  350px;
    height: 400px;
}

/* Estilos para o título do modal */
.modal-title {
    color: black;
    text-align: center;
    font-weight: bold; 
    font-size: 1.5rem; 
    margin-bottom: 0.5rem; 
}

/* Estilos para os itens do carrinho */
.cart-items {
    display: flex;
    justify-content: space-between; 
    margin-bottom: 0.5rem; 
    flex-direction: column;
    color:black;
}

/* Estilos para o total */
.total {
    font-weight: bold; 
}


/* Estilos para o container dos botões */
.button-container {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    margin-top: 1.25rem; 
    width: 100%;  
}

/* Estilos para o botão de fechar */
.close-button {
    background-color: #a0aec0; 
    color: white; 
    padding: 0.25rem 1rem; 
    border-radius: 0.25rem; 
}

/* Estilos para o botão de finalizar pedido */
.checkout-button {
    background-color: #48bb78; 
    color: white; 
    padding: 0.25rem 1rem; 
    border-radius: 0.25rem; 
}


`

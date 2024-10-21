import { useState } from 'react';
import jsonData from '../dados.json';

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Atualizando o JSON localmente (em uma aplicação real, você precisa de uma API para persistir)
        const updatedData = {
            ...jsonData,
            minhaChave: inputValue,
        };

        console.log(updatedData); // Verifique o resultado no console

        // Aqui você normalmente faria uma requisição para salvar os dados em um backend
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Digite algo"
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Home;
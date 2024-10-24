import { GameStyle } from "../css/GameStyle.jsx";
import { useState, useEffect } from "react";
import dados from '../dados.json';
import registro from "../registros.json"; // Importa os dados do jogador

const Game = () => {
  const [time, setTime] = useState(20); // Estado para armazenar o tempo
  const [isRunning, setIsRunning] = useState(false); // Estado para controle de execução
  const [rodadaAtual, setRodadaAtual] = useState(1); // Estado para controlar a rodada atual
  const [respostaSelecionada, setRespostaSelecionada] = useState(null); // Estado da resposta selecionada
  const [bloquearEscolha, setBloquearEscolha] = useState(false); // Estado para bloquear novas escolhas
  const [mostrarModal, setMostrarModal] = useState(false); // Estado para controlar exibição do modal
  const [respostaCorreta, setRespostaCorreta] = useState(null); // Estado para armazenar a resposta correta
  const [pontuacao, setPontuacao] = useState(registro.jogador1.pontuação); // Estado para a pontuação

  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 1) {
            stopCronometro(); // Para o cronômetro quando o tempo chegar a zero
            fimDaRodada(); // Considera o fim da rodada
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar ou pausar
  }, [isRunning, time]);

  useEffect(() => {
    // Sempre que a rodada iniciar, o cronômetro é automaticamente iniciado
    startCronometro();
  }, [rodadaAtual]);

  const startCronometro = () => {
    setIsRunning(true);
  };

  const stopCronometro = () => {
    setIsRunning(false);
  };

  const resetCronometro = () => {
    setIsRunning(false);
    setTime(20);
  };

  const fimDaRodada = () => {
    setBloquearEscolha(true); // Bloqueia novas escolhas
    setTimeout(() => {
      setMostrarModal(true); // Exibe o modal após 3 segundos
    }, 2000);
    stopCronometro();
    resetCronometro(); // Reseta o cronômetro para a próxima rodada
  };

  const escolherResposta = (nome) => {
    if (!bloquearEscolha) {
      setRespostaSelecionada(nome);
      const respostaCerta = rodada.resposta === nome; // Verifica se a resposta está correta
      setRespostaCorreta(respostaCerta);

      if (respostaCerta) {
        atualizarPontuacao(10); // Incrementa 10 pontos se a resposta for correta
      }

      fimDaRodada(); // Marca o fim da rodada quando uma resposta é escolhida
      console.log(`Você escolheu: ${nome}`);
    }
  };

  const atualizarPontuacao = (pontos) => {
    setPontuacao((prevPontuacao) => prevPontuacao + pontos); // Atualiza a pontuação no estado
    console.log(`Pontuação atualizada: ${pontuacao + pontos}`);
  };

  const proximaRodada = () => {
    if (rodadaAtual < Object.keys(dados).length) {
      setRodadaAtual(rodadaAtual + 1);
      setRespostaSelecionada(null); // Reseta a resposta selecionada
      setBloquearEscolha(false); // Desbloqueia a escolha para a próxima rodada
      setMostrarModal(false); // Fecha o modal e vai para a próxima rodada
      setRespostaCorreta(null); // Reseta o estado da resposta correta
    } else {
      alert('Fim do Quiz!');
    }
  };

  // Acessa os dados da rodada atual
  const rodadaChave = `rodada${rodadaAtual}`;
  const rodada = dados[rodadaChave];

  return (
    <>
      <GameStyle>
        <div className="principal">
          <div className="cronometro">
            <p className="tempo">00:{time}</p>
            <button onClick={startCronometro}>Iniciar</button>
            <button onClick={stopCronometro}>Parar</button>
          </div>


          {/* Modal que aparece após a escolha da resposta ou fim do tempo */}
          <div className="cart-modal" style={{ display: mostrarModal ? 'flex' : 'none' }}>
            <div className="modal-content">
              <h2 className="modal-title">Pontuação</h2>
              <div className="cart-items">
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Pontuação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{registro.jogador1.nome}</th>
                      <th>{pontuacao}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="button-container">
                <button className="close-button" onClick={() => setMostrarModal(false)}>Fechar</button>
                <button className="checkout-button" onClick={proximaRodada}>Próxima Pergunta</button>
              </div>
            </div>
          </div>

          {/* Perguntas e Respostas */}
          <div>
            <h1>{rodada.pergunta}</h1>
            <div className="respostas">
              {rodada.respostas.map((piloto) => (
                <div
                  key={piloto.id}
                  onClick={() => escolherResposta(piloto.nome)}
                  className={`teste ${respostaSelecionada === piloto.nome ? 'selecionada' : ''}`}
                  id={`resposta${piloto.id}`}
                  style={{
                    pointerEvents: bloquearEscolha ? 'none' : 'auto', // Desativa o clique após a escolha
                    border: respostaSelecionada === piloto.nome
                      ? respostaCorreta
                        ? '3px solid green' // Verde se estiver correto
                        : '3px solid red' // Vermelho se estiver incorreto
                      : '1px solid gray' // Padrão para as opções não selecionadas
                  }}
                >
                  <p className="resposta">{piloto.nome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GameStyle>
    </>
  );
};

export default Game;

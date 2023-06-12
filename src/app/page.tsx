"use client"
import { useEffect, useState } from 'react';
import BalloonButton from './components/BalloonButton';

const prizes = ['iPhone', 'Notebook', 'Fone de Ouvido', 'Camiseta', 'Bônus de 10%'];

export default function Home() {
  const [message, setMessage] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [remainingPrizes, setRemainingPrizes] = useState(prizes);

  useEffect(() => {
    if (remainingPrizes.length === 0) {
    setMessage('Todos os prêmios foram ganhos!');
    setDisabled(true);
    }
    }, [remainingPrizes]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[randomIndex];
    setMessage(`Parabéns! Você ganhou um(a) ${prize}!`);
    setDisabled(true)
    const updatedPrizes = [...remainingPrizes];
    updatedPrizes.splice(randomIndex, 1);
    setRemainingPrizes(updatedPrizes);
  };

  const handleStartGame = () => {
    setIsGameStarted(true);
    setMessage('');
  };



  return (
    <div className='flex flex-col w-[400px] items-center justify-center h-full mx-auto gap-10'>
      <div className='flex flex-col text-center'>
        <span className='text-5xl text-white font-bold'>Estoura</span>
        <span className='text-7xl text-orange-300 font-bol'>Balão</span>
        <span className='text-3xl text-white font-semibold'>de</span>
        <span className='text-3xl uppercase text-white font-bold mt-5'>são</span>
        <span className='text-3xl uppercase text-white font-bold'>joão</span>
      </div>
      {!isGameStarted ? (
        <button onClick={handleStartGame}>Começar Jogo</button>
      ) : (
        <>
          <p>{message}</p>
          <div>
            <BalloonButton onClick={handleClick} disabled={disabled}>
                Estourar balão
            </BalloonButton>
          </div>
        </>
      )}
    </div>
  );
}
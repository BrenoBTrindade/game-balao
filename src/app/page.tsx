"use client"
import { useState } from 'react';

const prizes = ['iPhone', 'Notebook', 'Fone de Ouvido', 'Camiseta', 'Bônus de 10%'];

export default function Home() {
  const [message, setMessage] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [disabled, setDisabled] = useState(false)

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[randomIndex];
    setMessage(`Parabéns! Você ganhou um(a) ${prize}!`);
    setDisabled(true)
  };

  const handleStartGame = () => {
    setIsGameStarted(true);
    setMessage('');
  };

  return (
    <div className='flex flex-col w-[400px] items-center justify-center h-full mx-auto gap-20'>
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
            <button className='bg-red-700 cursor-pointer h-36 w-36 rounded-full hover:scale-125 text-white duration-1000 disabled:bg-transparent' disabled={disabled} onClick={handleClick}>Estourar Balão</button>

          </div>
        </>
      )}
    </div>
  );
}
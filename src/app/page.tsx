"use client"
import { useEffect, useState } from 'react';
import BalloonButton from './components/BalloonButton';
import Image from 'next/image';

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
    <main>
        <Image loading='eager' className='absolute left-5 top-[30%]' src={"/saojoao.png"} alt='balão de São João' width={300} height={300}/>
        <Image loading='eager' className='absolute right-5 top-[30%]' src={"/saojoao.png"} alt='balão de São João' width={300} height={300}/>
        <Image loading='eager' className='absolute bottom-10 left-[40%]' src={"/logo-white-click.png"} alt='balão de São João' width={300} height={300}/>
      <div className='flex flex-col w-[400px] items-center justify-center h-full mx-auto gap-10 text-shadow mt-5'>
        <div className='flex flex-col text-center'>
          <span className='text-5xl text-white font-bold'>Estoura</span>
          <span className='text-7xl text-orange-300 font-bold text-shadow-PRIMARY'>Balão</span>
          <span className='text-3xl text-white font-semibold'>de</span>
          <span className='text-3xl uppercase text-white font-bold mt-5'>são</span>
          <span className='text-3xl uppercase text-white font-bold'>joão</span>
        </div>
        {!isGameStarted ? (
          <button className='mt-20 bg-white p-5 rounded-xl font-bold animate-bounce hover:bg-red-500 hover:text-white shadow-gray-700 shadow-md border-none duration-700' onClick={handleStartGame}>Começar Jogo</button>
        ) : (
          <div className='mt-10'>
            <p className='text-shadow-PRIMARY absolute mt-5 text-white ml-10 text-2xl font-semibold'>{message}</p>
            <BalloonButton onClick={handleClick} disabled={disabled}/>
          </div>
        )}
      </div>
    </main>
  );
}
import YouTube from 'react-youtube';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // Função de configuração das opções do player
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1, // Iniciar automaticamente o vídeo
    },
  };

  // Função para lidar com o evento "onReady"
  const onReady = (event) => {
    // Acessa o player do YouTube e pausa o vídeo
    event.target.pauseVideo();
  };

  return (
    <div>
      <h1>Onanismo</h1>
    
      <p className='a'>
      O onanismo, ou autoconhecimento sexual, é uma prática comum e natural que contribui para a saúde mental e emocional. No entanto, ainda carrega estigmas e tabus. Nosso objetivo é quebrar essas barreiras, promovendo uma nova perspectiva sobre o tema, baseada em educação e respeito próprio.
      </p>
      <br></br>

      <YouTube videoId="ip-bm718EiQ" opts={opts} onReady={onReady} />
      <button>Entrar em contato</button>
    </div>
  );
}

export default App;
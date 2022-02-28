import logo from './swing_icon.png';
import './App.css';

function App() {
  return (
    <div>
      <img className='logo' src={logo}>
      </img>
      <div className='text'>
        Swing Launcher
      </div>
      <div className='downloads'>
        <div className='text_downloads'>
          Downloads
        </div>
        <button className='download_button' onClick={() => window.location.href='https://drive.google.com/u/3/uc?id=1-0Z_Jmb3Su_2gHc6UA0zJe8joNHsM78A&export=download&confirm=t'}>
          Swing Launcher for Windows (x64)
        </button>
      </div>
      <div className='credits'>
        <span className='credits_bold'>Swing Launcher</span>
        <span> Made by</span>
        <span className='credits_bold'> Gazdag Marcell</span>
        <span> in collaboration with</span>
        <span className='credits_bold'> your mother</span>
      </div>
    </div>
  );
}

export default App;

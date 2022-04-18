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
        <button className='download_button' onClick={() => window.location.href='https://dl.dropboxusercontent.com/s/8c00bnfvpoh4kd0/SwingLauncherInstall.exe?dl=0'}>
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

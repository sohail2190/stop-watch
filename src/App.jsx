import { useTimer } from 'use-timer';
import './App.css';

function App() {
  const { time, start, pause, reset, status } = useTimer();

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="timer-container">

      <div className="btn-container">
        <button className="btn" onClick={start}>Start</button>
        <button className="btn" onClick={pause}>Pause</button>
        <button className="btn" onClick={reset}>Reset</button>
      </div>

      <div className="timer">
        <div className="time-box">
          <p className="time">{hours}</p>
          <p className="title">Hour</p>
        </div>

        <div className="time-box">
          <p className="time">{minutes}</p>
          <p className="title">Minute</p>
        </div>

        <div className="time-box">
          <p className="time">{seconds}</p>
          <p className="title">Second</p>
        </div>
        
      </div>
      {status === 'RUNNING' && <p> RUNNING <span className="status blinking"> . . . .</span></p>}
    </div>
  );
}

export default App;

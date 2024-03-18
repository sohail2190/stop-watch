import { useTimer } from 'use-timer';
import './App.css';

function App() {
  const { time, start, pause, reset, status } = useTimer();

  return (
    <div className="timer-container">
      <div className="btn-container">
        <button className="btn" onClick={start}>Start</button>
        <button className="btn" onClick={pause}>Pause</button>
        <button className="btn" onClick={reset}>Reset</button>
      </div>
      <p className="timer">Start Time: {time} sec</p>
      {status === 'RUNNING' && <p> RUNNING <span className="status blinking"> . . . .</span></p>}
    </div>
  );
}

export default App;

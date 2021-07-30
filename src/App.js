import clock from './assets/animatedClock.svg';
import './App.css';
import Countdown from 'react-countdown';
import renderer from './components/Count'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={clock} className="App-logo" alt="logo" />
        <Countdown
          date={Date.now() + 5000}
          renderer={renderer}
        />
      </header>
    </div>
  );
}

export default App;

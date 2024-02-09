import Timer from './Timer';

function App() {
  return (
    <div className='app-container'>
      <h1 className='app-title'>React Countdown Clock</h1>
      <p>Changing of the Guard: Countdown to June 12th, 2024</p>
      <Timer />
      <footer>
        Created by <a href='https://www.linkedin.com/in/sudarshan-dhage/'>Sudarshan Dhage</a>{' '}
        
      </footer>
    </div>
  );
}

export default App;

import '../CSS/App.css';
import Card from './Card';
import GamePlay from './GamePlay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🎁 Gift Exchange</h1>
        <GamePlay participants={ participants } />
      </header>
      <div className="App-body">
        <Card gift={ gifts } participants={ participants }></Card>
      </div>
    </div>
  );
}

export default App;

import '../CSS/App.css';
import Card from './Card';
import GamePlay from './GamePlay';
import Participants from '../Data/Participants';
import Gifts from '../Data/Gifts';

function App() {
  const participants = Participants.Participants;
  const gifts = Gifts.Gifts;

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎁 Gift Exchange</h1>
        <GamePlay participants={ participants } />
      </header>
      <div className="App-body">
        <div className="Cards">
          { gifts.map((gift) => (
            <Card key={ gift.id } gift={ gift } participants={ participants }></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import '../CSS/App.css';
import Card from './Card';
import GamePlay from './GamePlay';
import Participants from '../Data/Participants';
import Gifts from '../Data/Gifts';
import _ from 'underscore';

function App() {
  const participants = Participants.Participants;
  const gifts = _.shuffle(Gifts.Gifts);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎁 Gift Exchange</h1>
        <GamePlay participants={ participants } />
      </header>
      <div className="App-body">
        <div className="Cards">
          { gifts.map((gift, index) => (
            <Card key={ index + 1 } number={ index + 1 } gift={ gift } participants={ participants }></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

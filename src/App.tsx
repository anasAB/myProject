import './App.css';
import Chop from './chop';
import { IDataset } from './Typing/Types';


const dataset: IDataset = {
  bread: "baguette",
  cheese: "brie cheese",
};

const myTemplate: string = `I like to eat ${dataset.bread} and ${dataset.cheese}`;

Chop(dataset, myTemplate);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Yara</p>
      </header>
    </div>
  );
}

export default App;

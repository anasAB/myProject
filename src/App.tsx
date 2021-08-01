import './App.css';
import Chop from './chop';
import { IDataset } from './Typing/Dataset';


const dataset: IDataset = {
  bread: "baguette",
  cheese: "brie cheese",
};


const myTemplate: string = `I like to eat ${dataset.bread} and ${dataset.cheese}`;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Yara</p>
        <Chop data={dataset} template={myTemplate} />
      </header>
    </div>
  );
}

export default App;

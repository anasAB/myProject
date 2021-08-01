import './App.css';
import Chop from './chop';
import { IDataset } from './Typing/Dataset';


const dataset: IDataset = {
  bread: "baguette",
  cheese: "brie cheese",
};



const myTemplate: string = `I like to eat ${dataset.bread} and ${dataset.cheese}`;


function App() {

  let dataSetError;
  if (typeof dataset.bread !== 'string' || typeof dataset.cheese !== 'string') {
    return dataSetError = <p>Please the Enterd data should be String</p>
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>Yara</p>
        <p>{dataSetError}</p>
        <Chop data={dataset} template={myTemplate} />
      </header>
    </div>
  );
}

export default App;

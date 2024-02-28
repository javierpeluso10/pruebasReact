import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Texto from './components/texto/texto';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Texto name={"de productos"} />
          <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ItemListContainer2 from './ItemListContainer2/ItemListContainer2';
import Texto from './components/texto/texto';
import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Texto name={"de productos"} />
          <ItemListContainer2/> 
      </header> */}
      <MercadoLibre/>
    </div>
  );
}

export default App;

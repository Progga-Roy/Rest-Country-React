
import './App.css';
import Battery from './Component/Battary/Battery';
import Countries from './Component/Countries/Countries';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Battery></Battery>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

export default App;

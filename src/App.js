import {  } from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Players from './Component/Players/Players';
import Header from './Component/Header/Header'
import './App.css';


function App() {


  return (
    <div className="main-container">
      <Header></Header>
       <div className="container">
         <Players></Players>
    </div>
    </div>
  );
}

export default App;

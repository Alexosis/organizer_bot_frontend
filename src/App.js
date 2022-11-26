import './App.css';
import {useEffect} from "react";
import 'telegram-web-app';


function App() {

  useEffect(()=>{
    tg.ready();
  })



  return (
      <div className="App">
        Work
        <button onClick={onClose}>Close</button>
      </div>
  );
}

export default App;

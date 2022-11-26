import './App.css';
import {useEffect} from "react";
import 'telegram-web-app';
import {useTelegram} from "./components/hook/useTelegram";


function App() {
    const {onToggleButton, tg} = useTelegram();

  useEffect(()=>{
    tg.ready();
  })



  return (
      <div className="App">
        Work
        <button onClick={onToggleButton}>togle</button>
      </div>
  );
}

export default App;

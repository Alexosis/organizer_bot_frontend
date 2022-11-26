import './App.css';
import {useEffect} from "react";
import 'telegram-web-app';
import {useTelegram} from "./components/hook/useTelegram";
import Header from "./components/header/Header";


function App() {
    const {onToggleButton, tg} = useTelegram();

  useEffect(()=>{
    tg.ready();
  })



  return (
      <div className="App">
        <Header></Header>
        <button onClick={onToggleButton}>togle</button>

      </div>
  );
}

export default App;

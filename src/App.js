import './App.css';
import {useEffect} from "react";
import 'telegram-web-app';
import {useTelegram} from "./components/hook/useTelegram";
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
// import Calendar from "./components/Calendar/Calendar";
import Form from "./components/form/Form";
import EventList from "./components/EventList/EventList";

function App() {
    const {tg} = useTelegram();

  useEffect(()=>{
    tg.ready();
  }, [tg])



  return (
      <div className="App">
        <Header></Header>
        <Routes>
            <Route index element={<EventList />} />
            <Route path={'form'} element={<Form />} />
        </Routes>
      </div>
  );
}

export default App;

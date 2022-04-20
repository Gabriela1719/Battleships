import './App.css'
import InteractScreen from "./components/InteractScreen";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Routes} from 'react-router'
import Players from "./components/Players";
import ErrorPage from "./components/ErrorPage";
import Game from "./components/Game";
import AddNew from "./components/AddNew";

export default function App() {


  return (
      <Router>
        <Routes>
          <Route path='/' element={<InteractScreen />}/>
          <Route path='/players' element={<Players />}/>
          <Route path='/game' element={<Game />}/>
          <Route path='/addnew' element={<AddNew />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </Router>
  );
}

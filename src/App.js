import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Navbar/>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;

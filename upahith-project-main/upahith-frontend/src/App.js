// import Home from './components/screen/Home';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
       </Router>
    </div>
  );
}

export default App;

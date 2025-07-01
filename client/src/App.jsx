import AuthContext from './context/AuthContext';
import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
// import ProfileCard from './components/Profile';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
    
    <Router>
      <Navbar/>
      <AuthContext />
      
    </Router>
      {/* Uncomment the line below to display a welcome message */}
      {/* <h1>Welcome to the App</h1> */}
      
      
    </>
  )
}

export default App

import logo from './logo.svg';
import './App.css'; //Importing CSS
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Section/Profle/Profile';



const App = () =>  {
  return (
    <div className="app-wrapper"> 
      <Header/>
      <Nav/>
      <Profile/>  
    </div> 
  );
}


export default App;

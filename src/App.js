import logo from './logo.svg';
import './App.css'; //Importing CSS
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Section/Profle/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import { BrowserRouter, Route  } from 'react-router-dom';


const App = () =>  {
  return (
    <BrowserRouter>
    <div className="app-wrapper"> 
      <Header/>
      <Nav/>

      <div className='app-wrapper-content'>  
      <Route exact path="/dialogs" component={Dialogs} />
 
        
      <Route exact path="/profile" component={Profile} />
        
      <Route exact path="/music" component={Music} />
      </div>

      
    </div> 
    </BrowserRouter>
  );
}


export default App;

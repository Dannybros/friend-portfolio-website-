import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header  from './Header/Header';
import Hero from './Hero/Hero';
import Intro from './Intro/Intro';
import Skill from './Skill/Skill';
import Education from './Education/Education';
import Exp from './Experience/Exp';
import FooterPage from './Footer/FooterPage';

function App() {
  return (
    <Router>
      <div className="App">
    
      <Switch>

        <Route path='/'>
          <Header/>
          <Hero/>
          <Intro />
          <Skill/>
          <Education />
          <Exp/>
          <FooterPage/>
        </Route>
          
      </Switch>
        
      </div>
    </Router>
  );
}

export default App;

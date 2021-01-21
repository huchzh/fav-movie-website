import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Screens
import HomeScreen from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen';
import SigninScreen from './screens/SigninScreen';
import ListScreen from './screens/ListScreen';

//Components
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/movie/:id" component={MovieScreen}></Route>
          <Route exact path="/signin" component={SigninScreen}></Route>
          <Route exact path="/list" component={ListScreen}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

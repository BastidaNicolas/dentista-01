import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Import components
import Toolbar from './Components/Toolbar/Toolbar';
import Home from './Pages/Home';
import General from './Pages/General';
// import Loader from './Components/Loader/Loader';
// import Temp from './Pages/Temp';
import Cosmetica from './Pages/Cosmetica';
import Reconstructiva from './Pages/Reconstructiva';
import Galeria from './Pages/Galeria';
import PageBottom from './Components/PageBottom';

function App() {

  const [popUp, setPopUp] = useState(false);
  // const [loaded, setLoaded] = useState(false);

  // const loading = window.addEventListener('load', () => (
  //   setLoaded(true)
  // ))

  // useEffect(() => {
  //   loading()
  // }, [loading])

  // if(!loaded){
  //   return <Loader/>
  // }else{
    return (
      <>
        <Router>
          <Toolbar active={popUp} setActive={setPopUp}/>
          <main>
            <Switch>
              <Route exact path='/'>
                <Home active={popUp} setActive={setPopUp}/>
              </Route>
              <Route exact path='/general'>
                <General active={popUp} setActive={setPopUp}/>
              </Route>
              <Route exact path='/cosmetica'>
                <Cosmetica active={popUp} setActive={setPopUp}/>
              </Route>
              <Route exact path='/cirugia'>
                <Reconstructiva active={popUp} setActive={setPopUp}/>
              </Route>
              <Route exact path='/galeria'>
                <Galeria active={popUp} setActive={setPopUp}/>
              </Route>
            </Switch>
          </main>
          <PageBottom/>
        </Router>
      </>
    );
  // }
}

export default App;

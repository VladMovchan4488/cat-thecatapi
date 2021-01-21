import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatPage from './pages/CatPage'
import './index.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'><HomePage/></Route>
          <Route exact path='/cat-page'><CatPage/></Route>
          <Redirect to='/'/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

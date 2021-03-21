import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/header'
import HomeBody from './containers/home/homeBody'
import VoteBody from './containers/vote/voteBody'
import ResultBody from './containers/result/resultBody'
import FormBody from './containers/Form/formBody'
import './App.scss';
import './components/header/header.scss'

class App extends React.Component{
  render(){
    return(
        <Router>     
            <Header/>
            <Switch>
              <Route exact path="/vote">
                <VoteBody/>
              </Route>
              <Route exact path="/result">
                <ResultBody/>
              </Route>
              <Route exact path='/user/register'>
                <FormBody/>
              </Route>
              <Route path='/'>
                <HomeBody/>
              </Route>
            </Switch>
      </Router>
    )
  }
}

export default App;
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/header'
import Body from './containers/body/body'
import BottomNav from './components/bottomNav/bottomNav'
import './App.scss';

class App extends React.Component{
  render(){
    return(
        <Router>     
            <Header/>
            <Body/>
            <BottomNav/>
        </Router>
      )
  }
}

export default App;
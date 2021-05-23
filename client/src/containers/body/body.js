import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeBody from '../home/homeBody'
import VoteBody from '../vote/voteBody'
import ResultBody from '../result/resultBody'
import FormBody from '../Form/formBody'
import './body.scss'

class Body extends React.Component{
    render(){
        return(
            <div className='body'>
                <Switch>
                <Route exact path="/user">
                    <VoteBody/>
                </Route>
                <Route exact path="/user/result">
                    <ResultBody/>
                </Route>
                <Route exact path='/user/register'>
                    <FormBody/>
                </Route>
                <Route path='/'>
                    <HomeBody/>
                </Route>
                </Switch>
            </div>
        )
    }
}


export default Body
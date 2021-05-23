import React from 'react'
// import {Link} from 'react-router-dom'
import StatusBar from '../../components/statusBar/statusBar'
import Btn from '../../components/btn/btn'
import './homeBody.scss'

class HomeBody extends React.Component{
    constructor(props){
        super()
        this.state = {
            totalUsers: 0,
            totalVotes: 0,
            maxScore: 0,
            topUser: 'someone'
        }
    }

    componentDidMount(){
        fetch('/data')
        .then(res => res.json())
        .then(data => {
            this.setState({
                totalUsers: data.totalUsers,
                totalVotes: data.totalVotes,
                maxScore: data.maxScore,
                topUser: data.topUser
            })
        })
    }

    render(){
        return(
            <div className = 'home-body'>
                <div className='status'>
                    <StatusBar
                    lable='TotalUsers'
                    status={this.state.totalUsers}
                    />
                    <StatusBar
                    lable='TotalVotes'
                    status={this.state.totalVotes}
                    />
                    <StatusBar
                    lable='TopUser'
                    status={this.state.topUser}
                    />
                    <StatusBar
                    lable='MaxScore'
                    status={this.state.maxScore}
                    />
                </div>
                <div className = 'content'>
                    <p className = 'first-para'>
                        ELSOC Presents...
                    </p>
                </div>
                <div className = 'btn-wrapper'>
                    <Btn
                    link='/user/register'
                    name='Join Contest'
                    />
                </div>
            </div>
        )
    }
}

export default HomeBody
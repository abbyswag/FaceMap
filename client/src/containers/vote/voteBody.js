import React from 'react'
import Btn from '../../components/btn/btn'
import StatusBar from '../../components/statusBar/statusBar'
import HorizontalCard from '../../components/horizontalCard/card'
import './voteBody.scss'

class VoteBody extends React.Component{
    constructor(props){
        super()
        this.state = {
            users: []
        }
        this.btnsData = [
            'Join Contest',
            'Shuffle'
        ]
        this.careerData =[
            'developer',
            'musicians',
            'dancer'
        ]
    }

    componentDidMount(){
        fetch('/user/list')
        .then(res => res.json())
        .then(data => {
            console.log(data.list)
            this.setState({users: data.list})
        })
    }

    getImage(path){
        return `/user/${path}`
    }

    render(){
        return(
            <div className='vote-body'>
                <div className='opts'>
                    <div className='btns'>
                        {this.btnsData.map(btn => {
                            return(
                                <Btn
                                name={btn}
                                />
                            )
                        })}
                    </div>
                    <StatusBar
                    lable='Participats'
                    status={123}
                    />
                </div>
                <div className='cards'>
                    {this.state.users.map(user => {
                        console.log('hello')
                        return (
                            <HorizontalCard
                            name={user.name}
                            score={user.score}
                            imagePath={this.getImage(user.image)}
                            careers={this.careerData}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default VoteBody
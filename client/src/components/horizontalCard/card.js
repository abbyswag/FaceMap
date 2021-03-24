import React from 'react'
import './card.scss'

const career = require('../../assets/data/career.json')

class HorizontalCard extends React.Component{
    constructor(props){
        super()
        this.state = {
            isCareerBtnClicked: false,
            selectedCareer:'Choose a Career',
            status: 'Submit'
        }

        this.selectCareer = this.selectCareer.bind(this)
        this.submitData = this.submitData.bind(this)
        this.showCareers = this.showCareers.bind(this)
    }

    submitData(){
        fetch('/vote/register', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({
                whome: this.props.email,
                what: this.state.selectedCareer
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === 'true'){
                this.setState({status: 'Submitted'})
            }
            else{
                this.setState({status: 'Not Submitted'})
            }
        })
        .catch(err => console.error(err))
    }

    selectCareer(event){
        this.setState({
            isCareerBtnClicked: false,
            selectedCareer:event.target.innerHTML
        })
    }

    showCareers(){
        this.setState({isCareerBtnClicked: true})
    }

    optCard(){
        return(
            <div className='opt-card'>
                {career.data.map(career => {
                    return(
                        <div 
                        className='opt'
                        onClick={this.selectCareer}
                        >
                            {career}
                        </div>
                    )
                })}
            </div>
        )
    }

    render(){
        if(this.state.isCareerBtnClicked)return this.optCard()
        else return (
            <div className='card'>
                <div 
                className='img'
                style={{backgroundImage:`url(${this.props.imagePath})`}}>
                </div>

                <div className='content'>
                    <div className='data'>
                        <div className='name'>
                            {this.props.name}
                        </div>
                        <div className='score'>
                            score: <span>{this.props.score}</span>
                        </div>
                    </div>
                    <div className='choice'>
                        <div className='opt'
                        onClick={this.showCareers}
                        >
                            {this.state.selectedCareer}
                        </div>
                    </div>
                    <div className='status'>
                        <div className='submit'
                        onClick={this.submitData}
                        >
                            {this.state.status}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HorizontalCard
import React from 'react'
import './result.scss'

class Result extends React.Component{
    

    render(){
        return(
            <div className='result'>
                <div className='img'
                style={{backgroundImage: `url(${this.props.imagePath})`}}
                ></div>
                <div className='name'>
                    {this.props.name}
                </div>
                <div className='status'>
                    <div className='rank'>
                        #{this.props.rank}
                    </div>
                    <div className='score'>
                        score: {this.props.score}
                    </div>
                </div>
            </div>
        )
    }
}

export default Result
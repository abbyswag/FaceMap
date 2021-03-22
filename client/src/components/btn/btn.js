import React from 'react'
import {Link} from 'react-router-dom'
import './btn.scss'

class Btn extends React.Component{
    render(){
        return(
            <div className='btn'>
                <Link to='/user/register'
                    className='link'>
                    {this.props.name}    
                </Link>
            </div>
        )
    }
}

export default Btn
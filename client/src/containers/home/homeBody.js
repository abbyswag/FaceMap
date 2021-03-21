import React from 'react'
import {Link} from 'react-router-dom'
import './homeBody.scss'

class HomeBody extends React.Component{
    render(){
        return(
            <div className = 'home'>
                <div className = 'content'>
                    <p className = 'first-para'>
                        ELSOC Presents FaceMask
                    </p>
                    <p className = 'second-para'>
                        A Fun event for guessing the career of your collegemates and friends.
                    </p>
                </div>
                <div className = 'btn'>
                    <Link to='/user/register'
                    className='link'>
                        Join Contest
                    </Link>
                </div>
            </div>
        )
    }
}

export default HomeBody
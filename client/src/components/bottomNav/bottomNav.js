import React from 'react'
import HowToVoteIcon from '@material-ui/icons/HowToVote'
import PollIcon from '@material-ui/icons/Poll'
import ScheduleIcon from '@material-ui/icons/Schedule'
import PeopleIcon from '@material-ui/icons/People'
import {Link} from 'react-router-dom'
import './bottomNav.scss'
// import PersonIcon from '@material-ui/icons/Person';

class BottomNav extends React.Component{
    constructor(props){
        super()
        this.navOpts=[
            [<HowToVoteIcon/>,'Vote','/user'],
            [<PollIcon/>,'Result','user/result'],
            [<ScheduleIcon/>,'Schedule','schedule'],
            [<PeopleIcon/>,'About Us','/about']
        ]
    }
    render(){
        return(
            <div className='bottom-nav'>
                {this.navOpts.map(opt => {
                    return(
                        <NavOpt
                        icon={opt[0]}
                        name={opt[1]}
                        link={opt[2]}
                        />
                    )
                })}
            </div>
        )
    }
}


class NavOpt extends React.Component{
    render(){
        return(
            <Link to={this.props.link}
            className='link'>
               <div className='nav-opt'>
                    {this.props.icon}
                    <div className='name'>
                        {this.props.name}
                    </div>
                </div> 
            </Link>
        )
    }
}

export default BottomNav
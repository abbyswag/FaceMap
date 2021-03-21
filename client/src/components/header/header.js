import React from 'react'
import {Link } from "react-router-dom";
import './header.scss'

class Header extends React.Component{
    render(){
        return(
            <div className = 'header'>
              <div className = 'app-name'>
                    <Link to="/"
                    className = 'link'>
                        FaceMask
                    </Link>
                </div>
                <div className = 'nav-bar'>
                    <Link to="/vote"
                    className = 'link nav-opt'>
                        Vote
                    </Link>
                    <Link to='/result'
                    className = 'link nav-opt'>
                        Result
                    </Link>
                    <Link to='/about'
                    className='link nav-opt'>
                        About Us
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header
import {Component} from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { PiHouseLineBold } from "react-icons/pi";
import './index.css'

class Header extends Component{
    render(){
        return(
            <div className='header-cont'>
                <p>Chat/Feed Chat</p>
                <div className='header-last'>
                <PiHouseLineBold />
                    <button className='yellow-btn'>Process Owner HOD</button>
                    <button className='pink-btn'>Admin</button>
                    <p>Palak Bansal</p>
                    <img src="https://res.cloudinary.com/dujs7naih/image/upload/v1733055927/Ellipse_3855_d5rbn2.png" alt="Bansal"/>
                    <IoSettingsOutline />
                    <LuLogOut />
                    <span>Log Out</span>
                    
                    
                </div>
            </div>
        )
    }
}

export default Header
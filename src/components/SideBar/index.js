import { Component } from 'react'
import { BsBox } from "react-icons/bs";
import { LuGift } from "react-icons/lu";
import { SlWrench } from "react-icons/sl";
import { PiNetworkBold } from "react-icons/pi";
import { HiLink } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa6";

import { AiOutlineAudit } from "react-icons/ai";
import './index.css'

class SideBar extends Component{
    
    render(){
        
        return(
            <div className="side-bg">
    
                <div className='side-img-cont'>
                    <img src="https://res.cloudinary.com/dujs7naih/image/upload/v1733029630/riskhawk-logo_1_snefcw.png" alt="RISK HAWK"/>
                </div>
                <div className='side-main-cont'>
                    <div className='side-icons-cont'>
                    <AiOutlineAudit  className='side-icon' />
                        <span>Internal Audit</span>
                        <FaChevronRight className='side-icon'  />
                    </div>

                    <div className='side-icons-cont'>
                    <PiNetworkBold className='side-icon' />
                        <span>UAT Testing</span>
                    </div>

                    <div className='side-icons-cont'>
                        <HiLink className='side-icon'   />
                        <span>Intract</span>
                        <FaChevronRight className='side-icon'  />
                    </div>

                    <div className='side-icons-cont'>
                    <PiNetworkBold className='side-icon' />
                        <span>Queue</span>
                    </div>

                    <div className='side-icons-cont'>
                        <PiNetworkBold className='side-icon' />
                        <span>Workflow</span>
                    </div>

                    <div className='side-icons-cont'>
                    <PiNetworkBold className='side-icon' />
                        <span>Admin</span>                 
                    </div>

                    <div className='side-icons-cont'>
                        
                            <BsBox className='side-icon' />

                    
                        
                        <span>Asset</span>
                    </div>

                    <div className='side-icons-cont'>
                    <PiNetworkBold className='side-icon' />
                        <span>Parent</span>
                    </div>

                    <div className='side-icons-cont'>
                    <PiNetworkBold className='side-icon' />
                        <span>Option One</span>
                    </div>

                    <div className='side-icons-cont'>
                    <PiNetworkBold className='side-icon' />
                        <span>Option Two</span>
                    </div>

                    <div className='side-icons-cont'>
                        <SlWrench className='side-icon' />
                        <span>All Accessories</span>
                    </div>

                    <div className='side-icons-cont'>
                    <PiNetworkBold className='side-icon' />
                        <span>Internal Audit</span>
                        <FaChevronRight className='side-icon'  />

                    </div>


                    <div className='side-icons-cont'>
                        <PiNetworkBold className='side-icon' />
                        <span>Decorating</span>
                        <FaChevronRight className='side-icon'  />
                    </div>

                    <div className='side-icons-cont'>
                        <LuGift className='side-icon'/>
                        <span>Presenting</span>
                    </div>
                    
                </div>
            </div>
        )

    }
    

}


export default SideBar
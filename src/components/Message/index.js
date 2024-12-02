import {Component} from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import './index.css'

class Message extends Component{
    render(){
        return(
            <div className='message-main'>
                <div className='message-main-cont'>
                    <div className='message-cont'>CB</div>
                    <span>Cheyenne Bergson</span>
                </div>

                <div className='message-main-cont'>
                    <div className='message-cont'>CB</div>
                    <span>Jonatha Higgins</span>
                </div>

                <div className='message-main-cont'>
                    <div className='message-cont'>CB</div>
                    <span>Capt. Trunk</span>
                </div>

                <div className='message-main-cont'>
                    <div className='message-cont'>CB</div>
                    <span>Hanibal Smi..</span>
                </div>

                <div className='message-main-cont'>
                    <div className='message-cont'>CB</div>
                    <span>Capt. Trunk</span>
                </div>

                <div className='message-main-cont'>
                    <div className='message-cont'>CB</div>
                    <span>Hanibal Smi..</span>
                </div>


                <div className='message-main-cont message-blue'>
                    <LuMessagesSquare  />
                    
                    <span>Messaging..</span>
                    <IoIosArrowForward />
                </div>
            </div>
        )
    }
}

export default Message
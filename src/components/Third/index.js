import {Component} from 'react'
import { RiCloseLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { LuPlusCircle } from "react-icons/lu";
import { IoPricetagOutline } from "react-icons/io5";
import { MdPhotoCameraBack } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { BsCopy } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { MdOutlineLocalPostOffice } from "react-icons/md";
import './index.css'

class Third extends Component{
    render(){
        return(
            <div className='third' >
                <div className='third-first-main-cont'>
                    <div className='third-id-cont'>
                        <div className='third-id'>
                            CB
                        </div>
                        <p>Habbinal Smith</p>
                    </div>
                    <div className='third-cust-main-cont'>
                        <div className='third-cust-mini'>
                            <p className='third-head'>CUSTOMER ID</p>
                            <p className='third-ans'>12345:</p>

                        </div>
                       <hr />

                        <div className='third-cust-mini'>
                            <p className='third-head'>Email Address</p>
                            <p className='third-ans'>rachel@sample.com:</p>

                        </div>
                        <hr />

                        <div className='third-cust-mini'>
                            <p className='third-head'>Phone Number</p>
                            <p className='third-ans'>789456127:</p>

                        </div>

                        <div className='third-cust-mini-add'>
                            <p>Add</p>

                        </div>
                    </div>

                    <div className='third-cust-main-cont'>
                        <div className='third-cust-mini'>
                            <p className='third-head'>Loyalty Tier</p>
                            <p className='third-ans'>Silver : </p>

                        </div>
                       <hr />

                        <div className='third-cust-mini'>
                            <p className='third-head'>Segment</p>
                            <p className='third-ans'>sleepy Customer : </p>

                        </div>

                        <div className='third-cust-mini-add'>
                            <p>Add</p>

                        </div>
                    </div>

                    <div className='third-cust-main-cont'>
                        

                        <div className='third-cust-mini'>
                            <p className='third-head'>LifeTime Value</p>
                            <p className='third-ans'>$ 1M:</p>

                        </div>
                        <hr />

                        <div className='third-cust-mini'>
                            <p className='third-head'>Propensity to Purchase</p>
                            <p className='third-ans'>75 %:</p>

                        </div>

                        <div className='third-cust-mini-add'>
                            <p>Add</p>

                        </div>
                    </div>

                    <div className='third-cust-main-cont'>
            

                        <div className='third-cust-mini'>
                            <p className='third-head'>Engagement Score</p>
                            <p className='third-ans'>80% :</p>

                        </div>

                        <div className='third-cust-mini-add'>
                            <p>Add</p>

                        </div>

                        <div className='third-cust-mini-add btni'>
                            <p>Asign Other Agent</p>

                        </div>

                        <div className='third-cust-mini-add btn2'>
                            <p>Add New Widget</p>

                        </div>
                    </div>

                </div>






                <div className='mid-cont'>
                    <div className='mid-top-cont'>
                        <p >Conversation</p>
                        <div className='mid-close'>
                            <span>Address update</span>
                            <RiCloseLine />
                        </div>
                        <div className='mid-close'>
                            <span>Fee Reversal</span>
                            <RiCloseLine />
                        </div>
                        <p>Rate</p>
                        <button className='mid-btn'>Escalate</button>
                    </div>
                    <hr />

                    <div className='last-white-cont'>
                        <div className='mid-cover'>
                            <p className='mid-underline'>Conversation</p>
                            <p>Attachment</p>
                        </div>
                        <div className='last-last-cont mid-message'>
                            <p>Lorem ipsum dolor sit amet consectetur.Et tincidunt odio vivamus ac  aliquam.Placerat maecenas quis ut elementum praesent imperdiet.</p>
                        </div>
                        <div>
                            <div className='mid-time-details'>
                                <div className='mid-det'>
                                    <div className='mid-id'>CB</div>
                                    <div>
                                        <p>Rachel Adams</p>
                                        <p><span>9:08 PM</span> Received By Whatsapp</p>
                                    </div>
                                </div>
                                <div>
                                <BsThreeDots />
                                </div>
                                
                            </div>
                            <div  className='last-last-cont mid-message'>
                                <p>Lorem ipsum dolor sit amet consectetur.Et tincidunt odio vivamus ac aliquam.Placerat maecenas quis ut elementum praesent imperdiet.Egestas mattis pellentesque nibhi dui sed malesuada dolor eget ipsum.  Molestie nam morbi id arcu volutpat arcu.</p>
                            </div>
                        </div>

                        <div>
                            <div className='mid-time-details'>
                                <div className='mid-det'>
                                    <div className='mid-id'>HK</div>
                                    <div>
                                        <p>You</p>
                                        <p><span>27 Jul, 2024 9:08 PM</span> Sent By Whatsapp</p>
                                    </div>
                                </div>
                                <div>
                                <BsThreeDots />
                                </div>
                                
                            </div>
                            <div className='last-last-cont mid-message'>
                                <p>Lorem ipsum dolor sit amet consectetur.Et tincidunt odio vivamus ac aliquam.Placerat maecenas quis ut elementum praesent imperdiet.Egestas mattis pellentesque nibhi dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.</p>
                            </div>
                        </div>

                        <div className='mid-app'>
                            <div>
                                <input type="checkbox" defaultChecked="true" id="sms"/>
                                <label htmlFor='sms'>SMS</label>
                            </div>
                            <div>
                                <input type="checkbox"  id="whatsapp"/>
                                <label htmlFor='whatsapp'>Whatsapp</label>
                            </div>
                            <div>
                                <input type="checkbox" defaultChecked="true" id="email"/>
                                <label htmlFor='email'>Email</label>
                            </div>
                        </div>

                        <div>
                            <input type="text" className='mid-input-cont mid-input' placeholder='Type a message..'/>
                            <button className='last-one-btn'><MdSend /> Send</button>
                        </div>
                    </div>

                </div>
                <div className='last-cont'>
                    <div className='last-white-cont'>
                        <div className='last-first-cont last-white-cont'>
                            <h1 className='last-head'>Ask Captura</h1>
                            <div>
                            <MdOutlineLocalPostOffice />
                            <span>Whatsapp</span>

                            </div>
                            <div>
                            <MdOutlineLocalPostOffice />
                            <span>Greetings</span>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className='last-blur-cont'>
                                <p>Greeting Template</p>
                                <div className='last-bluring'>
                                    <button className='last-blur-btn'><BsCopy />Copy to Send</button>
                                    <button className='last-blur-btn'> <MdOutlineRemoveRedEye /> PreView</button>
                                </div>
                            </div>
                            <div className='inputing'>
                            
                                <input type="text" className='mid-input-cont' placeholder='Type a message..'/>
                                <button className='last-one-btn'><MdSend /></button>
                            
                            </div>
                        </div>

                    </div>
                    

                    <div className='last-white-cont'>
                        <h1>Action Launcher</h1>
                        <div className='mid-input-cont last-input' >
                            
                            <span><MdOutlineSearch className="mid-search-cont"/>search actions..</span>
                        </div>
                        
                        <div className='last-btn-wrap-cont'>
                            <button className='last-blue-color'><LuPlusCircle />Add Action</button>
                            <button className='last-btn-element'>Fee Reversal</button>
                            <button className='last-btn-element'>Retail Onboarding</button>
                            <button className='last-btn-element'> Address Update</button>
                        </div>
                    </div>


                    <div className='last-white-cont'>
                        <div>
                        <IoPricetagOutline className='casing' />
                            <span >Case Favorite</span>

                        </div>
                        <div className='last-last-cont'>
                            <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt</p>
                        </div>
                        <div className='last-last-cont'>
                        <MdPhotoCameraBack />
                            <span>Photo</span>
                        </div>
                        <div className='last-last-cont'>
                            <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt</p>
                        </div>
                    </div>
                </div>

               



            </div>
        )
    }
}

export default Third
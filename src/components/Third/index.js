import {Component} from 'react'
import { RiCloseLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { MdSend } from "react-icons/md";

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
                        <p>Conversation</p>
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

                    <div>
                        <div>
                            <p>Conversation</p>
                            <p>Attachment</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.Et tincidunt odio vivamus ac <br /> aliquam.Placerat maecenas quis ut elementum praesent imperdiet.</p>
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
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur.Et tincidunt odio vivamus ac <br /> aliquam.Placerat maecenas quis ut elementum praesent imperdiet.<br />Egestas mattis pellentesque nibhi dui sed malesuada dolor eget ipsum. <br /> Molestie nam morbi id arcu volutpat arcu.</p>
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
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur.Et tincidunt odio vivamus ac <br /> aliquam.Placerat maecenas quis ut elementum praesent imperdiet.<br />Egestas mattis pellentesque nibhi dui sed malesuada dolor eget ipsum. <br /> Molestie nam morbi id arcu volutpat arcu.</p>
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
                            <input type="text" className='mid-input-cont' placeholder='Type a message..'/>
                            <button><MdSend /> Send</button>
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <h1>Ask Captura</h1>
                        <div>
                        <MdOutlineLocalPostOffice />
                        <span>Whatsapp</span>

                        </div>
                        <div>
                        <MdOutlineLocalPostOffice />
                        <span>Greetings</span>
                        </div>
                    </div>
                    <div>
                        <div className='last-blur-cont'>
                            <p>ukdukfjhfjah</p>
                        </div>
                        <div>
                        
                            <input type="text" className='mid-input-cont' placeholder='Type a message..'/>
                            <button className='last-one-btn'><MdSend /></button>
                        
                        </div>
                    </div>

                    <div>
                        <h1>Action Launcher</h1>
                        <input type="search" placeholder='search actions..'/>
                        <div className='last-btn-wrap-cont'>
                            <button className='last-blue-color'>Add Action</button>
                            <button className='last-btn-element'>Fee Reversal</button>
                            <button className='last-btn-element'>Retail Onboarding</button>
                            <button className='last-btn-element'> Address Update</button>
                        </div>
                    </div>


                    <div>
                        <div>
                            <span>Case Favorite</span>

                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt</p>
                        </div>
                        <div>
                            <span>Photo</span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt</p>
                        </div>
                    </div>
                </div>

               



            </div>
        )
    }
}

export default Third
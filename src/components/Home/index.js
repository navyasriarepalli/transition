import { Component } from 'react'
import SideBar from '../SideBar'
import Header from '../Header'
import Message from '../Message'
import Third from '../Third'
import './index.css'

class Home extends Component{
    
    render(){
        
        return(
            <div className="home-bg">
    
                <SideBar />

                <div>
                    <Header />
                    <Message />
                    <Third />
                    
                </div>
                
                
                
            </div>
        )

    }
    

}


export default Home
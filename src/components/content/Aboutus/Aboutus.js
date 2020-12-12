import React, { Component } from 'react'
import { useState } from 'react'
import './Aboutus.css'
import Listbut from '../Listbut'
import Togglepage from '../toggle/Togglepage'
import Application from '../checkbox/Application'
import {Link} from 'react-router-dom'
class Aboutus extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabType: 'give'
        }
    }

    toggleMe = (value) => {
        this.setState({
            tabType: value
        })
    }
               
        
    render() {
        // const inp={
        //     height:"80%",
        //     width:"40%",

        // }
        return (
            <div>
                <div className="booox">
                    <div className="booxxh">
                        <div className="h1">
                        <a href='/main'>
                        <div className='headh'>
                            AMIGO
                        </div>
                        </a>
                        </div>
                        <div className="h2">
                        
                        <div className="b"></div>
                        <div className="f"></div>
                        <div className="hooome">
                            <a href='/main'>HOME</a>
                        </div>
                        
                        <div className="aboutus"><a href='/aboutus'>AboutUs</a></div>
                        <div className="services">Services</div>
                        <div className="user">
                            <Link to='/login'>
                                <i className="fa fa-sign-out fa-lg"></i>
                            </Link>   
                        </div>
                        
                            
                        <div className="icn"> 
                            
                            <i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>  
                            
                        </div> 

                        </div>
                        <div className="h3"></div>
                        <div className="h4"></div>
                    </div>
                    <div className="c1"></div>

                    <div className="booxc">

                        <div className='aac'>
                            <div className='tet'>
                                <a href='/main'>
                                AMIGO ? 
                                </a>
                            </div>
                            <div className='tte'>
                                <div className='ttr'>
                                The purpose of this project is to help the affected without the involvement of any middle men.
                                Our project will act as an interface between the needy and the helpers.We  believe in giving back to the society  ,we will ensure that whosoever uses our platform seeking help will not go unnoticed.
                                
                                </div>
                                <div className='tti'>
                                    <img className='iii' src='data:image/jpeg;base64,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 cla'></img>
                                </div>
                                <div className='ttw'>
                                    <br/>
                                    Take information from the user <br />
                                    Take the specifics of the area/ community to be helped.<br />
                                    Provide them with the utmost satisfaction that help will be delivered ASAP<br />
                                    Display all the new information on our homepage so new users can view and help.<br />
                                    When magnanimous people visit the site , give them all the information necessary <br />
                                    Suggest them ways in which they can approach the affected site,if they want to.<br />
                                    Make sure that the affected family has all the necessities in such a turmoil.<br />

                                </div>
                            </div>
                        </div>

                    </div>
                    </div>





                    <div className="c3"></div>




                    <div className="booxf">

                    </div>
                </div>
            
        )
    }
}

export default Aboutus



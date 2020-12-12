import React, { Component } from 'react'
import { useState } from 'react'
import './Page.css'
import Listbut from '../Listbut'
import Togglepage from '../toggle/Togglepage'
import Application from '../checkbox/Application'
import {Link} from 'react-router-dom'
class Page extends Component {

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
                        <a href='/user'>
                            <i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>  
                            </a>
                        </div> 

                        </div>
                        <div className="h3"></div>
                        <div className="h4"></div>
                    </div>
                    <div className="c1"></div>

                    <div className="booxc">
                        <div className="maap">
                            <div className="r"></div>

                            <div className="bt">
                                <div className="bttq" onClick={() => this.toggleMe('give')} >
                                    <div className="buttin"  y>
                                        <div className="qw">
                                            SEND REQ.
                                        </div>
                                    </div>
                                </div>
                                <div className="bttt" onClick={() => this.toggleMe('take')}>
                                    <div className="butttin" >
                                        <div className="qw" >
                                            VOULUN REQ.
                                        </div>
                                    </div>
                                </div>
                                <div className="btttt" onClick={() => this.toggleMe('volun')}>
                                    <div className="buttttin" >
                                        <div className="qw">
                                            RECIEVE REQ.
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="ara">
                                {
                                    this.state.tabType === "give" && <div className="test">


                                        <div className="kir">
                                            <div className="tee">
                                                Input the items:
                                            </div>
                                            <div className="textfield">
                                                <div className="ttf">
                                                    <Application/>
                                                </div>
                                            </div>
                                            
                                        </div>

                                    </div>
                                }
                                {
                                    this.state.tabType === "take" && <div className="test1">
                                        <div className="kib">
                                            <div className="tee">
                                                Enter Your Details:
                                            </div>
                                            <div className="textfieldb">
                                                <div className="fn">
                                                    <input className="infn" type="text" placeholder="  First name" ></input>
                                                </div>
                                                <div className="ln">
                                                    <input className="inln" type="text" placeholder="  Last name" ></input>
                                                </div>
                                                <div className="ph">
                                                    <input className="inph" type="text" placeholder="  Phone Number" ></input>
                                                </div>
                                                <div className="em">
                                                    <input className="inem" type="text" placeholder="  Email" ></input>
                                                </div>
                                                <div className="add">
                                                    <input className="inadd" type="text" placeholder="  Address" ></input>
                                                </div>
                                            </div>
                                            <div className="sub">
                                                <div className="ttst">
                                                    <div className="tb">
                                                        <a href='/main'>
                                                        <div className="op">
                                                            Submit
                                                        </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    this.state.tabType === "volun" && <div className="test2">
                                        <div className="kig">
                                            <div className="tee">
                                                Available Items
                                            </div>
                                            <div className="textfield">
                                                <div className="ttf">
                                                    <Application/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className="exc">
                                

                            </div>
                        </div>
                    </div>





                    <div className="c3"></div>




                    <div className="booxf">

                    </div>
                </div>
            </div>
        )
    }
}

export default Page



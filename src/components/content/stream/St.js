import React, { Component } from 'react'
import './St.css'
import {Route,BrowserRouter as Router,Link} from "react-router-dom"

import Mainn from '../Main'

class St extends Component {
    
    render() {
        
       
        
        return (
            <Router>
            <div className="ww">
                <div className="za"></div>
                <div className="zb"></div>
                <div className="zc"></div>
                <div className="zd">
                    <div className="zda"></div>
                    <div className="zdb">
                        <div className="zdfb">
                            <i className="fa fa-facebook-square fa-4x"></i>
                        </div>
                    </div>
                    <div className="zdc">
                        <div className="zdig">
                            <i className="fa fa-instagram fa-4x" arian-hidden="true"></i>
                        </div>
                    </div>
                    <div className="zdd">
                        <div className="zdtw">
                            <i className="fa fa-twitter-square fa-4x" arain-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="ze">
                    <div className="zet">
                        AMIGO
                    </div>
                    <div className="zes">
                        <div className="zees" >
                            <div className="b">
                            </div>
                            
                            <div className="zee" >
                                <a className="aas" href='/login'>Enter</a>
                            </div>
                            
                            <div className="zeee">
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                </div>
                <div className="zf"></div>
                <div className="zg"></div>
                <div className="zh"></div>
                <div className="zi"></div>
            </div>
            </Router>
        )
        
    }
}

export default St

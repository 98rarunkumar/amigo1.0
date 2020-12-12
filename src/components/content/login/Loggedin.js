import React, { Component } from 'react'
import './Loggedin.css'
export class Loggedin extends Component {
    render() {
        return (
            <div className="boq">
                
                <div className="inboq">
                    <div className="h">Sign In With</div>
                    <div className="fg">

                        <div className="fb"></div>
                        <div className="fk">facebook</div>
                        <div className="gl">Google</div>
                    </div>
                    <div className="n">
                        <input type="text" placeholder="Username"></input>
                    </div>
                    <div className="p">
                    <input type="password" placeholder="Password"></input>
                    </div>
                    <div className="s">
                        <div className="sl">
                            <div className="ssl">
                                <a className="asi" href='/main'>Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div className="fp">Frogot Password ?</div>
                </div>
                
            </div>
        )
    }
}

export default Loggedin

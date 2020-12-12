import React from 'react'
import './City.css'

function City(props) {
    return (
        <div>
            <div className="lc">
                <div className="boxx">
                    <div className="icon"><img src={props.src} alt={props.alt}></img></div>
                    <div className="name">{props.txt}</div>
                </div>
                

            </div>
        </div>
    )
}


export default City


import React from 'react'
import './Listbut.css'

function Listbut(props) {
    return (
        <div className="list">
            
            <div className="ba"></div>
            <div className="dt">
                <i className="fa fa-arrow-circle-right fa-2x"></i>
            </div>
            <a href='/helper'>
            <div className="nm">{props.na}</div>
                </a>
        </div>
    )
}

export default Listbut

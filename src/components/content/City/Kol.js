import React from 'react'
import './Delhi.css'
import Listbut from '../Listbut'
import {Link} from 'react-router-dom'
function Koll() {
    return (
        <div>
            <div className="boox">
                <div className="boxxh">
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

                <div className="boxc">
                    <div className="map">
                        <div className="tit">
                            <div className="nam">Kolkata's Regions..</div>
                        </div>
                        <div className="ll">
                            {/* <Listbut na="namr"/> */}
                            <div className="an">
                                <div className="aan"></div>
                                <div className="abn">
                                    <Listbut na="Agarpara"/>
                                </div>
                                <div className="acn">
                                    <Listbut na="Nepalgange"/>
                                </div>
                                <div className="adn">
                                    <Listbut na="Sarada Pally"/>
                                </div>
                                <div className="aen">
                                    <Listbut na="Uchepota"/>
                                </div>
                            </div>
                            <div className="bn">
                                <div className="abn">
                                    <Listbut na="Paschim Barisha"/>
                                </div>
                                <div className="acn">
                                    <Listbut na="East Township"/>
                                </div>
                                <div className="adn">
                                    <Listbut na="Nazirabad"/>
                                </div>
                            </div>
                            <div className="cn"></div>
                            
                            


                        </div>

                    </div>
                </div>

                <div className="c3"></div>




                <div className="boxf">

                </div>
            </div>
        </div>
    )
}

export default Koll

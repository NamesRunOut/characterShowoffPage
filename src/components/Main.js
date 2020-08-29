import React, {Component} from 'react';
import video from '../images/vod1cut.webm';

function Main() {
    return(
        <div id="main">
                <video autoPlay muted loop><source src={video} type="video/mp4" /></video>
                <div id="main_text"><h1>RENGAR</h1><h3>The Pridestalker</h3>
                <div id="main_secondary"><p>OVERVIEW ABILITIES ULTIMATE</p></div>
                <div className="arrow"></div>
                </div>
        </div>
    );
}

export default Main;

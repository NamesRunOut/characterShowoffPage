import React, {Component} from 'react';
import empty from '../images/empty.png';
import full from '../images/1.png';
import gmail from '../images/gmail.svg';
import twitter from '../images/twitter.svg';
import github from '../images/github.svg';

function Navbar() {
    return(
        <div className="navbar">
                <a href="#main"><img src={empty} id="item1" alt="Main" /></a>
                <a href="#abilities"><img src={empty} id="item2" alt="Abilites" /></a>
                <a href="#ultimate"><img src={empty} id="item3" alt="Ultimate" /></a>
                <a href="#author"><img src={empty} id="item4" alt="Author" /></a>
            <hr />
                <a href="mailto: namesrunout@gmail.com" target="_blank"><img src={gmail} alt="gmail" /></a>
                <a href="https://twitter.com/RunNames" target="_blank"><img src={twitter} alt="twitter" /></a>
                <a href="https://github.com/NamesRunOut" target="_blank"><img src={github} alt="github" /></a>
        </div>
    );
}

export default Navbar;

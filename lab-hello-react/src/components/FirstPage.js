import React from 'react';
import './FirstPage.css'
import IronhackLogo from '../images/ironhack-logo.png';
import hamburgerLogo from '../images/hamburger-logo.png';
import declarativeLogo from '../images/declarative-logo.png';
import componentsLogo from '../images/components-logo.png';
import singleLogo from '../images/single-way-logo.png';
import jsxLogo from '../images/JSX-logo.png';


function FirstPage() {
    return(
        <div>
            <div className='background'>
                <div className='nav-container'>
                    <img className='first-page-logos' alt='IronhackLogo' src={IronhackLogo}/>
                    <img className='first-page-logos' alt='hamburgerLogo' src={hamburgerLogo}/>
                </div>

                <div className='text-container'>
                <h1>Say hello to ReactJS</h1>
                <h4>You will learn how to use the most popular frontend library and become a super Ninja developer.</h4>
                <button>Awesome!</button>
                </div>

            </div> 
                <div className='logos-container'>

                    <div className='info-container'>
                        <img alt='declarativeLogo' scr={declarativeLogo}/>
                        <h3>Declarative</h3>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>

                    <div className='info-container'>
                        <img alt='componentsLogo' scr={componentsLogo}/>
                        <h3>Components</h3>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>

                    <div className='info-container'>
                        <img alt='singleLogo' scr={singleLogo}/>
                        <h3>Single-Way</h3>
                        <p>A set of immutable values are passed to the components.</p>
                    </div>

                    <div className='info-container'>
                        <img alt='jsxLogo' scr={jsxLogo}/>
                        <h3>JSX</h3>
                        <p>Statically-typed designed to run on modern browsers.</p>
                    </div>
                </div>
        </div> 
    )
};

export default FirstPage;
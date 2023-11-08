import React from 'react';
import './App.scss';
import logo from './assets/svg/logo-light.svg';
import Link from "./components/link/link";
import Heading from "./components/heading/heading";
import Button from "./components/button/button";

function App() {
    return (
        <div className="App">
            <header className={'header'}>
                <div className={'header__content'}>
                    <nav className={'header__navigation'}>
                        <img src={logo} alt={'logo'}></img>
                        <Link text={'Apply for access'}></Link>
                    </nav>
                </div>
            </header>
            <section className={'intro'}>
                <div className={'intro__content'}>
                    <Heading headingType={"headingL"} text={'Data tailored to your needs.'}></Heading>
                    <Button text={'Learn more'} />
                </div>
            </section>
            <section className={'benefits'}></section>
            <section className={'access'}></section>
        </div>
    );
}

export default App;

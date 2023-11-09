import React from 'react';
import './App.scss';
import Logo from './assets/svg/logo-light.svg';
import Hero from './assets/image/image-hero.webp';
import PatternLeft from './assets/svg/bg-pattern-1.svg';
import PatternRight from './assets/svg/bg-pattern-2.svg';
import Link from "./components/link/link";
import Button from "./components/button/button";
import Benefit, {BenefitModel} from "./components/benefit/benefit";
import { v4 as uuidV4 } from 'uuid';

const benefits: BenefitModel[] = [
    {
        title: 'Actionable insights',
        text: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.'
    },
    {
        title: 'Data-driven decisions',
        text: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.'
    },
    {
        title: 'Always affordable',
        text: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.'
    }
]

function App() {
    return (
        <div className="App">
            <header className={'header'}>
                <div className={'header__content'}>
                    <nav className={'header__navigation'}>
                        <img src={Logo} alt={'logo'}></img>
                        <Link text={'Apply for access'}></Link>
                    </nav>
                </div>
            </header>
            <section className={'intro'}>
                <div className={'intro__content'}>
                    <h1 className={'intro__heading'}>Data <span className={'intro__heading--underline'}>tailored</span> to your needs.</h1>
                    <Button text={'Learn more'}/>
                    <img className={'intro__heroImage'} src={Hero} alt={'hero'}/>
                    <img className={'intro__patternLeft'} src={PatternLeft} alt={'PatternLeft'}/>
                    <img className={'intro__patternRight'} src={PatternRight} alt={'PatternRight'}/>
                </div>
            </section>
            <section className={'benefits'}>
                <div className={'benefits__content'}>
                    <div className={'benefits__container'}>
                        {benefits.map((benefit, index) => (
                            <Benefit key={uuidV4()} title={benefit.title} text={benefit.text} benefitCount={index}></Benefit>
                        ))}
                    </div>
                </div>

            </section>
            <section className={'access'}></section>
        </div>
    );
}

export default App;

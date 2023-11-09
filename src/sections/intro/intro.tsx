import Button from "../../components/button/button";
import Hero from "../../assets/image/image-hero.webp";
import PatternLeft from "../../assets/svg/bg-pattern-1.svg";
import PatternRight from "../../assets/svg/bg-pattern-2.svg";
import Container from "../../components/container/container";

const Introduction = () => {
    return (
        <section className={'intro'}>
            <Container>
                <div className={'intro__content'}>
                    <h1 className={'intro__heading'}>Data <span className={'intro__heading--underline'}>tailored</span> to your needs.</h1>
                    <Button text={'Learn more'}/>
                    <img className={'intro__heroImage'} src={Hero} alt={'hero'}/>
                    <img className={'intro__patternLeft'} src={PatternLeft} alt={'PatternLeft'}/>
                    <img className={'intro__patternRight'} src={PatternRight} alt={'PatternRight'}/>
                </div>
            </Container>
        </section>
    );
}

export default Introduction;
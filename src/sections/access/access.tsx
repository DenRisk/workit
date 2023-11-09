import Founder from "../../assets/image/image-founder.webp";
import Button from "../../components/button/button";
import PatternAccess from "../../assets/svg/bg-pattern-3.svg";
import Container from "../../components/container/container";

const Access = () => {
    return (
        <section className={'access'}>
            <Container>
                <div className={'access__content'}>
                    <img className='access__founder' src={Founder} alt={'Founder'}/>
                    <div className='access__profile'>
                        <h2 className='access__heading'>Be the first to test</h2>
                        <p className='access__text'>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become
                            a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to
                            schedule a call.</p>
                        <Button text={'Apply for access'}/>
                        <img className={'access__patternAccess'} src={PatternAccess} alt={'PatternAccess'}/>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Access;
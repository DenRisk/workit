import LogoDark from "../../assets/svg/logo-dark.svg";
import IconFacebook from "../../assets/svg/icon-facebook.svg";
import IconTwitter from "../../assets/svg/icon-twitter.svg";
import IconInstagram from "../../assets/svg/icon-instagram.svg";
import Container from "../../components/container/container";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <Container>
                <div className={'footer__content'}>
                    <img className={'footer__logo'} src={LogoDark} alt={'LogoDark'}/>
                    <div className={'footer__social'}>
                        <a href={'https://facebook.com'}>
                            <img src={IconFacebook} alt={'IconFacebook'}/>
                        </a>
                        <a href={'https://twitter.com'}>
                            <img src={IconTwitter} alt={'IconTwitter'}/>
                        </a>
                        <a href={'https://instagram.com'}>
                            <img src={IconInstagram} alt={'IconInstagram'}/>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
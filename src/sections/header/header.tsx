import LogoLight from "../../assets/svg/logo-light.svg";
import Link from "../../components/link/link";
import Container from "../../components/container/container";

const Header = () => {
    return (
        <header className={'header'}>
            <Container>
                <nav className={'header__navigation'}>
                    <img src={LogoLight} alt={'logo'}></img>
                    <Link text={'Apply for access'}></Link>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
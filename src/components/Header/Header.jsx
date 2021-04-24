import classes from '../Header/Header.module.css';

const Header = () =>{
    return(
        <header className={classes.header}>
        <a href="https://www.google.com/"><img src="https://tapcard.eu/wp-content/uploads/2021/02/cropped-tapcard-logo-psd6-1.png"/></a>
        </header>
    );
}

export default Header;
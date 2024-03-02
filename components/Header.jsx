import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import CurrentStyleEngine from '../assets/CurrentStyleEngine';
import tr from '../src/translations.json'

export default function Header(props) {
    const [selected, setSelected] = React.useState(props.language);
    const [isOpened, setIsOpened] = React.useState(false);
    const [scrollYPos, setScrollYPos] = React.useState(window.scrollY);
    const currentItem = CurrentStyleEngine();

    function setScroll() {
        setScrollYPos(window.scrollY);
    }

    React.useEffect(() => {
        window.addEventListener("scroll", setScroll);
        () => window.removeEventListener("scroll", setScroll)
    }, [])

    const handleChange = event => {
        setSelected(event.target.value);
        props.changeLanguage(event.target.value);
    }
    const handleFlag = data => {
        setSelected(data);
        props.changeLanguage(data);
    }

    const handleOpenBar = () => {
        setTimeout(() => setIsOpened(prev => !prev), 100);
    }

    const handleCloseBar = () => {
        setTimeout(() => setIsOpened(false), 250);
    }

    const activeStyleSmall = {
        textDecoration: "underline"
    }

    return (
        <>
            <header className={`header ${(scrollYPos > 96 || props.skip) ? isOpened ? "" : "no" : " "}`}>
                <div className={`header-inside ${currentItem == 0 ? "aqua" : currentItem == 1 ? "white" : "green"} ${scrollYPos > 96 ? "no" : ""}`}>

                    <button className="big-off header-btn" onClick={handleOpenBar}>!</button>
                    
                    <nav className="header-nav">
                        <button onClick={handleOpenBar} className="header-btn">{tr[selected].header.menu}</button>
                        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""} onClick={() => handleCloseBar()}>{tr[selected].header.aboutUs}</NavLink>
                        <NavLink to="/more" className={({isActive}) => isActive ? "active" : ""} onClick={() => handleCloseBar()}>{tr[selected].header.more}</NavLink>
                    </nav>
                    <Link to="." className="logo" onClick={() => handleCloseBar()}>ElCocinero</Link>
                    <div className="flex">
                        <button className="color-btn" aria-label="Change theme" onClick={() => props.changeTheme()}></button>
                        <select id="header-select" className="small-off header-select" value={selected} onChange={handleChange}>
                            <option className="select-option" value="en">English</option>
                            <option className="select-option" value="pl">Polski</option>
                            <option className="select-option" value="es">Español</option>
                        </select>
                    </div>
                </div>
            </header>
            
            <div className={`header-bar ${isOpened ? "show" : ""}`}>
                <div className="big-off header-bar-small">
                    <NavLink to="/menu" onClick={() => handleCloseBar()} style={({isActive}) => isActive ? activeStyleSmall : null}>{tr[selected].header.menu}</NavLink>
                        <div className="header-bar-list">
                            <NavLink to="/main_course" onClick={() => handleCloseBar()} style={({isActive}) => isActive ? activeStyleSmall : null}>{tr[selected].header.product1}</NavLink>
                            <NavLink to="/desserts" onClick={() => handleCloseBar()} style={({isActive}) => isActive ? activeStyleSmall : null}>{tr[selected].header.product2}</NavLink>
                            <NavLink to="/salads" onClick={() => handleCloseBar()} style={({isActive}) => isActive ? activeStyleSmall : null}>{tr[selected].header.product3}</NavLink>
                        </div>
                    <NavLink to="/about" onClick={() => handleCloseBar()} style={({isActive}) => isActive ? activeStyleSmall : null}>{tr[selected].header.aboutUs}</NavLink>
                    <NavLink to="/more" onClick={() => handleCloseBar()} style={({isActive}) => isActive ? activeStyleSmall : null}>{tr[selected].header.more}</NavLink>
                    <div className="header-flags">
                        <h4 className="header-flags-title">{tr[selected].header.lang}</h4>
                        <div className="header-flags-flex">
                            <img src="../src/flags/english.jpg" className="flag" onClick={() => {handleFlag("en")}} />
                            <img src="../src/flags/polish.jpg" className="flag" onClick={() => {handleFlag("pl")}} />
                            <img src="../src/flags/spanish.jpg" className="flag" onClick={() => {handleFlag("es")}} />
                        </div>
                    </div>
                </div>
                <div className="header-bar-big">
                    <div className="bar-item-wrapper">
                        <div className="bar-item produkt produkty" >
                            <NavLink to="/menu" onClick={() => handleCloseBar()} className="bar-item-link">{tr[selected].header.menu}</NavLink>
                        </div>
                    </div>
                    <div className="bar-item-wrapper">
                        <div className="bar-item produkt produkt1" >
                            <NavLink to="/main_course" onClick={() => handleCloseBar()} className="bar-item-link">{tr[selected].header.product1}</NavLink>
                        </div>
                    </div>
                    <div className="bar-item-wrapper">
                        <div className="bar-item produkt produkt2" >
                            <NavLink to="/desserts" onClick={() => handleCloseBar()} className="bar-item-link">{tr[selected].header.product2}</NavLink>
                        </div>
                    </div>
                    <div className="bar-item-wrapper">
                        <div className="bar-item produkt produkt3" >
                            <NavLink to="/salads" onClick={() => handleCloseBar()} className="bar-item-link">{tr[selected].header.product3}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Header.propTypes = {
    language: PropTypes.string.isRequired,
    changeLanguage: PropTypes.func.isRequired,
    changeTheme: PropTypes.func.isRequired,
    skip: PropTypes.bool.isRequired
}

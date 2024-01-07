import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import CheckInternet from '../assets/CheckInternet'

import Header from './Header'
import Footer from './Footer'
import Popup from './Popup'

export default function Layout() {
    const [yet, setYet] = React.useState(false);
    const [closed, setClosed] = React.useState(Boolean(getCookie("popup")) || false);
    const [language, setLanguage] = React.useState(getCookie("language") || getLanguage());
    const [theme, setTheme] = React.useState(getCookie("theme") || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"));
    const {pathname} = useLocation();

    function getLanguage() {
        const langNavig = window.navigator.language.split('-')[0];
        const langPack = ["pl", "en", "es"];
        if(langPack.includes(langNavig)) {
            return langNavig;
        } else {
            return "en";
        }
    }

    function getCookie(type) {
        const cookies = document.cookie;
        const types = ["popup", "language", "theme"];
        if(cookies && types.includes(type)) {
            let data = cookies.split("; ");
            data = data.find(item => item.includes(type));
            data = String(data).split('=')[1]
            return data;
        }
        return null;
    }

    function changeLanguage(data) {
        setLanguage(data);
        const d = new Date();
        d.setTime(d.getTime() + 24*60*60*1000); //język na 24 godziny
        const expires = "expires="+d.toUTCString();
        document.cookie = `language=${(data)};${expires};path=/`;
    }

    function changeTheme() {
        setTheme(old => old == "dark" ? "light" : "dark");
        const d = new Date();
        d.setTime(d.getTime() * 60*60*1000); //motyw na 1 godzinę
        const expires = "expires="+d.toUTCString();
        document.cookie = `theme=${theme == "dark" ? "light" : "dark"};${expires};path=/`;
    }

    function toggle() {
        setYet(true);
        setInterval(() => setClosed(true), 1000)
        const d = new Date();
        d.setTime(d.getTime() + 24*60*60*1000); //zgoda na 24godziny
        const expires = "expires="+d.toUTCString();
        document.cookie = `popup=${true};${expires};path=/`;
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    let cName = false
    if(pathname === "/" || pathname === "/home") {
        cName = true;
    }

    return (
        <div className={`site-wrapper ${theme == "dark" ? "dark" : ""}`}>
            <Header language={language} changeLanguage={changeLanguage} changeTheme={changeTheme} skip={cName} />
            <main className={cName ? "skip" : ""}>
                <CheckInternet language={language}>
                    <Outlet />
                </CheckInternet>
            </main>
            {!closed && <Popup language={language} toggle={toggle} closed={yet} />}
            <Footer language={language}/>
        </div>
    )
}
import React from 'react'
import Carousel from '../components/Carousel.jsx'
import Opinions from '../components/Opinions.jsx'
import { useOutletContext } from 'react-router-dom'
import tr from '../src/translations.json'

export default function Home() {
    const language = useOutletContext();

    function reveal() {
        const reveals = document.querySelectorAll(".home-item");
        for(let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 100;
            if(elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", reveal);
        return () => window.removeEventListener("scroll", reveal);
    }, [])

    return (
        <>
            <Carousel language={language} />
            <div className="home">
                <h1 className="home-title">ElCocinero</h1>
                <div className="home-wrapper">
                    <div className="home-item home-item1">
                        <h2>{tr[language].home.home.title1}</h2>
                        <p>{tr[language].home.home.desc1}</p>
                    </div>
                    <div className="home-item home-item2">
                        <h2>{tr[language].home.home.title2}</h2>
                        <p>{tr[language].home.home.desc2}</p>
                    </div>
                    <div className="home-item home-item3">
                        <h2>{tr[language].home.home.title3}</h2>
                        <p>{tr[language].home.home.desc3}</p>
                    </div>
                    <div className="home-item home-item4">
                        <h2>{tr[language].home.home.title4}</h2>
                        <p>{tr[language].home.home.desc4}</p>
                    </div>
                    <div className="home-item home-item5">
                        <h2>{tr[language].home.home.title5}</h2>
                        <p>{tr[language].home.home.desc5}</p>
                    </div>
                </div>
            </div>
            <Opinions language={language} />
        </>
    )
}
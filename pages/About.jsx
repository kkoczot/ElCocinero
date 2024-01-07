import React from 'react'
import { useOutletContext } from 'react-router-dom'
import tr from '../src/translations.json'

export default function About() {
    const language = useOutletContext();
    
    function reveal() {
        const reveals = document.querySelectorAll(".section2-item");
        for(let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 150;
            if(elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    function moveBG() {
        const bgs = document.querySelectorAll(".section-bg");
        for (let i = 0; i < bgs.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = bgs[i].getBoundingClientRect().top;
            if(windowHeight - elementTop > 0 && windowHeight - elementTop < windowHeight) {
                if(i === 0) document.body.style.setProperty("--scrVal1", Math.round((elementTop - windowHeight) / 100)+"rem");
                if(i === 1) document.body.style.setProperty("--scrVal2", Math.round((elementTop - windowHeight) / -100)+"rem");
                if(i === 2) document.body.style.setProperty("--scrVal3", Math.round((elementTop - windowHeight) / 100)+"rem");
            }
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", reveal);
        window.addEventListener("scroll", moveBG);
        return () => {window.removeEventListener("scroll", reveal); window.removeEventListener("scroll", moveBG)}
    }, [])

    return (
        <div className="about-wrapper re-padding-btm">
            <section className="about-section">
                <h1 className="site-about-title">{tr[language].about.section0.title}</h1>
                <p className="section-desc">{tr[language].about.section0.desc}</p>
            </section>
            <section className="about-section">
                <h2 className="section-title">{tr[language].about.section1.title}</h2>
                <p className="section-desc">{tr[language].about.section1.desc}</p>
                <div className="flex">
                    <div className="section-wrapper">
                        <h3 className="section-wrapper-title">{tr[language].about.section1.subtitle1}</h3>
                        <div className="section-wrapper-img">
                            <img src="../src/baners/big/baner6.jpg" className="section-img" />
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <h3 className="section-wrapper-title">{tr[language].about.section1.subtitle2}</h3>
                        <div className="section-wrapper-img">
                            <img src="../src/baners/big/baner5.jpg" className="section-img" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <h2 className="section-title">{tr[language].about.section2.title}</h2>
                <div className="section-item-wrapper">
                    <div className="section-bg food-bg1"></div>
                    <div className="section2-item section2-item1">
                        <h3 className="section-subtitle">
                            {tr[language].about.section2.subtitle1.firstName1} &#34;<i>{tr[language].about.section2.subtitle1.nickName1}</i>&#34; {tr[language].about.section2.subtitle1.lastName1}</h3>
                        <h3 className="section-subtitle">&</h3>
                        <h3 className="section-subtitle">{tr[language].about.section2.subtitle1.firstName2} {tr[language].about.section2.subtitle1.lastName2}</h3>
                        <h4 className="section-subtitle_type">{tr[language].about.section2.subtitle1_type}</h4>
                        <p className="section-desc">{tr[language].about.section2.desc1}</p>
                        <iframe
                            className="iframe1"
                            src="https://www.youtube.com/embed/HhesaQXLuRY?si=uAqy-UINhxLz-dME&amp;start=8"
                            title="Mr. White & Jassie Pinkman"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen />
                    </div>
                </div>
                <div className="section-item-wrapper">
                    <div className="section-bg food-bg2"></div>
                    <div className="section2-item section2-item2">
                        <h3 className="section-subtitle">{tr[language].about.section2.subtitle2}</h3>
                        <h4 className="section-subtitle_type">{tr[language].about.section2.subtitle2_type}</h4>
                        <p className="section-desc">{tr[language].about.section2.desc2}</p>
                        <iframe
                            className="iframe2"
                            src="https://www.youtube.com/embed/xl8zdCY-abw?si=GQBFUbvUnKVsXkAC&amp;start=8"
                            title="Pablo Escobar"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen />
                    </div>
                </div>
                <div className="section-item-wrapper">
                    <div className="section-bg food-bg3"></div>
                    <div className="section2-item section2-item3">
                        <h3 className="section-subtitle">{tr[language].about.section2.subtitle3}</h3>
                        <h4 className="section-subtitle_type">{tr[language].about.section2.subtitle3_type}</h4>
                        <p className="section-desc">{tr[language].about.section2.desc3}</p>
                        <iframe
                            className="iframe3"
                            src="https://www.youtube.com/embed/1nannle9DaE?si=FQd213_KqN4Js0id"
                            title="Rafa Caro Quintero"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen />
                    </div>
                </div>
            </section>
        </div>
    )
}
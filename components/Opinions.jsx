import React from 'react'
import PropTypes from 'prop-types'
import tr from '../src/translations.json'

export default function Opinions(props) {
    const [currentItem, setCurrentItem] = React.useState(window.innerWidth >= 1920 ? -1 : 0);

    function handleArrowClick(s) {
        if(currentItem != 0 && s == '-') setCurrentItem(prev => prev - 1);
        if(currentItem != 2 && s == '+') setCurrentItem(prev => prev + 1);
    }

    function cLog() {
        if(window.innerWidth >= 1920) {
            setCurrentItem(-1);
        }
        else {
            setCurrentItem(prev => prev < 0 ? 0 : prev)
        }
    }

    React.useEffect(() => {
        window.addEventListener("resize", cLog)
        return () => window.removeEventListener("resize", cLog)
    }, [])

    return (
        <div className={`opinions ${"show-item"+currentItem}`}>
            <div style={currentItem == -1 ? {display: "none"} : currentItem == 0 ? {display: "none"} : {display: "flex"}} className="opinion-arrow arrow-left" onClick={() => handleArrowClick('-')}>
                <img src="../src/arrow.png" className="opinion-arrow-img" />
            </div>
            <div style={currentItem == -1 ? {display: "none"} : currentItem == 2 ? {display: "none"} : {display: "flex"}} className="opinion-arrow arrow-right" onClick={() => handleArrowClick('+')}>
                <img src="../src/arrow.png" className="opinion-arrow-img" />
            </div>
            <div className="opinion-item opinion-item1">
                <div className="opinion-item-lower">
                    <p><span className="qt">&quot;</span>{tr[props.language].home.opinions.opinion1}<span className="qt">&quot;</span></p>
                </div>
                <div className="opinion-item-upper">
                    <div>
                        <img src="../src/opinions/firstCustomer.jpg" className="opinion-img" title="Gustavo Fring" />
                    </div>
                    <div className="opinion-upper-stars-wrapper">
                        <img src="../src/stars.png" alt="" className="opinion-upper-stars" />
                    </div>
                </div>
            </div>
            <div className="opinion-item opinion-item2">
                <div className="opinion-item-lower">
                    <p><span className="qt">&quot;</span>{tr[props.language].home.opinions.opinion2}<span className="qt">&quot;</span></p>
                </div>
                <div className="opinion-item-upper">
                    <div>
                        <img src="../src/opinions/secondCustomer.jpg" className="opinion-img" title="Agent K" />
                    </div>
                    <div className="opinion-upper-stars-wrapper">
                        <img src="../src/stars.png" alt="" className="opinion-upper-stars" />
                    </div>
                </div>
            </div>
            <div className="opinion-item opinion-item3">
                <div className="opinion-item-lower">
                    <p><span className="qt">&quot;</span>{tr[props.language].home.opinions.opinion3}<span className="qt">&quot;</span></p>
                </div>
                <div className="opinion-item-upper">
                    <div>
                        <img src="../src/opinions/thirdCustomer.jpg" className="opinion-img" title="Snoop Dogg" />
                    </div>
                    <div className="opinion-upper-stars-wrapper">
                        <img src="../src/stars.png" alt="" className="opinion-upper-stars" />
                    </div>
                </div>
            </div>
        </div>
    )
}

Opinions.propTypes = {
    language: PropTypes.string.isRequired
}
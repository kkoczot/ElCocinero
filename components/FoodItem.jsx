import React from 'react'
import PropTypes from 'prop-types'
import tr from '../src/translations.json'

export default function FoodItem({dishType, path, index, language}) {
    
    function reveal() {
        const reveals = document.querySelectorAll(".food-item");
        for (let i = 1; i < reveals.length; i++) {
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
        <div className="food-item">
            <div>
                <img src={path} title={tr[language][dishType]['item'+index].title} />
            </div>
            <h2>{tr[language][dishType]['item'+index].title}</h2>
            <p>{tr[language][dishType]['item'+index].desc}</p>
        </div>
    )
}

FoodItem.propTypes = {
    dishType: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired
}
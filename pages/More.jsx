import { useOutletContext } from 'react-router-dom'
import tr from '../src/translations.json'

export default function More() {
    const language = useOutletContext();
    return (
        <div className="more-main re-padding-btm">
            <h2 className="more-title">{tr[language].more.title}</h2>
            <div className="more-imgs">
                <div className="more-img-wrapper">
                    <a href="https://react-firebase-shop.netlify.app/" className="more-img-link" target="_blank" rel="noreferrer">
                        <img className="more-img" src="../src/refs/projekt1.jpg" title="react firebase shop" />
                    </a>
                </div>
            </div>
        </div>
    )
}
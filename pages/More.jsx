import { useOutletContext } from 'react-router-dom'
import tr from '../src/translations.json'

export default function More() {
    const language = useOutletContext();
    return (
        <div className="more-main re-padding-btm">
            <h2 className="more-title">{tr[language].more.title}</h2>
            <div className="more-imgs">
                <div className="more-img-wrapper">
                    <span className="more-span">{tr[language].more.img_alt}</span>
                    <img className="more-img" src="/about/outlands.jpg" alt={tr[language].more.img_alt} />
                </div>
            </div>
        </div>
    )
}

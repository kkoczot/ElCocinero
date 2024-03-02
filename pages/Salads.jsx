import { useOutletContext } from 'react-router-dom'
import FoodItem from '../components/FoodItem'
import tr from '../src/translations.json'
import { salads as paths } from '../assets/imgPaths'

export default function Salads() {
    const language = useOutletContext();

    const salads = paths.map((path, index) => <FoodItem key={path} dishType="salads" path={path} index={index + 1} language={language} />);

    return (
        <div className="food-outside-wrapper food-bg3">
            <div className="food-inside-wrapper re-padding-btm">
                <h1 className="food-title">{tr[language].salads.mainTitle}</h1>
                <p className="food-desc">{tr[language].salads.mainDesc}</p>
                <div className="food-item-wrapper">
                    {salads}
                </div>

            </div>
        </div>
    )
}
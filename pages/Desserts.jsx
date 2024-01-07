import { useOutletContext } from 'react-router-dom'
import FoodItem from '../components/FoodItem';
import tr from '../src/translations.json'
import { desserts as paths } from '../assets/imgPaths';

export default function Desserts() {
    const language = useOutletContext();

    const desserts = paths.map((path, index) => <FoodItem key={path} dishType="desserts" path={path} index={index + 1} language={language} />);

    return (
        <div className="food-outside-wrapper food-bg2">
            <div className="food-inside-wrapper re-padding-btm">
                <h1 className="food-title">{tr[language].desserts.mainTitle}</h1>
                <p className="food-desc">{tr[language].desserts.mainDesc}</p>
                <div className="food-item-wrapper">
                    {desserts}
                </div>

            </div>
        </div>
    )
}
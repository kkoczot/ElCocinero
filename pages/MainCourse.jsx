import { useOutletContext } from 'react-router-dom'
import FoodItem from '../components/FoodItem'
import tr from '../src/translations.json'
import { main as paths } from '../assets/imgPaths'

export default function MainCourse() {
    const language = useOutletContext();

    const mainCourses = paths.map((path, index) => <FoodItem key={path} dishType="mainCourse" path={path} index={index + 1} language={language} />);

    return (
        <div className="food-outside-wrapper food-bg1">
            <div className="food-inside-wrapper re-padding-btm">
                <h1 className="food-title">{tr[language].mainCourse.mainTitle}</h1>
                <p className="food-desc">{tr[language].mainCourse.mainDesc}</p>
                <div className="food-item-wrapper">
                    {mainCourses}
                </div>

            </div>
        </div>
    )
}
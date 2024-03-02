import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import tr from '../src/translations.json'
import { main as pathsMainCourse, desserts as pathsDessert, salads as pathsSalad } from '../assets/imgPaths'

export default function Menu() {
    const language = useOutletContext();
    const pathDay = new Date().getDate() % 6;
    const titleNum = pathDay + 1;

    return (
        <div className="menu">
            <div className="food-inside-wrapper">
                <h1 className="menu-title">{tr[language].menu.title}</h1>
                <div className="food-item-wrapper re-padding-btm">
                    <div className="item-bg food-bg1">
                        <div className="food-item">
                            <Link to="/main_course">
                                <div>
                                    <img src={pathsMainCourse[pathDay]} title={tr[language].mainCourse["item"+titleNum].title} />
                                </div>
                                <h2>{tr[language].menu.title1}</h2>
                                <p>{tr[language].menu.desc1}</p>
                            </Link>
                        </div>
                    </div>
                    <div className="item-bg food-bg2">
                        <div className="food-item">
                            <Link to="/desserts">
                                <div>
                                    <img src={pathsDessert[pathDay]} title={tr[language].desserts["item"+titleNum].title} />
                                </div>
                                <h2>{tr[language].menu.title2}</h2>
                                <p>{tr[language].menu.desc2}</p>
                            </Link>
                        </div>
                    </div>
                    <div className="item-bg food-bg3">
                        <div className="food-item">
                            <Link to="/salads">
                                <div>
                                    <img src={pathsSalad[pathDay]} title={tr[language].salads["item"+titleNum].title} />
                                </div>
                                <h2>{tr[language].menu.title3}</h2>
                                <p>{tr[language].menu.desc3}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
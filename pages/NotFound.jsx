import { Link, useOutletContext, useLocation } from 'react-router-dom'
import tr from '../src/translations.json'

export default function NotFound() {
    const language = useOutletContext();
    const {pathname} = useLocation();
    return (
        <div className="no-site-div re-padding-btm">
            <h1 className="no-site-error">{tr[language].notFound.ups}</h1>
            <i className="no-site-pathname">&#34;{pathname}&#34;</i>
            <p className="no-site-info">{tr[language].notFound.info}</p>
            <Link to="/" className="button">{tr[language].notFound.link}</Link>
        </div>
    )
}
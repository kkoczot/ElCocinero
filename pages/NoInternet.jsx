import PropTypes from 'prop-types'
import tr from '../src/translations.json'

export default function NoInternet(props) {
    return (
        <div className="no-site-div re-padding-btm">
            <h1 className="no-site-error">{tr[props.language].noInternet.title}</h1>
            <p className="no-site-info">{tr[props.language].noInternet.info}</p>
            <span className="no-site-emoji">:&apos;(</span>
        </div>
    )
}

NoInternet.propTypes = {
    language: PropTypes.string.isRequired
}
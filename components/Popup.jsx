import PropTypes from 'prop-types'
import tr from '../src/translations.json'

export default function Popup(props) {
    
    return (
        <div className={`popup ${props.closed ? "close" : ""}`}>
            <h1 className="popup-title">{tr[props.language].popup.title}</h1>
            <p className="popup-text">{tr[props.language].popup.text}</p>
            <button disabled={props.closed} className="button button-dark" onClick={() => props.toggle()}>{tr[props.language].popup.btn}</button>
        </div>
    )
}

Popup.propTypes = {
    language: PropTypes.string.isRequired,
    closed: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
}
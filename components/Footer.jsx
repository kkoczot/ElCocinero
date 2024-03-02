import PropTypes from 'prop-types'
import tr from '../src/translations.json'

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer-item">
                <span>{tr[props.language].footer.col1.desc}</span>
                <span>{tr[props.language].footer.col1["col1.1"]}</span>
                <span>{tr[props.language].footer.col1["col1.2"]}</span>
                <span>{tr[props.language].footer.col1["col1.3"]}</span>
            </div>
            <div className="footer-item">
                <span>{tr[props.language].footer.col2["col2.1"]}</span>
                <span>{tr[props.language].footer.col2["col2.2"]}</span>
                <span>{tr[props.language].footer.col2["col2.3"]}</span>
                <span>{tr[props.language].footer.col2["col2.4"]}</span>
                <span>Copyright © {new Date().getFullYear()} ElCocinero. All Rights Reserved</span>
            </div>
            <div className="footer-item">
                <span>{tr[props.language].footer.col3["col3.1"]}</span>
                <span>{tr[props.language].footer.col3["col3.2"]}</span>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    language: PropTypes.string.isRequired
}
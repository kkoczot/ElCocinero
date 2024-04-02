import PropTypes from 'prop-types'
import tr from '../src/translations.json'

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer-item footer-items">
                <div className="footer-item">
                    <span>{tr[props.language].footer.col1.desc}</span>
                    <span>{tr[props.language].footer.col1["col1.1"]}</span>
                    <span>{tr[props.language].footer.col1["col1.2"]}</span>
                    <span>{tr[props.language].footer.col1["col1.3"]}</span>
                </div>
                <div className="footer-item">
                    <span>{tr[props.language].footer.col3["col3.1"]}</span>
                    <span title="kacper04business@gmail.com"><a href="mailto:kacper04business@gmail.com">{tr[props.language].footer.col3["col3.2"]}</a></span>
                    <span style={{ fontSize: "10px" }}>kacper04business@gmail.com</span>
                    <span><a href="https://www.linkedin.com/in/kacper-koczot-41a245300/" rel="noreferrer" target="_blank">{tr[props.language].footer.col3["col3.3"]}</a></span>
                </div>
            </div>
            <div className="footer-item footer-item-info">
                <span>| {tr[props.language].footer.col2["col2.1"]}</span>
                <span>| {tr[props.language].footer.col2["col2.2"]}</span>
                <span>| {tr[props.language].footer.col2["col2.3"]}</span>
                <span>| {tr[props.language].footer.col2["col2.4"]}</span>
                <span>Copyright © {new Date().getFullYear()} ElCocinero. All Rights Reserved</span>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    language: PropTypes.string.isRequired
}

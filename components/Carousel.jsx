import PropTypes from 'prop-types'
import CurrentStyleEngine from '../assets/CurrentStyleEngine';
import tr from '../src/translations.json'

export default function Carousel(props) {
    const currentItem = CurrentStyleEngine();

    return (
        <section className={`carousel show${currentItem}`}>
            <div className={`carousel-item carousel-item0`}>
                <div className="carousel-img banner1 ">
                    <span className="carousel-img-desc img-desc1">{tr[props.language].home.carousel.img1}</span>
                </div>
            </div>
            <div className={`carousel-item carousel-item1`}>
                <div className="carousel-img banner2">
                    <span className="carousel-img-desc img-desc2">{tr[props.language].home.carousel.img2}</span>
                </div>
            </div>
            <div className={`carousel-item carousel-item2`}>
                <div className="carousel-img banner3">
                    <span className="carousel-img-desc img-desc3">{tr[props.language].home.carousel.img3}</span>
                </div>
            </div>
        </section>
    )
}

Carousel.propTypes = {
    language: PropTypes.string.isRequired
}
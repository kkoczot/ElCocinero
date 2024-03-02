import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import NoInternet from '../pages/NoInternet'

export default function CheckInternet(props) {
    const [isOnline, setIsOnline] = React.useState(navigator.onLine);
    const { pathname } = useLocation();

    React.useEffect(() => {
        !navigator.onLine ? setIsOnline(false) : setIsOnline(true);
        window.addEventListener('online', () => setIsOnline(true));
    }, [pathname])

    if(isOnline) {
        return <Outlet context={props.language}/>
    } else {
        return <NoInternet language={props.language} />
    }
}

CheckInternet.propTypes = {
    language: PropTypes.string.isRequired
}
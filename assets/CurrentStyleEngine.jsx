import React from 'react'
import { useLocation } from 'react-router-dom';

// V: 1.1
export default function CurrentStyleEngine() {
    const [currentItem, setCurrentItem] = React.useState(0);
    const [isStatic, setIsStatic] = React.useState(false);
    const { pathname } = useLocation();
    React.useEffect(() => {
        if(isStatic) {
            setIsStatic(false);
            setCurrentItem(0);
        }
        const id = interval(setCurrentItem);
        if(pathname != '/') {
            clearInterval(id);
            setIsStatic(true);
            if(pathname.includes("/main-dishes")) setCurrentItem(0);
            else if(pathname.includes("/desserts")) setCurrentItem(1);
            else if(pathname.includes("/salads")) setCurrentItem(2);
            else setCurrentItem(0);
        }
        return () => clearInterval(id);
    }, [isStatic, pathname]);
    return currentItem
}

function interval(setCurrentItem) {
    return setInterval(() => {
        setCurrentItem(prev => (prev + 1) % 3);
    }, 5000)
}
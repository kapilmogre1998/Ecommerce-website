import { useEffect } from 'react';
import { useRef, useState } from 'react';
import './Header.scss'

const Header = (props) => {
    const {headerSticky} = props;
    const [showSideMenu, setShowSideMenu] = useState(false);
    const navRef = useRef(null)
    const [elementWidth, setElementWidth] = useState(0);

    const handleResize = () => {
        setElementWidth(navRef?.current?.offsetWidth);
    }

    useEffect(() => {
        if(navRef?.current){
            setElementWidth(navRef?.current?.offsetWidth);
        }
       window.addEventListener?.('resize', handleResize);
    },[navRef])

    const handleClickOnOpenMenu = () => {
        if(elementWidth <= 750){
            setShowSideMenu(true);
        }
    }

    const handleClickOnCloseMenu = () => {
        setShowSideMenu(false)
    }

    return (
        <>
            <header ref={navRef} className={`flex items-center justify-between header-container ${headerSticky ? 'header-sticky shadow-md' : 'bg-grey'}`} >
                <div>
                    <img className='rounded-md' width={80} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_fUC8vkLHUkBie0556QT_LhoNJNrMKdIn55U-KK1xOw&usqp=CAU&ec=48665701" alt="" />
                </div>
                <div className="flex gap-8 text-lg menu" >
                    <div className='header-text' >Home</div>
                    <div className='header-text' >Shop</div>
                    <div className='header-text' >Product</div>
                    <div className='header-text' >Page</div>
                    <div className='header-text' >Docs</div>
                </div>
                <div className="flex gap-4 nav-icon" >
                    <i className='bx bx-search-alt-2 bx-sm' ></i>
                    <i className='bx bx-user bx-sm' ></i>
                    <i className='bx bx-cart bx-sm' ></i>
                    {!showSideMenu && <i onClick={handleClickOnOpenMenu} className='bx bx-menu bx-sm'></i>}
                    {showSideMenu && <i onClick={handleClickOnCloseMenu} className='bx bx-x bx-sm'></i>}
                </div>
            </header>
            <div className={`side-menu ${showSideMenu ? 'show-menu' : ''}`} >
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Produt</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Docs</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header;
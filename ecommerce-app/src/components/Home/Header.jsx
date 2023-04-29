import { useRef, useState } from 'react';
import './Header.scss'

const Header = (props) => {
    const {headerSticky} = props;
    const [showSideMenu, setShowSideMenu] = useState(false);

    const handleClickOnMenu = () => {
        setShowSideMenu((value) =>  !value);
    }

    return (
        <>
            <header className={`flex items-center justify-between header-container ${headerSticky ? 'fixed shadow-md' : ''}`} >
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
                    {!showSideMenu && <i onClick={handleClickOnMenu} className='bx bx-menu bx-sm'></i>}
                    {showSideMenu && <i onClick={handleClickOnMenu} className='bx bx-x bx-sm'></i>}
                </div>
            </header>
            {showSideMenu ? <div className='side-menu' >
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Produt</li>
                    <li>Page</li>
                    <li>Docs</li>
                </ul>
            </div> : null}
        </>
    )
}

export default Header;
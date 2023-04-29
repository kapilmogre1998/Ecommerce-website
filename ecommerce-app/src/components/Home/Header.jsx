import './Header.scss'

const Header = (props) => {
    const {headerSticky} = props;
    return (
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
                <box-icon color='#363636' name='search'></box-icon>
                <box-icon color='#363636' name='user'></box-icon>
                <box-icon color='#363636' name='cart'></box-icon>
                <box-icon color='#363636' name='menu'></box-icon>
            </div>
        </header>
    )
}

export default Header;
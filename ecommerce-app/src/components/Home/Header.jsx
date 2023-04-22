import './Header.scss'

const Header = () => {
    return (
        <header className="flex items-center justify-between header-container" >
            <div>
                <img className='rounded-md' width={60} height={60} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkgUW9LPedoKEry3vIMvHYHBV3-OHl18C83EykiTwVA&usqp=CAU&ec=48665701" alt="" />
            </div>
            <div className="flex gap-8" >
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
import { PRODUCT_LIST } from '../../containers/Home/constant';
import './Products.scss';

const Products = () => {
    return (
        <div className='products-container' >
            <div className="title" >Our Trending <span>Products</span></div>
            <div className='product-detail-container' >
                {
                    PRODUCT_LIST.map(({imgPath, productName, rating, strikeThroughPrice, discountedPrice}) => (
                        <div className='product' >
                            <img src={imgPath} alt="img" />
                            <div className='product-text' >
                                <div>{new Array(rating).fill(0).map(() => <i class='bx bxs-star'></i>)}</div>
                                <div className='prod-title' >{productName}</div>
                                <div className='price' >
                                    ₹
                                    <div className='price-linethrough' >{strikeThroughPrice}</div>
                                    <div>{discountedPrice}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;
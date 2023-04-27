import './Products.scss';

const Products = () => {
    return (
        <div className='products-container' >
            <div className="title" >Our Trending <span>Products</span></div>
            <div className='product-detail-container' >
                {
                    new Array(4).fill(0).map(() => (
                        <div className='product' >
                            <img src="src/assets/Prod1.jpg" alt="img" />
                            <div className='product-text' >
                                <div>{new Array(4).fill(0).map(() => <i class='bx bxs-star'></i>)}</div>
                                <div className='prod-title' >Beautiful Dress</div>
                                <div className='price' >
                                    ₹
                                    <div className='price-linethrough' >3999</div>
                                    <div>2999</div>
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
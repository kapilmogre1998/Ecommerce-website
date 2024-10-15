import { CUSTOMER_REVIEW } from '../../containers/Home/constant';
import './Review.scss';

const Review = () => {
    return (
        <div className='customer-container' >
            <div className='font-medium text-xl mt-4 mb-6 text-center' >Customer Review</div>
            <div className='customer-reviews flex gap-6' >
                {
                    CUSTOMER_REVIEW.map(({imgPath, text}, i) => (
                        <div key={i} className='flex flex-col review-container' >
                            <div className='customer-img' >
                                <img className='rounded w-full h-full object-cover' loading='lazy' src={imgPath} alt="img" />
                            </div>
                            <div className='review-text flex flex-col items-center text-left justify-around' >
                                <div className='text-sm mt-4 font-medium' >&#x201C;{text}&#x201C;</div>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </div>
    )
}

export default Review;
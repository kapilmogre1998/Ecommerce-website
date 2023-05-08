import './Review.scss';

const Review = () => {
    return (
        <div className='customer-container' >
            <div className='font-medium text-xl mt-4 mb-6 text-center' >Customer Review</div>
            <div className='customer-reviews flex gap-6' >
                {
                    new Array(3).fill(0).map((_,i) => (
                        <div key={i} className='flex flex-col review-container' >
                            <div className='customer-img' >
                                <img className='rounded w-full h-full object-cover' loading='lazy' src="src/assets/team-1.jpg" alt="img" />
                            </div>
                            <div className='review-text flex flex-col items-center text-left justify-around' >
                                <div className='text-sm mt-4 font-medium' >&#x201C;Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corrupti sit inventore nam soluta ab, odio totam ipsam quaerat? Quam architecto eveniet excepturi exercitationem iste dolorem nisi et accusamus molestiae.&#x201C;</div>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </div>
    )
}

export default Review;
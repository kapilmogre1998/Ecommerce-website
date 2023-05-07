import './Review.scss';

const Review = () => {
    return (
        <div className='review-container' >
            <div className='font-medium text-xl mt-4 mb-6 text-center' >Customer Review</div>
            <div className='reviews grid gap-4' >
                {
                    new Array(3).fill(0).map(() => (
                        <div className='customer-review flex flex-col items-center text-center py-6 px-5 justify-around' >
                            <div className='customer-img' >
                                <img className='rounded-full w-full h-full' loading='lazy' src="src/assets/review2.jpeg" alt="img" />
                            </div>
                            <div className='text-sm mt-4 font-medium' >&#x201C;Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit corrupti sit inventore nam soluta ab, odio totam ipsam quaerat? Quam architecto eveniet excepturi exercitationem iste dolorem nisi et accusamus molestiae.&#x201C;</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Review;
// import product1 from '@/images/product1.png'
// import product2 from '@/images/product4.png'
// import product3 from '@/images/product1.png'
// import product4 from '@/images/product4.png'
// import rating1 from '@/images/rating1.png'
// import rating2 from '@/images/rating2.png'
// import rating3 from '@/images/rating3.png'
// import rating4 from '@/images/rating4.png'
// import Image from 'next/image'
// // import HalfRating from './RatingStar'

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';
// import HalfRating from '../components/NewArrival/RatingStar'


// export default function Products(){
//     const cardData = [
//         {
//             image: product1,
//             productName: 'T-SHIRT WITH TAPE DETAILS',
//             rating: rating1,
//             ratingInNumber: '4.5/5',
//             discountPrice: '$700',
//             retailPrice: '$1000',
//             discount: '-30'
//         }, {
//             image: product2,
//             productName: 'SKINNY FIT JEANS',
//             rating: rating2,
//             ratingInNumber: '3/5',
//             discountPrice: '$360',
//             retailPrice: '$400',
//             discount: '-10'
//         }, {
//             image: product3,
//             productName: 'CHECKERED SHIRT',
//             rating: rating3,
//             ratingInNumber: '3/5',
//             discountPrice: '$350',
//             retailPrice: '$400',
//             discount: '-20'
//         }, {
//             image: product4,
//             productName: 'SLEEVE STRIPED T-SHIRT',
//             rating: rating4,
//             ratingInNumber: '3/5',
//             discountPrice: '$150',
//             retailPrice: '$200',
//             discount: '-25'
//         },
//     ]
//     return(
//         <div className='w-[100%] border-b-2'>
//                 <div>
//                     <h1 className='text-center text-5xl font-extrabold py-12'>YOU MIGHT ALSO LIKE</h1>
//                 </div>
//                 <Swiper
//                     slidesPerView={4}
//                     spaceBetween={18}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     modules={[Pagination]}
//                     className="mySwiper"
//                 >
//                     {cardData.map((items, index) => {
//                         const { image, productName, rating, ratingInNumber, discountPrice, retailPrice, discount } = items;

//                         return (
//                             <div>
//                                 <SwiperSlide>
//                                     <div>
//                                         <Image src={image.src} alt='products' width={295} height={295} />
//                                     </div>
//                                     <div className='flex flex-col gap-2'>
//                                         <h1 className='font-bold'>{productName}</h1>
//                                         <p><HalfRating stars={4}/></p>
//                                         <p className='flex gap-4'><span className='text-xl font-bold'>{discountPrice}</span> <span className='text-xl line-through text-[#999999]'>{retailPrice}</span> <span><button className='bg-[#FFEBEB] text-[#FF6C6C] text-sm px-4 py-1 rounded-3xl'>{discount}</button></span></p>
//                                     </div>
//                                 </SwiperSlide>
//                             </div>
//                         )
//                     })}
//                 </Swiper>
//                 <div className='flex justify-center items-center py-10'>
//                     <button className='text-center px-14 py-2 border-2 border-black rounded-3xl'>View All</button>
//                 </div>
//             </div>
//     )

// }


import product1 from '@/images/product1.png';
import product2 from '@/images/product4.png';
import product3 from '@/images/product1.png';
import product4 from '@/images/product4.png';
import rating1 from '@/images/rating1.png';
import rating2 from '@/images/rating2.png';
import rating3 from '@/images/rating3.png';
import rating4 from '@/images/rating4.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import HalfRating from '../components/NewArrival/RatingStar';

export default function Products() {
    const cardData = [
        {
            image: product1,
            productName: 'T-SHIRT WITH TAPE DETAILS',
            rating: rating1,
            ratingInNumber: '4.5/5',
            discountPrice: '$700',
            retailPrice: '$1000',
            discount: '-30',
        },
        {
            image: product2,
            productName: 'SKINNY FIT JEANS',
            rating: rating2,
            ratingInNumber: '3/5',
            discountPrice: '$360',
            retailPrice: '$400',
            discount: '-10',
        },
        {
            image: product3,
            productName: 'CHECKERED SHIRT',
            rating: rating3,
            ratingInNumber: '3/5',
            discountPrice: '$350',
            retailPrice: '$400',
            discount: '-20',
        },
        {
            image: product4,
            productName: 'SLEEVE STRIPED T-SHIRT',
            rating: rating4,
            ratingInNumber: '3/5',
            discountPrice: '$150',
            retailPrice: '$200',
            discount: '-25',
        },
    ];

    return (
        <div className="w-[100%] border-b-2">
            <div>
                <h1 className="text-center text-5xl font-extrabold py-12">YOU MIGHT ALSO LIKE</h1>
            </div>
            <Swiper
                slidesPerView={1} // Default to 1 slide per view for mobile
                spaceBetween={18}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {cardData.map((items, index) => {
                    const { image, productName, discountPrice, retailPrice, discount } = items;

                    return (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-64 h-64 lg:w-72 lg:h-72">
                                    <Image src={image.src} alt="products" width={295} height={295} />
                                </div>
                                <div className="flex flex-col items-center gap-2 text-center">
                                    <h1 className="font-bold text-lg">{productName}</h1>
                                    <p><HalfRating stars={4} /></p>
                                    <p className="flex justify-center gap-4">
                                        <span className="text-xl font-bold">{discountPrice}</span>
                                        <span className="text-xl line-through text-[#999999]">{retailPrice}</span>
                                        <span>
                                            <button className="bg-[#FFEBEB] text-[#FF6C6C] text-sm px-4 py-1 rounded-3xl">
                                                {discount}
                                            </button>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="flex justify-center items-center py-10">
                <button className="text-center px-14 py-2 border-2 border-black rounded-3xl">
                    View All
                </button>
            </div>
        </div>
    );
}

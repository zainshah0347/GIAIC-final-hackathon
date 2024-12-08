'use client'
import * as React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Swiper, SwiperSlide } from 'swiper/react';
import HalfRating from '../NewArrival/RatingStar';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const cardData = [
    {
        name: 'Sarah M.',
        p1: 'Lorem Ipsum is simply dummy text of',
        p2: "typesetting industry. Lorem Ipsum has",
        p3: 'standard dummy text ever since the 1500s,',
        p4: 'printer took a galley of type and',
    }, {
        name: 'Alex K.',
        p1: 'Lorem Ipsum is simply dummy text of',
        p2: "typesetting industry. Lorem Ipsum has",
        p3: 'standard dummy text ever since the 1500s,',
        p4: 'printer took a galley of type and',
    }, {
        name: 'James L.',
        p1: 'Lorem Ipsum is simply dummy text of',
        p2: "typesetting industry. Lorem Ipsum has",
        p3: 'standard dummy text ever since the 1500s',
        p4: 'printer took a galley of type',
    }, {
        name: 'Sarah M.',
        p1: 'Lorem Ipsum is simply dummy text of',
        p2: "typesetting industry. Lorem Ipsum has",
        p3: 'standard dummy text ever since the 1500s',
        p4: 'printer took a galley of type and',
    }, {
        name: 'Alex K.',
        p1: 'Lorem Ipsum is simply dummy text of',
        p2: "typesetting industry. Lorem Ipsum has",
        p3: 'standard dummy text ever since the 1500s,',
        p4: 'printer took a galley of type and',
    },
]


export default function ActionAreaCard() {
    return (
        <div className='py-10 px-2 flex justify-center'>
            <div className='w-[80%]'>

                <div>
                    <h1 className='text-5xl font-extrabold py-12'>OUR HAPPY CUSTOMER</h1>
                </div>
                <div>
                    <Swiper
                        loop={true}
                        slidesPerView={3}
                        spaceBetween={18}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        style={{paddingBottom : 50}}
                    >
                        {cardData.map((items, index) => {
                            const { name, p1, p2, p3, p4 } = items;
                            return (
                                <div>
                                    <SwiperSlide>
                                        <div key={index} className='border-2 p-8 rounded-3xl flex flex-col gap-2 w-fit'>
                                            <HalfRating stars={5} />
                                            <h1 className='text-2xl'>{name} <span><CheckCircleIcon className='text-[#01AB31]' /></span></h1>
                                            <p className='text-sm text-justify'>
                                                {p1}
                                                {p2}
                                                {p3}
                                                {p4}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            )
                        })}



                    </Swiper >
                </div>
            </div>
        </div >
    );
}











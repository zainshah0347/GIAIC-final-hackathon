'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

import Image from 'next/image';
import HalfRating from './RatingStar';
import cardData from '@/db';

interface Props {
    heading?: string;
}
export default function NewArrival({ heading }: Props) {
    return (
        <div className="w-full flex justify-center overflow-hidden">
            <div className="w-full max-w-7xl px-4">
                <div>
                    <h1 className="text-center text-5xl font-extrabold py-12">{heading}</h1>
                </div>
                <div className="w-full">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1400: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination]}
                    >
                        {cardData.map((items, index) => {
                            const { image, productName, rating, discountPrice, retailPrice, discount } = items;

                            return (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
                                        <Image src={image} alt="product" width={295} height={295} className="rounded" />
                                        <h1 className="font-bold text-lg">{productName}</h1>
                                        <div>
                                            <HalfRating stars={3} />
                                        </div>
                                        <p className="flex items-center gap-4">
                                            <span className="text-xl font-bold">{discountPrice}</span>
                                            <span className="text-xl line-through text-gray-400">{retailPrice}</span>
                                            <button className="bg-red-100 text-red-600 text-sm px-4 py-1 rounded-3xl">
                                                {discount}
                                            </button>
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="flex justify-center items-center py-10">
                    <button className="px-14 py-2 border-2 border-black rounded-3xl">View All</button>
                </div>
            </div>
        </div>
    );
}

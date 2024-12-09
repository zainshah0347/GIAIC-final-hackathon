'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination ,Autoplay} from 'swiper/modules';

import Image from 'next/image';
import HalfRating from './RatingStar';
import cardData from '@/db';

interface Props {
    heading?: string;
}

export default function NewArrival({ heading }: Props) {
    return (
        <div className="w-full flex justify-center overflow-hidden py-6">
            <div className="w-full max-w-7xl">
                <div>
                    <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold py-12">{heading}</h1>
                </div>
                <div className="w-full">
                    <Swiper
                        className=""
                        slidesPerView={1}
                        spaceBetween={10}
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
                        modules={[Pagination,Autoplay]}
                        autoplay={true}

                        style={{ paddingBottom: '50px' }}
                    >
                        {cardData.map((items, index) => {
                            const { image, productName, discountPrice, retailPrice, discount } = items;

                            return (
                                <div key={index}>
                                    <SwiperSlide className="">
                                        <div className="flex flex-col gap-4 py-4 bg-white shadow-lg rounded-lg">
                                            <Image
                                                src={image}
                                                alt="product"
                                                width={295}
                                                height={295}
                                                className="rounded max-w-full h-auto"
                                            />
                                            <h1 className="font-bold text-lg px-2">{productName}</h1>
                                            <div className="flex">
                                                <HalfRating stars={3.5} />
                                            </div>
                                            <p className="flex items-center px-2 gap-4 mt-2">
                                                <span className="text-xl font-bold">{discountPrice}</span>
                                                <span className="text-xl line-through text-gray-400">{retailPrice}</span>
                                                <button className="bg-red-100 text-red-600 text-sm px-4 py-1 rounded-3xl">
                                                    {discount}
                                                </button>
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="flex justify-center items-center py-10">
                    <button className="px-8 sm:px-12 md:px-14 py-2 border-2 border-black rounded-3xl text-sm sm:text-base">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
}

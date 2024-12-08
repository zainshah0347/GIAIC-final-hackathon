'use client'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import detail1 from '@/images/detail1.png'
import detail2 from '@/images/detail2.png'
import detail3 from '@/images/detail3.png'
import detail4 from '@/images/detail4.png'
import Image from 'next/image';
import HalfRating from '../components/NewArrival/RatingStar';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Reviews from './reviews';
import Products from './products';

export default function Shop() {
    return (
        <div className='flex justify-center'>
            <div className="w-[80%]">
                <div className='py-5'>
                    <h1>Home <ChevronRightIcon /> Shop <ChevronRightIcon /> Men <ChevronRightIcon /> T-shirts</h1>
                </div>

                <div className='flex justify-between py-14'>
                    <div className='flex flex-col justify-between'>
                        <div><Image src={detail1} alt='details' /></div>
                        <div><Image src={detail3} alt='details' /></div>
                        <div><Image src={detail4} alt='details' /></div>
                    </div>
                    <div>
                        <div>
                            <div><Image src={detail2} alt='details' /></div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col gap-2 py-3 border-b-2 justify-between'>
                            <h1 className='text-3xl font-extrabold'>ONE LIFE GRAPHIC T-SHIRT</h1>
                            <p><HalfRating stars={3} /></p>
                            <p className='flex gap-4'><span className='text-2xl font-bold'>$260</span> <span className='text-2xl line-through text-[#999999]'>$300</span> <span><button className='bg-[#FFEBEB] text-[#FF6C6C] text-sm px-4 py-1 rounded-3xl font-bold'>-40</button></span></p>
                            <p>This graphic t-shirt which for any occassion. Crafted from <br />
                                a soft and breathable fabric, it offers superior comfort and style.</p>
                        </div>
                        <div className='flex flex-col gap-2 py-3 border-b-2 justify-between'>
                            <h4 className='text-sm'>Select Colors</h4>
                            <div className='flex gap-3'>
                                <CheckCircleIcon style={{ fontSize: 40 }} className='text-[#4F4631]' />
                                <CircleIcon style={{ fontSize: 40 }} className='text-[#314F4A]' />
                                <CircleIcon style={{ fontSize: 40 }} className='text-[#31344F]' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 py-3 border-b-2 justify-between'>
                            <h4 className='text-sm'>Choose Size</h4>
                            <div className='flex gap-3'>
                                <button className='py-2 px-5 bg-[#F0F0F0] text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>Small</button>
                                <button className='py-2 px-5 bg-[#F0F0F0] text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>Medium</button>
                                <button className='py-2 px-5 bg-[#F0F0F0] text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>Large</button>
                                <button className='py-2 px-5 bg-[#F0F0F0] text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>X-Large</button>
                            </div>
                        </div>
                        <div className='flex gap-2 py-3'>
                            <div className='bg-[#F0F0F0] flex w-fit justify-between items-center gap-2 rounded-2xl'>
                                <button className='py-2 px-5 bg-[#F0F0F0] text-xl rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>-</button>
                                1
                                <button className='py-2 px-5 bg-[#F0F0F0] text-xl rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>+</button>
                            </div>
                            <button className='w-[100%] py-2 px-5 bg-[#F0F0F0] text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>Add To Cart</button>
                        </div>
                    </div>
                </div>

                <Reviews/>
<Products/>


            </div>
        </div>
    )
}
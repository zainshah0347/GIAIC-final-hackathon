import branch from '@/images/branch.png'
import Image from 'next/image'
import HalfRating from '../components/NewArrival/RatingStar'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Reviews() {

    const cardData = [
        {
            name: 'Sarah M.',
            p1: 'Lorem Ipsum is simply dummy text of',
            p2: "typesetting industry. Lorem Ipsum has",
            p3: 'standard dummy text ever since the 1500s,',
            p4: 'printer took a galley of type and',
            posted: 'Posted on August 18, 2023'
        }, {
            name: 'Alex K.',
            p1: 'Lorem Ipsum is simply dummy text of',
            p2: "typesetting industry. Lorem Ipsum has",
            p3: 'standard dummy text ever since the 1500s,',
            p4: 'printer took a galley of type and',
            posted: 'Posted on September 19, 2023'
        }]
    return (
        <div>
            <div className="flex justify-center border-b-2">
                <div className="flex justify-between text-xl w-[80%] text-[#8C8C8C]">
                    <div className="text-center columns-1 hover:text-black hover:border-b-2 hover:border-black px-16">Product Details</div>
                    <div className="text-center columns-1 hover:text-black hover:border-b-2 hover:border-black px-16">Rating & Reviews</div>
                    <div className="text-center columns-1 hover:text-black hover:border-b-2 hover:border-black px-16">FAQs</div>
                </div>
            </div>


            <div className='flex justify-between items-center py-5'>
                <div className='text-2xl font-semibold'>All Reviews <span className='text-sm'>(451)</span></div>
                <div className='flex items-center gap-5'>
                    <Image src={branch.src} alt='branch' width={25} height={20} className='h-fit bg-[#F0F0F0] w-fit py-2 px-5 text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white' />
                    <button className='w-fit py-2 px-5 bg-[#F0F0F0] text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>Latest</button>
                    <button className='w-fit py-2 px-5 bg-[#F0F0F0] text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>Write a Review</button>
                </div>
            </div>


            <div className='flex w-[100%] gap-5 flex-col'>
                <div className='flex gap-5'>
                    {
                        cardData.map((items, index) => {
                            const { name, p1, p2, p3, p4 } = items;
                            return (
                                <div className='flex flex-col gap-5' key={index} >
                                    <div className='flex'>
                                        <div className='border-2 p-8 rounded-3xl flex flex-col'>
                                            <HalfRating stars={5} />
                                            <h1 className='text-2xl'>{name} <span><CheckCircleIcon className='text-[#01AB31]' /></span></h1>
                                            <p className='text-sm text-justify'>
                                                {p1}
                                                {p2}
                                                {p3}
                                                {p4}
                                            </p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div key={index} className='border-2 p-8 rounded-3xl flex flex-col gap-2'>
                                            <HalfRating stars={5} />
                                            <h1 className='text-2xl'>{name} <span><CheckCircleIcon className='text-[#01AB31]' /></span></h1>
                                            <p className='text-sm text-justify'>
                                                {p1}
                                                {p2}
                                                {p3}
                                                {p4}
                                            </p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div key={index} className='border-2 p-8 rounded-3xl flex flex-col gap-2'>
                                            <HalfRating stars={5} />
                                            <h1 className='text-2xl'>{name} <span><CheckCircleIcon className='text-[#01AB31]' /></span></h1>
                                            <p className='text-sm text-justify'>
                                                {p1}
                                                {p2}
                                                {p3}
                                                {p4}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex justify-center'>
                    <button className='w-fit py-2 px-5 border-2 text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>Load More Reviews</button>
                </div>
            </div>

        </div>
    )
}

import category1 from '@/images/category1.png'
import category2 from '@/images/category2.png'
import category3 from '@/images/category3.png'
import category4 from '@/images/category4.png'
import Image from 'next/image'

export default function Category() {
    return (
        <div className='flex justify-center'>
            <div className='w-[80%] bg-[#F0F0F0] p-8 flex flex-col items-center'>
                <div>
                <h1 className='text-center text-5xl font-extrabold py-12'>BROWSE BY DRESS STYLE</h1>
                </div>
                <div className='flex justify-between h-fit'>
                    <div className='p-2'>
                        <Image src={category1} alt='category' width={407} />
                    </div>
                    <div className='p-2'>
                        <Image src={category2} alt='category' />
                    </div>
                </div>
                <div className='flex'>
                    <div className='p-2'>
                        <Image src={category3} alt='category' />
                    </div>
                    <div className='p-2'>
                        <Image src={category4} alt='category' />
                    </div>
                </div>
            </div>
        </div>
    )
}
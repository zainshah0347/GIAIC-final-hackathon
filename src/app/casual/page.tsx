import NewArrival from "../components/NewArrival";
import casual from '@/images/casual.png'
import Image from 'next/image';

export default function Casual() {
    return (
        <div className='flex w-full justify-center'>
            <div className='border-2 flex'>
                <div className='w-[250px] h-full'>
                    <Image
                        src={casual}
                        // width={250} 
                        // height={600} 
                        alt='casual'
                    />
                </div>
                <div>
                    <NewArrival heading="Casual"/>
                    <NewArrival />
                    <NewArrival />
                    <NewArrival />
                    <NewArrival />
                    <NewArrival />
                    <NewArrival/>
                </div>
            </div>
        </div>
    )
}
'use client'
import Image from "next/image"
import heroSection from '@/images/herosection.png'
import vector1 from '@/images/vector1.png'
import vector2 from '@/images/vector2.png'
import vector3 from '@/images/vector3.png'
import vector4 from '@/images/vector4.png'
import vector5 from '@/images/vector5.png'
import vector6 from '@/images/vector6.png'
import vector7 from '@/images/vector7.png'

const vectorData = [
    {
        vector: vector3,
    }, {
        vector: vector4,
    }, {
        vector: vector5,
    }, {
        vector: vector6,
    }, {
        vector: vector7,
    },
]


export default function HeroSection() {
    return (
        <div>
            <div className="flex justify-center flex-col items-center bg-contain" style={{ backgroundImage: `url('${heroSection.src}')` }}>
                <div className="w-[80%] h-screen bg-cover flex justify-between">
                    <div className="flex flex-col justify-center gap-10">
                        <h1 className="text-6xl font-extrabold">
                            FIND CLOTHES <br />THAT MATCHES <br />YOUR STYLE
                        </h1>
                        <p className="text-[#7C7B7B]">
                            Browse through our diverserange of meticulously crafted garments, designed <br />
                            to bring out your inviduality and carter to your sense of style.
                        </p>
                        <button className="w-fit bg-black py-3 px-14 rounded-3xl text-white">Shop Now</button>
                    </div>
                    <div className="flex gap-60">
                        <Image src={vector1} alt="vectors" className="h-[56px] w-[56px] mt-44" />
                        <Image src={vector2} alt="vectors" className="h-[104px] w-[104px] mt-14" />
                    </div>
                </div>
            </div>

            <div className="bg-black flex justify-between py-10 px-20">
                {vectorData.map((items, index) => {
                    const { vector } = items;
                    return (
                        <div key={index} className="flex">
                            <Image src={vector} alt="vectors"/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
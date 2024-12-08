import cardData from "@/db";

import Image from "next/image";
const srcImage = '/images/product1.png'

export default function Cart() {
    return (
        <div className="flex justify-center">
            <div className="w-[80%] flex flex-col gap-4">
                <h1>YOUR CART</h1>

                {cardData.map((items, index) => {
                    const { image, productName, discountPrice } = items;
                    return (
                        <div className="flex">
                            <div>
                                <Image src={image} alt="cart" width={100} height={100} />
                            </div>
                            <div>
                                <h1>{productName}</h1>
                                <p>Size : <span>Large</span></p>
                                <p>Color : <span>White</span></p>
                                <h2>{discountPrice}</h2>
                            </div>
                            <div className="flex bg-[#F0F0F0] rounded-xl h-fit items-end justify-end">
                                <div className="h-fit justify-end flex items-end">
                                    <button className='py-2 px-5 bg-[#F0F0F0] text-xl rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>-</button>
                                    1
                                    <button className='py-2 px-5 bg-[#F0F0F0] text-xl rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>+</button>

                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
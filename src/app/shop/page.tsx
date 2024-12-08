// 'use client'
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import detail1 from '@/images/detail1.png'
// import detail2 from '@/images/detail2.png'
// import detail3 from '@/images/detail3.png'
// import detail4 from '@/images/detail4.png'
// import Image from 'next/image';
// import HalfRating from '../components/NewArrival/RatingStar';
// import CircleIcon from '@mui/icons-material/Circle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Reviews from './reviews';
// import Products from './products';

// export default function Shop() {
//     return (
//         <div className='flex justify-center'>
//             <div className="w-[80%]">
//                 <div className='py-5'>
//                     <h1>Home <ChevronRightIcon /> Shop <ChevronRightIcon /> Men <ChevronRightIcon /> T-shirts</h1>
//                 </div>

//                 <div className='flex justify-between py-14'>
//                     <div className='flex flex-col justify-between'>
//                         <div><Image src={detail1} alt='details' /></div>
//                         <div><Image src={detail3} alt='details' /></div>
//                         <div><Image src={detail4} alt='details' /></div>
//                     </div>
//                     <div>
//                         <div>
//                             <div><Image src={detail2} alt='details' /></div>
//                         </div>
//                     </div>

//                     <div className='flex flex-col justify-between'>
//                         <div className='flex flex-col gap-2 py-3 border-b-2 justify-between'>
//                             <h1 className='text-3xl font-extrabold'>ONE LIFE GRAPHIC T-SHIRT</h1>
//                             <p><HalfRating stars={3} /></p>
//                             <p className='flex gap-4'><span className='text-2xl font-bold'>$260</span> <span className='text-2xl line-through text-[#999999]'>$300</span> <span><button className='bg-[#FFEBEB] text-[#FF6C6C] text-sm px-4 py-1 rounded-3xl font-bold'>-40</button></span></p>
//                             <p>This graphic t-shirt which for any occassion. Crafted from <br />
//                                 a soft and breathable fabric, it offers superior comfort and style.</p>
//                         </div>
//                         <div className='flex flex-col gap-2 py-3 border-b-2 justify-between'>
//                             <h4 className='text-sm'>Select Colors</h4>
//                             <div className='flex gap-3'>
//                                 <CheckCircleIcon style={{ fontSize: 40 }} className='text-[#4F4631]' />
//                                 <CircleIcon style={{ fontSize: 40 }} className='text-[#314F4A]' />
//                                 <CircleIcon style={{ fontSize: 40 }} className='text-[#31344F]' />
//                             </div>
//                         </div>
//                         <div className='flex flex-col gap-2 py-3 border-b-2 justify-between'>
//                             <h4 className='text-sm'>Choose Size</h4>
//                             <div className='flex gap-3'>
//                                 <button className='py-2 px-5 bg-[#F0F0F0] text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>Small</button>
//                                 <button className='py-2 px-5 bg-[#F0F0F0] text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>Medium</button>
//                                 <button className='py-2 px-5 bg-[#F0F0F0] text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>Large</button>
//                                 <button className='py-2 px-5 bg-[#F0F0F0] text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>X-Large</button>
//                             </div>
//                         </div>
//                         <div className='flex gap-2 py-3'>
//                             <div className='bg-[#F0F0F0] flex w-fit justify-between items-center gap-2 rounded-2xl'>
//                                 <button className='py-2 px-5 bg-[#F0F0F0] text-xl rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>-</button>
//                                 1
//                                 <button className='py-2 px-5 bg-[#F0F0F0] text-xl rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>+</button>
//                             </div>
//                             <button className='w-[100%] py-2 px-5 bg-[#F0F0F0] text-sm rounded-2xl hover:bg-black hover:text-white focus:bg-black focus:text-white'>Add To Cart</button>
//                         </div>
//                     </div>
//                 </div>

//                 <Reviews/>
// <Products/>


//             </div>
//         </div>
//     )
// }
'use client';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Reviews from './reviews';

export default function ProductDetails() {
    const [selectedColor, setSelectedColor] = useState('green'); // Default color
    const [selectedSize, setSelectedSize] = useState('Large'); // Default size
    const [quantity, setQuantity] = useState(1); // Default quantity
    const [focusedImage, setFocusedImage] = useState('/images/detail2.png'); // Default focus image

    const handleColorSelection = (color: string) => {
        setSelectedColor(color);
    };

    const handleSizeSelection = (size: string) => {
        setSelectedSize(size);
    };

    const handleQuantityChange = (type: 'increment' | 'decrement') => {
        setQuantity((prev) => {
            if (type === 'increment') return prev + 1;
            if (type === 'decrement' && prev > 1) return prev - 1;
            return prev;
        });
    };

    const handleImageFocus = (image: string) => {
        setFocusedImage(image);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => {
            return i < rating ? (
                <StarIcon key={i} className="text-yellow-500" />
            ) : (
                <StarBorderIcon key={i} className="text-gray-400" />
            );
        });
    };

    return (
        <div className="flex justify-center">
            <div className="w-[90%] lg:w-[80%]">
                {/* Breadcrumb Section */}
                <div className="py-5 text-sm md:text-base">
                    <h1>
                        Home <ChevronRightIcon /> Shop <ChevronRightIcon /> Men <ChevronRightIcon /> T-Shirts
                    </h1>
                </div>

                {/* Product Details Section */}
                <div className="flex flex-col lg:flex-row gap-8 py-10">
                    {/* Left Images */}
                    <div className="flex flex-row lg:flex-col gap-4 lg:gap-8">
                        {['/images/detail1.png', '/images/detail3.png', '/images/detail4.png'].map((img, idx) => (
                            <Image
                                key={idx}
                                src={img}
                                alt={`detail-${idx}`}
                                width={100}
                                height={100}
                                className="rounded-lg cursor-pointer hover:opacity-80"
                                onClick={() => handleImageFocus(img)}
                            />
                        ))}
                    </div>

                    {/* Main Focused Image */}
                    <div className="flex-1 flex justify-center">
                        <Image src={focusedImage} alt="Focused Image" width={600} height={300} className="rounded-lg" />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-8">
                        {/* Product Details */}
                        <div className="flex flex-col gap-3 border-b-2 pb-4">
                            <h1 className="text-2xl md:text-3xl font-extrabold">ONE LIFE GRAPHIC T-SHIRT</h1>
                            <div className="flex">{renderStars(4)}</div>
                            <p className="flex gap-4 items-center">
                                <span className="text-xl md:text-2xl font-bold">$260</span>
                                <span className="text-xl md:text-2xl line-through text-gray-400">$300</span>
                                <button className="bg-red-100 text-red-500 text-sm px-4 py-1 rounded-3xl font-bold">
                                    -40%
                                </button>
                            </p>
                            <p className="text-sm md:text-base text-gray-600">
                                This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable
                                fabric, it offers superior comfort and style.
                            </p>
                        </div>

                        {/* Select Colors */}
                        <div className="flex flex-col gap-2 border-b-2 pb-4">
                            <h4 className="text-sm md:text-base">Select Colors</h4>
                            <div className="flex gap-3">
                                {['brown', 'green', 'blue'].map((color) => (
                                    <div
                                        key={color}
                                        className={`p-1 rounded-full border-2 ${
                                            selectedColor === color ? 'border-black' : 'border-gray-300'
                                        }`}
                                        onClick={() => handleColorSelection(color)}
                                    >
                                        {color === 'brown' && <CheckCircleIcon className="text-[#4F4631]" />}
                                        {color === 'green' && <CircleIcon className="text-[#314F4A]" />}
                                        {color === 'blue' && <CircleIcon className="text-[#31344F]" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Choose Size */}
                        <div className="flex flex-col gap-2 border-b-2 pb-4">
                            <h4 className="text-sm md:text-base">Choose Size</h4>
                            <div className="flex gap-3 flex-wrap">
                                {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => handleSizeSelection(size)}
                                        className={`py-2 px-5 text-sm rounded-2xl ${
                                            selectedSize === size
                                                ? 'bg-black text-white'
                                                : 'bg-gray-200 hover:bg-black hover:text-white'
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2">
                                <div className="bg-gray-200 flex w-fit justify-between items-center gap-2 rounded-2xl px-4">
                                    <button
                                        onClick={() => handleQuantityChange('decrement')}
                                        className="py-2 px-3 text-xl rounded-2xl hover:bg-black hover:text-white"
                                    >
                                        -
                                    </button>
                                    <span className="text-lg">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange('increment')}
                                        className="py-2 px-3 text-xl rounded-2xl hover:bg-black hover:text-white"
                                    >
                                        +
                                    </button>
                                </div>
                                <button className="flex-1 py-2 px-5 bg-black text-white text-sm rounded-2xl hover:bg-gray-800">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Reviews/>

                <ProductDetails/>
            </div>
        </div>
    );
}


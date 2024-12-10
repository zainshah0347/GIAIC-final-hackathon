// // import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// // import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// // import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// // import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// // import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
// // import Link from 'next/link';


// // export default function Header() {
// //     return (
// //         <div className='flex justify-center items-center text-[#404040] flex-col'>
// //             <div className='w-[80%] flex items-center justify-between bg-black p-2 text-white'>
// //                 <h1>
// //                     Sign up and get 20% off to your first order. <span className='underline'>Sign Up Now</span>
// //                 </h1>
// //                 <span>
// //                     <ClearOutlinedIcon />
// //                 </span>
// //             </div>
// //             <div className='w-[80%] flex justify-between py-10 items-center border-b-2'>
// //                 <div>
// //                     <h1 className='text-2xl font-extrabold text-black'>SHOP.CO</h1>
// //                 </div>
// //                 <div>
// //                     <ul className='flex justify-between gap-6 p-2 px-4'>
// //                     <li>

// //           <a href='/shop'>Shop <KeyboardArrowDownOutlinedIcon /></a>
// //       </li>
// //                         <li>On Sale</li>
// //                         <li>New Arrivals</li>
// //                         <li>Brands</li>
// //                     </ul>
// //                 </div>
// //                 <div className='w-[35%]'>
// //                     <ul className='flex border-2 w-96 items-center px-2 bg-[#F0F0F0] rounded-3xl'>
// //                         <li>
// //                             <SearchOutlinedIcon />
// //                         </li>
// //                         <li className='w-96'>
// //                             <input type="search" className='w-[100%] p-2 px-4 bg-[#F0F0F0]' />
// //                         </li>
// //                     </ul>
// //                 </div>
// //                 <div>
// //                     <ul className='flex justify-between gap-6 p-2 px-4 text-black'>
// //                         <li><ShoppingCartOutlinedIcon /></li>
// //                         <li><AccountCircleOutlinedIcon /></li>
// //                     </ul>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }
// 'use client'
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
// import React from 'react';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
// import Link from 'next/link';

// import LeftDrawer from '../leftDrawer';

// export default function Header() {
//     const [open, setOpen] = React.useState(false);

//     const toggleDrawer = (newOpen: boolean) => () => {
//         setOpen(newOpen);
//     };




//     return (
//         <div className='flex justify-center items-center text-[#404040] flex-col'>
//             {/* Sign Up Bar */}
//             <div className='w-full sm:w-[80%] flex items-center justify-between bg-black p-2 text-white'>
//                 <h1 className='text-xs sm:text-sm md:text-base'>
//                     Sign up and get 20% off to your first order. <span className='underline cursor-pointer'>Sign Up Now</span>
//                 </h1>
//                 <span className='text-lg cursor-pointer'>
//                     <ClearOutlinedIcon />
//                 </span>
//             </div>

//             {/* drawer  start */}

//             <LeftDrawer open={open} toggleDrawer={toggleDrawer}>
//                 <div className='w-full sm:w-auto'>
//                     <ul className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 p-2 sm:px-4'>
//                         <li className='text-sm sm:text-base'>
//                             <a href='/shop' className='flex items-center'>
//                                 Shop <KeyboardArrowDownOutlinedIcon />
//                             </a>
//                         </li>
//                         <li className='text-sm sm:text-base'>On Sale</li>
//                         <li className='text-sm sm:text-base'>New Arrivals</li>
//                         <li className='text-sm sm:text-base'>Brands</li>
//                     </ul>
//                 </div>
//             </LeftDrawer>

//             {/* Show the MenuIcon Button only on small screens */}
//             <Button onClick={toggleDrawer(true)} className="text-black block md:hidden">
//                 <MenuIcon />
//             </Button>
//             {/* drawer  end */}





//             {/* Main Header */}
//             <div className='w-full sm:w-[80%] flex flex-col sm:flex-row justify-between py-10 items-center border-b-2'>
//                 {/* Logo */}
//                 <div>
//                     <h1 className='text-2xl font-extrabold text-black sm:text-3xl'>SHOP.CO</h1>
//                 </div>

//                 {/* Navigation Menu */}
//                 <div className='w-full sm:w-auto'>
//                     <ul className='hidden md:flex items-center flex-col sm:flex-row justify-between gap-4 sm:gap-6 p-2 sm:px-4'>
//                         <li className='text-sm sm:text-base'>
//                             <a href='/shop' className='flex items-center'>
//                                 Shop <KeyboardArrowDownOutlinedIcon />
//                             </a>
//                         </li>
//                         <li className='text-sm sm:text-base'>On Sale</li>
//                         <li className='text-sm sm:text-base'>New Arrivals</li>
//                         <li className='text-sm sm:text-base'>Brands</li>
//                     </ul>
//                 </div>

//                 {/* Search Box */}
//                 <div className='w-full sm:w-[35%] lg:w-[30%]'>
//                     <ul className='flex items-center px-2 bg-[#F0F0F0] rounded-3xl border'>
//                         <li className='text-lg'>
//                             <SearchOutlinedIcon />
//                         </li>
//                         <li className='flex-1'>
//                             <input
//                                 type="search"
//                                 className='w-full p-2 px-4 bg-[#F0F0F0] rounded-3xl focus:outline-none'
//                                 placeholder='Search...'
//                             />
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Icon Buttons */}
//                 <div className='w-full sm:w-auto'>
//                     <ul className='flex justify-between gap-4 sm:gap-6 p-2 px-4 text-black'>
//                         <li className='text-lg'>
//                             <ShoppingCartOutlinedIcon />
//                         </li>
//                         <li className='text-lg'>
//                             <AccountCircleOutlinedIcon />
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

'use client'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import React from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import LeftDrawer from '../leftDrawer';
import Link from 'next/link';

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <div className='flex justify-center items-center text-[#404040] flex-col'>
            {/* Sign Up Bar */}
            <div className='w-full flex items-center justify-between bg-black p-2 text-white'>
                <h1 className='text-xs sm:text-sm md:text-base'>
                    Sign up and get 20% off to your first order. <span className='underline cursor-pointer'>Sign Up Now</span>
                </h1>
                <span className='text-lg cursor-pointer'>
                    <ClearOutlinedIcon />
                </span>
            </div>



            {/* Main Header */}
            <div className='w-full sm:w-[80%] flex sm:flex-row justify-between py-10 items-center'>

                {/* Drawer for small screens */}
                <LeftDrawer open={open} toggleDrawer={toggleDrawer}>
                    <div className='w-full sm:w-auto'>
                        <ul className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 p-2 sm:px-4'>
                            <li className='text-sm sm:text-base'>
                            <a href='/shop' className='flex items-center'>
                                Shop <KeyboardArrowDownOutlinedIcon />
                            </a>
                            </li>
                            <li className='text-sm sm:text-base'>On Sale</li>
                            <li className='text-sm sm:text-base'>New Arrivals</li>
                            <li className='text-sm sm:text-base'>Brands</li>
                        </ul>
                    </div>
                </LeftDrawer>

                {/* Menu Icon Button for small screens */}
                <Button onClick={toggleDrawer(true)} className="text-black block md:hidden">
                    <MenuIcon />
                </Button>


                {/* Logo */}
                <div>
                    <Link href='/'><h1 className='text-2xl font-extrabold text-black sm:text-3xl'>SHOP.CO</h1></Link>
                </div>



                {/* Navigation Menu */}
                <div className='w-full sm:w-auto'>
                    <ul className='hidden md:flex items-center flex-col sm:flex-row justify-between gap-4 sm:gap-6 p-2 sm:px-4'>
                        <li className='text-sm sm:text-base'>
                            <a href='/shop' className='flex items-center'>
                                Shop <KeyboardArrowDownOutlinedIcon />
                            </a>
                        </li>
                        <li className='text-sm sm:text-base'>On Sale</li>
                        <li className='text-sm sm:text-base'>New Arrivals</li>
                        <li className='text-sm sm:text-base'>Brands</li>
                    </ul>
                </div>

                {/* Search Box */}
                <div className='w-full sm:w-[35%] lg:w-[30%] flex justify-end'>
                    <ul className='flex items-center px-2 md:bg-[#F0F0F0] rounded-3xl'>
                        <li className='text-lg'>
                            <SearchOutlinedIcon />
                        </li>
                        <li className='flex-1 hidden sm:block'>
                            <input
                                type="search"
                                className='w-full p-2 px-4 bg-[#F0F0F0] rounded-3xl focus:outline-none'
                                placeholder='Search...'
                            />
                        </li>
                    </ul>
                </div>

                {/* Icon Buttons */}
                <div className='w-full sm:w-auto'>
                    <ul className='flex gap-4 sm:gap-10 p-2 px-2 text-black'>
                        <li className='text-lg'>
                            <Link href='/cart'><ShoppingCartOutlinedIcon /></Link>
                        </li>
                        <li className='text-lg'>
                            <AccountCircleOutlinedIcon />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

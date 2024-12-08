// 'use client'
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import paymentMethod from '@/images/paymentIcons.png'
// import Image from 'next/image';
// export default function Footer() {

//     const logo = [
//         {
//             logo: "SHOP.CO",
//             p1: 'We have clothes that suits your style and',
//             p2: "which you're proud to wear. From",
//             p3: 'women to men',
//             TwitterIcon : <TwitterIcon/>,
//             FacebookOutlinedIcon : <FacebookOutlinedIcon/>,
//             InstagramIcon : <InstagramIcon/>,
//             GitHubIcon : <GitHubIcon/>

//         },

//     ]

//     const footerData = [{
//         heading: 'Company',
//         li1: 'Free eBooks',
//         li2: 'Development Tutorials',
//         li3: 'How to - Blog',
//         li4: 'Youtube Playlist'
//     },
//     {
//         heading: 'Company',
//         li1: 'About',
//         li2: 'Features',
//         li3: 'Works',
//         li4: 'Career'
//     },
//     {
//         heading: 'Help',
//         li1: 'Customer Support',
//         li2: 'Delivery Details',
//         li3: 'Terms & Condition',
//         li4: 'Privacy Policy'
//     },
//     {
//         heading: 'FAQ',
//         li1: 'Account',
//         li2: 'Manage Deliveries',
//         li3: 'Orders',
//         li4: 'Paymwnt'
//     }]
//     return (
//         <div className="flex justify-center bg-[#F0F0F0]">
//             <div className="w-[80%] py-10">
//                 <div className="flex bg-black py-10 px-8 justify-between items-center rounded-3xl">
//                     <div className="w-[70%] text-white">
//                         <h1 className='text-4xl font-extrabold'>STAY UPTO DATE ABOUT</h1>
//                         <h1 className='text-4xl font-extrabold'>OUR LATEST OFFERS</h1>
//                     </div>
//                     <div className="w-[30%] flex flex-col gap-4">
//                         <input type="text" className="w-full text -black p-2 rounded-3xl" />
//                         <button className="p-2 bg-white text-black w-full rounded-3xl">Subscribe To Newsletter</button>
//                     </div>
//                 </div>


//                 <div>
//                     <div className="flex justify-between py-10 border-b-2">
//                         <div className="w-[35%]">{logo.map((items, index) => {
//                             const { logo, p1, p2, p3,TwitterIcon,FacebookOutlinedIcon,InstagramIcon,GitHubIcon } = items;
//                             return (
//                                 <ul key={index} className="">
//                                     <li className="text-3xl font-extrabold mb-4">{logo}</li>
//                                     <li className="text-[#8D8D8D]">{p1}</li>
//                                     <li className="text-[#8D8D8D]">{p2}</li>
//                                     <li className="text-[#8D8D8D]">{p3}</li>
//                                     <li className="text-black mt-2">{TwitterIcon}{FacebookOutlinedIcon}{InstagramIcon}{GitHubIcon}</li>
//                                 </ul>
//                             )
//                         })}
//                         </div>
//                         <div className="flex justify-between w-[65%]">
//                             {footerData.map((items, index) => {
//                                 const { heading, li1, li2, li3, li4 } = items;
//                                 return (
//                                     <ul className="flex flex-col gap-3">
//                                         <li className="text-xl">{heading}</li>
//                                         <li className="text-[#8D8D8D]">{li1}</li>
//                                         <li className="text-[#8D8D8D]">{li2}</li>
//                                         <li className="text-[#8D8D8D]">{li3}</li>
//                                         <li className="text-[#8D8D8D]">{li4}</li>
//                                     </ul>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                     <div className='py-5'>
//                         <div className='flex justify-between'>
//                             <h3 className='text-sm text-[#8D8D8D]'>Shop.co © 2000-2023, All Rights Reserved</h3>
//                             <Image src={paymentMethod.src} alt="footer" width={200} height={100}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

'use client'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import paymentMethod from '@/images/paymentIcons.png'
import Image from 'next/image';

export default function Footer() {
    const logo = [
        {
            logo: "SHOP.CO",
            p1: 'We have clothes that suits your style and',
            p2: "which you're proud to wear. From",
            p3: 'women to men',
            TwitterIcon: <TwitterIcon />,
            FacebookOutlinedIcon: <FacebookOutlinedIcon />,
            InstagramIcon: <InstagramIcon />,
            GitHubIcon: <GitHubIcon />
        },
    ];

    const footerData = [
        {
            heading: 'Company',
            li1: 'Free eBooks',
            li2: 'Development Tutorials',
            li3: 'How to - Blog',
            li4: 'Youtube Playlist'
        },
        {
            heading: 'Company',
            li1: 'About',
            li2: 'Features',
            li3: 'Works',
            li4: 'Career'
        },
        {
            heading: 'Help',
            li1: 'Customer Support',
            li2: 'Delivery Details',
            li3: 'Terms & Condition',
            li4: 'Privacy Policy'
        },
        {
            heading: 'FAQ',
            li1: 'Account',
            li2: 'Manage Deliveries',
            li3: 'Orders',
            li4: 'Payment'
        }
    ];

    return (
        <div className="flex justify-center bg-[#F0F0F0]">
            <div className="w-[90%] sm:w-[80%] py-10">
                {/* Newsletter Section */}
                <div className="flex flex-col sm:flex-row bg-black py-10 px-8 justify-between items-center rounded-3xl">
                    <div className="w-full sm:w-[70%] text-white mb-4 sm:mb-0">
                        <h1 className='text-3xl sm:text-4xl font-extrabold'>STAY UPTO DATE ABOUT</h1>
                        <h1 className='text-3xl sm:text-4xl font-extrabold'>OUR LATEST OFFERS</h1>
                    </div>
                    <div className="w-full sm:w-[30%] flex flex-col gap-4">
                        <input
                            type="text"
                            className="w-full text-black p-2 rounded-3xl"
                            placeholder="Enter your email"
                        />
                        <button className="p-2 bg-white text-black w-full rounded-3xl">
                            Subscribe To Newsletter
                        </button>
                    </div>
                </div>

                {/* Footer Content Section */}
                <div className="mt-10">
                    <div className="flex flex-col sm:flex-row justify-between py-10 border-b-2">
                        {/* Logo Section */}
                        <div className="w-full sm:w-[35%] mb-10 sm:mb-0">
                            {logo.map((items, index) => {
                                const { logo, p1, p2, p3, TwitterIcon, FacebookOutlinedIcon, InstagramIcon, GitHubIcon } = items;
                                return (
                                    <ul key={index}>
                                        <li className="text-3xl font-extrabold mb-4">{logo}</li>
                                        <li className="text-[#8D8D8D]">{p1}</li>
                                        <li className="text-[#8D8D8D]">{p2}</li>
                                        <li className="text-[#8D8D8D]">{p3}</li>
                                        <li className="text-black mt-2 flex gap-4">
                                            {TwitterIcon}
                                            {FacebookOutlinedIcon}
                                            {InstagramIcon}
                                            {GitHubIcon}
                                        </li>
                                    </ul>
                                );
                            })}
                        </div>

                        {/* Footer Links Section */}
                        <div className="flex flex-col sm:flex-row justify-between w-full sm:w-[65%] gap-10 sm:gap-4">
                            {footerData.map((items, index) => {
                                const { heading, li1, li2, li3, li4 } = items;
                                return (
                                    <ul key={index} className="flex flex-col gap-3">
                                        <li className="text-xl font-semibold">{heading}</li>
                                        <li className="text-[#8D8D8D]">{li1}</li>
                                        <li className="text-[#8D8D8D]">{li2}</li>
                                        <li className="text-[#8D8D8D]">{li3}</li>
                                        <li className="text-[#8D8D8D]">{li4}</li>
                                    </ul>
                                );
                            })}
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className='py-5'>
                        <div className='flex flex-col sm:flex-row justify-between items-center'>
                            <h3 className='text-sm text-[#8D8D8D] mb-4 sm:mb-0'>
                                Shop.co © 2000-2023, All Rights Reserved
                            </h3>
                            <Image src={paymentMethod.src} alt="footer" width={200} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Link from 'next/link';


export default function Header() {
    return (
        <div className='flex justify-center items-center text-[#404040] flex-col'>
            <div className='w-[80%] flex items-center justify-between bg-black p-2 text-white'>
                <h1>
                    Sign up and get 20% off to your first order. <span className='underline'>Sign Up Now</span>
                </h1>
                <span>
                    <ClearOutlinedIcon />
                </span>
            </div>
            <div className='w-[80%] flex justify-between py-10 items-center border-b-2'>
                <div>
                    <h1 className='text-2xl font-extrabold text-black'>SHOP.CO</h1>
                </div>
                <div>
                    <ul className='flex justify-between gap-6 p-2 px-4'>
                    <li>
      
          <a href='/shop'>Shop <KeyboardArrowDownOutlinedIcon /></a>
      </li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                </div>
                <div className='w-[35%]'>
                    <ul className='flex border-2 w-96 items-center px-2 bg-[#F0F0F0] rounded-3xl'>
                        <li>
                            <SearchOutlinedIcon />
                        </li>
                        <li className='w-96'>
                            <input type="search" className='w-[100%] p-2 px-4 bg-[#F0F0F0]' />
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='flex justify-between gap-6 p-2 px-4 text-black'>
                        <li><ShoppingCartOutlinedIcon /></li>
                        <li><AccountCircleOutlinedIcon /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
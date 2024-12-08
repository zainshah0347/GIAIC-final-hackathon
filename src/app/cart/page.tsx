'use client';

import Image from 'next/image';
import { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Gradient Graphic T-shirt',
            price: 145,
            size: 'Large',
            color: 'White',
            image: '/images/product1.png',
            quantity: 1,
        },
        {
            id: 2,
            name: 'Checkered Shirt',
            price: 180,
            size: 'Medium',
            color: 'Red',
            image: '/images/product2.png',
            quantity: 1,
        },
        {
            id: 3,
            name: 'Skinny Fit Jeans',
            price: 240,
            size: 'Large',
            color: 'Blue',
            image: '/images/product3.png',
            quantity: 1,
        },
    ]);

    const discountPercentage = 20;
    const deliveryFee = 15;

    const handleQuantityChange = (id, type) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: type === 'increment' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
                      }
                    : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = (subtotal * discountPercentage) / 100;
    const total = subtotal - discount + deliveryFee;

    return (
        <div className="w-[80%] mx-auto flex flex-col lg:flex-row lg:justify-between lg:gap-8 py-8">
            {/* Cart Items Section */}
            <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                            <div className="w-20 h-20">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="font-semibold text-lg">{item.name}</h2>
                                <p className="text-gray-500">
                                    Size: {item.size} | Color: {item.color}
                                </p>
                                <p className="font-semibold">${item.price}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    className="px-2 py-1 bg-gray-200 rounded"
                                    onClick={() => handleQuantityChange(item.id, 'decrement')}
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    className="px-2 py-1 bg-gray-200 rounded"
                                    onClick={() => handleQuantityChange(item.id, 'increment')}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="text-red-500"
                                onClick={() => handleRemoveItem(item.id)}
                            >
                                <DeleteForeverIcon/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Order Summary Section */}
            <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6 mt-8 lg:mt-0">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Discount ({discountPercentage}%)</p>
                        <p className="text-red-500">-${discount.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Delivery Fee</p>
                        <p>${deliveryFee.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Add promo code"
                        className="w-full p-2 border rounded mb-4"
                    />
                    <button className="w-full bg-black text-white py-2 rounded">Apply</button>
                </div>
                <button className="w-full bg-black text-white py-2 mt-6 rounded">
                    Go to Checkout →
                </button>
            </div>

            
        </div>
    );
};

export default Cart;

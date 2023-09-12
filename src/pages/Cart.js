
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

    const { cart } = useSelector((state) => state);
    console.log(cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, cur) => acc + cur.price, 0));
    },[cart])

    return (
        <div>
            {
                cart.length > 0 ?
                    (<div className='w-full'>
                        <div className='w-11/12 max-w-[1200px] mx-auto flex mt-20 mb-8 gap-3'>
                            <div className='w-[68%]'>
                                {
                                    cart.map((item, index) => (
                                        <CartItem key={item.id} item={item} itemInd={index}></CartItem>
                                    ))
                                }
                            </div>

                            <div className='w-[30%] border-2 p-5 border-green-600 rounded-md flex flex-col justify-between'>
                                <div>
                                    <p className='text-slate-900 text-lg font-bold'>Your Cart</p>
                                    <p className='uppercase text-[25px] text-green-600 font-bold'>Summary</p>
                                    <p className='text-sm text-green-600 font-bold'><span className='text-slate-900 text-sm font-bold'>Total item: </span>{cart.length}</p>
                                </div>
                                <div>
                                    <p className='text-sm text-green-600 font-bold mb-3'><span className='text-slate-900 text-sm font-bold'>Total amount: </span>{totalAmount}</p>
                                    <button
                                    className='py-2 px-4 bg-green-700 text-sm font-bold text-white rounded-md hover:bg-green-500 transition-all duration-200'
                                    >Checkout Now</button>
                                </div>
                            </div>
                        </div>
                    </div>) :
                    (<div className='w-full h-screen flex items-center justify-center'>
                        <div className='flex items-center justify-between flex-col'>
                            <p className='text-slate-900 font-bold text-lg mb-2'>Cart is Empty!</p>
                            <NavLink to='/'>
                                <button className='py-2 px-4 rounded-md bg-green-700 text-white font-bold hover:bg-green-600 transition-all duration-200'>Shop Now</button>
                            </NavLink>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Cart
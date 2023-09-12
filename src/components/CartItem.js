
import React from 'react'
import {MdDeleteForever} from "react-icons/md"
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { remove } from '../redux/slices/cartSlice'

const CartItem = ({item, itemInd}) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from the cart");
    }

  return (
    <div className='flex items-center gap-8 border-b-2 border-green-600 mt-2 pb-3'>
        <div>
            <img src={item.image} alt='' width="300px"></img>
        </div>

        <div className='flex flex-col gap-2'>
            <p className='text-slate-800 text-lg font-bold'>{item.title}</p>
            <p className='text-gray-500 text-sm font-bold'>{item.description}</p>

            <div className='flex justify-between items-center pr-7 mb-3'>
                <p className='text-green-700'>{item.price}</p>
                <button
                onClick={removeFromCart}
                className='py-1 px-1 rounded-full bg-red-300 text-lg text-white'
                >
                    <MdDeleteForever></MdDeleteForever>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
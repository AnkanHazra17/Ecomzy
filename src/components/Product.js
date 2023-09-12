
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';

const Product = ({post}) => {

    const {cart} = useSelector((state) => state)
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post))
        toast.success("Item added to cart")
    }

    const removeFromCart = () => {
        dispatch(remove(post.id))
        toast.error("Item removed from cart")
    }



  return (
    <div className='w-[31%] rounded-md shadow-xl p-3 hover:scale-110 transition-all duration-200 bg-white'>
        <div className='h-[700px] flex flex-col items-center justify-evenly'>
            <p className='text-sm font-bold mb-2'>{post.title}</p>
            <p className='text-sm text-gray-600'>{post.description}</p>
            <img src={post.image} alt='' className='w-[200px]'></img>

            <div className='w-full flex justify-between px-6'>
                <p className='text-green-500'>{post.price}</p>
                {
                    cart.some((p) => p.id === post.id) ? 
                    (<button
                    onClick={removeFromCart}
                    className='py-2 px-4 bg-cyan-800 rounded-md text-white font-bold hover:bg-cyan-700 transition-all duration-200'
                    >
                        Remove item
                    </button>):
                    (<button
                    onClick={addToCart}
                    className='py-2 px-4 bg-cyan-800 rounded-md text-white font-bold hover:bg-cyan-700 transition-all duration-200'
                    >
                        Add to cart
                    </button>)
                }
            </div>
        </div>
    </div>
  )
}

export default Product
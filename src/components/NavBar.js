
import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {ImHome} from "react-icons/im"

const NavBar = () => {

    const {cart} = useSelector((state) => state);

  return (
    <div className='w-full bg-slate-900 fixed top-0 z-40'>
        <div className='flex w-11/12 max-w-[1200px] py-3 items-center justify-between mx-auto'>
            <NavLink to='/'>
                <img src='../logo.png' alt='' width={100}></img>
            </NavLink>
            <div className='flex items-center gap-5'>
                <NavLink to='/'>
                    <h2 className='text-white'><ImHome></ImHome></h2>
                </NavLink>

                <NavLink to='/cart'>
                    <div className='relative'>
                        <div className='absolute -top-2 -right-2'>
                            {
                                cart.length > 0 ?
                                (
                                    <div className='bg-green-500 h-4 w-4 flex items-center justify-center rounded-full'>
                                        <div className='text-white text-sm'>
                                            {cart.length}
                                        </div>
                                    </div>
                                ):
                                (<div></div>)
                            }
                        </div>
                        <FaShoppingCart className='text-white'></FaShoppingCart>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBar
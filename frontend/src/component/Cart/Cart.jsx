import { Divider } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'

const items = [1,1];
const Cart = () => {
  return (
    <div>
      <main className='lg:flex justify-between'>
        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
          {items.map((item) => <CartItem />)}
          <Divider/>
          <div className='billDetails px-5 text-sm'>
            <p className='font-extralight py-5'>Bill Details</p>
            <div className='flex justify-between text-gray-400'>
              <p>Item Total</p>
              <p>$64.95</p>
            </div>
            <div className='flex justify-between text-gray-400'>
              <p>Deliver Fee</p>
              <p>$5.00</p>
            </div>
            <div className='flex justify-between text-gray-400'>
              <p>GST and Restaurant Charges</p>
              <p>$8.12</p>
            </div>
            <Divider/>
          </div>
          <div>
            <p>Total Pay</p>
            <p>$78.07 </p>
          </div>
        </section> 
        <Divider orientation='vertical' flexItem/>
        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
          <div>
            <h1 className='text-center font-semibold text-2xl py-10'>
              Choose Delivery Address
            </h1>
            <div className='flex gap-5 flex-wrap justify-center'>

            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Cart
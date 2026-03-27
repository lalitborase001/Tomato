import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CartItem = () => {
  return (
    <div className='px-5'>
      <div className='lg:flex items-center lg:space-x-5'>
        <div>
          <img className="w-[5rem] h-[5rem] object-cover"
           src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38' 
           alt=''/>
        </div>
        <div className='flex items-center justify-between lg:w-[70%]'>
          <div className='space-y-1 lg:space-y-3 w-full'>
            <p>biryani</p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-1'>
                <IconButton>
                    <RemoveCircleOutlineIcon />
                </IconButton>
                <div className='w-5 h-5 text-xs flex items-center justify-center'>
                  {5}
                </div>
                <IconButton>
                    <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p>$12.99</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem
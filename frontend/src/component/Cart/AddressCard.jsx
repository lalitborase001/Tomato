import React from 'react'
import Cart from './Cart'
import HomeIcon from '@mui/icons-material/Home';
import { Card } from '@mui/material';

const AddressCard = ({item,showButton}) => {
  return (
    <Card className='flex gap-5 w-64 p-5' >
      <HomeIcon/>
      <div className='space-y-3 text-gray-500'>
        <h1 className='font-semibold text-lg text-white'>Home</h1>
        <p>
          123, Main Street, City, Country
        </p>
      </div>
    </Card>
  )
}

export default AddressCard
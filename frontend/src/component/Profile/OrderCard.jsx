import React from 'react'
import { Card, Button } from "@mui/material";

export const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16 object-cover rounded-md"
          src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707904777/uf11buz6lzj1lw0rrc3.jpg"
          alt="biryani"
        />

        <div>
          <p className="font-semibold text-lg">Biryani</p>
          <p className="text-gray-500">$35</p>
        </div>
      </div>

      <div>
        <Button  className="cursor-not-allowed">Completed</Button>
      </div>

    </Card>
  );
};

export default OrderCard
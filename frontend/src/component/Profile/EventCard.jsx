import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export const EventCard = () => {
  return (
    <div>
      <Card className="rounded-lg shadow-md">
        
        <CardMedia
          sx={{ height: 345 }}
          image="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="event"
        />

        <CardContent>
          <Typography variant="h6" className="font-semibold">
            Food Festival
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Enjoy delicious food and live music!
          </Typography>
          <div className="py-2 space-y-2">
            <p>📍 Mumbai</p>

            <p className="text-sm text-blue-500">
              February 14, 2024 12:00 AM
            </p>

            <p className="text-sm text-red-500">
              February 15, 2024 12:00 AM
            </p>
          </div>
        </CardContent>

      {false && 
        <CardActions>
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </CardActions>}

      </Card>
    </div>
  );
};
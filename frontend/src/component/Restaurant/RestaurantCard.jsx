import React from "react";
import { Card, Chip } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from "@mui/material";

const RestaurantCard = ({item}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)

  const handleAddToFavorite = () => {
    dispatch(addToFavorite({restaurantId: item.id,jwt}))
  }
  return (
    <Card className=" w-[18rem]">
      <div className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
          alt=""
        />
        <Chip
        size="small"
        className="absolute top-2 left-2"
        color={item.open?"success":"error"}
        label={item.open ? "Open" : "Closed"}
      />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">{item.name}</p>
          <p className="text-gray-500 text-sm">
            {item.description}
          </p>
        </div>
        <div>
          <IconButton>
            {isPresentInFavourites(auth.favourites,item) ? <FavoriteIcon  /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>

    </Card>

  );
};

export default RestaurantCard;
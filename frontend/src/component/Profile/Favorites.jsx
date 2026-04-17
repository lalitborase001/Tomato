import React from "react";
import RestaurantCard from "../Restaurant/RestaurantCard";

export default function Favorites() {
  const {auth} = useSelector(store => store)
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">
        My Favorites
      </h1>

      <div className="flex flex-wrap justify-center gap-5">
        {auth.favourites.map((item, index) => (
          <RestaurantCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}


package com.delivery.Application.service;

import com.delivery.Application.dto.RestaurantDto;
import com.delivery.Application.model.Restaurant;
import com.delivery.Application.model.User;
import com.delivery.Application.request.CreateRestaurantRequest;

import java.util.List;

public interface RestaurantService {
    public Restaurant createRestaurant(CreateRestaurantRequest req, User user);

    public Restaurant updateRestaurant(Long restaurantId,CreateRestaurantRequest updateRestaurant) throws Exception;

    public void deleteRestaurant(Long restaurantId) throws Exception;

    public List<Restaurant>  getAllRestaurant();

    public List<Restaurant> searchRestaurant(String keyword);

    public Restaurant findRestaurantById(Long id)throws Exception;

    public Restaurant getRestaurantByUserId(Long userID) throws Exception;

    public RestaurantDto addToFavourites(Long restaurantId,User user)throws Exception;

    public Restaurant updateRestaurantStatus(Long id) throws Exception;


}

package com.delivery.Application.service;

import com.delivery.Application.model.Category;
import com.delivery.Application.model.Restaurant;
import com.delivery.Application.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImp implements CategoryService{

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(String name, Long userId) throws Exception {
        Restaurant restaurant = restaurantService.getRestaurantByUserId(userId);
        Category category = new Category();
        category.setName(name);
        category.setRestaurant(restaurant);
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> findCategoryByRestaurantId(Long Id) throws Exception {
        Restaurant restaurant = restaurantService.getRestaurantByUserId(Id);
        return categoryRepository.findByRestaurantId(Id);
    }

    @Override
    public Category findCategoryById(Long Id) throws Exception {
        Optional<Category> optionalCategory = categoryRepository.findById(Id);
        if (optionalCategory.isEmpty()){
            throw new Exception("category not found");
        }

        return optionalCategory.get();
    }
}

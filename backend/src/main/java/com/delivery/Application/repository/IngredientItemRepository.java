package com.delivery.Application.repository;

import com.delivery.Application.model.IngredientsItem;
import com.delivery.Application.service.IngredientsService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientItemRepository extends JpaRepository<IngredientsItem,Long> {

    List<IngredientsItem> findByRestaurantId(Long id);
}

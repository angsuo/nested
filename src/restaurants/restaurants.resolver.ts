import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantInputs } from './dto/createrestaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsService } from './restaurants.service';

@Resolver()
export class RestaurantsResolver {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Query(() => [Restaurant])
  getAllRestaurants(){
    return this.restaurantsService.findAll()
  }

  @Mutation(() => Restaurant)
  createRestaurant(@Args("createRestaurantInputs") createRestaurantInputs: CreateRestaurantInputs){
    return this.restaurantsService.create(createRestaurantInputs);
  }
}

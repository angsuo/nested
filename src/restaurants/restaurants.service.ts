import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantInputs } from './dto/createrestaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantsService {
    constructor(@InjectRepository(Restaurant) private restaurantsRepo: Repository<Restaurant>) {}

    async findAll(): Promise<Restaurant[]> {
        return this.restaurantsRepo.find();
    }

    async create(createRestaurantInput: CreateRestaurantInputs): Promise<Restaurant>{
        const newResto = this.restaurantsRepo.create(createRestaurantInput);
        return this.restaurantsRepo.save(newResto);
    }
}

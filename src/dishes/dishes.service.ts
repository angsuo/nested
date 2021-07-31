import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dish } from './dish.entity';
import { CreateDishInput } from './dto/createDish.dto';

@Injectable()
export class DishesService {
    constructor(@InjectRepository(Dish) private dishRepository: Repository<Dish>){}

    async getAll(): Promise<Dish[]>{
        return await this.dishRepository.find();
    }

    async create(createDishInput: CreateDishInput): Promise<Dish>{
        const newDish = this.dishRepository.create(createDishInput)

        return await this.dishRepository.save(newDish);
    }
}

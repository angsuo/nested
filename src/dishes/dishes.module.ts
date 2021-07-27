import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './dish.entity';
import { DishesService } from './dishes.service';
import { DishesResolver } from './dishes.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Dish])],
    providers: [DishesService, DishesResolver]
})
export class DishesModule {}

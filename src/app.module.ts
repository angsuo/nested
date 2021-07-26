import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { OpeningHoursModule } from './opening-hours/opening-hours.module';
import { DishesModule } from './dishes/dishes.module';
import { KeywordsModule } from './keywords/keywords.module';

@Module({
  imports: [RestaurantsModule, GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
  TypeOrmModule.forRoot({
    type:'sqlite',
    database:'nested-db',
    entities:['dist/**/*.entity{.ts,.js}'],
    synchronize:true
  }),
  OpeningHoursModule,
  DishesModule,
  KeywordsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

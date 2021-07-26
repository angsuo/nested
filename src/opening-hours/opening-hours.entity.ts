import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Restaurant } from "../restaurants/restaurant.entity";

@ObjectType()
@Entity()
export class OpeningHours {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field(() => [Int])
    @Column({type:'int', array:true})
    days: number[];

    @Field(() => Int)
    @Column({type: 'int'})
    startTime: number;

    @Field(() => Int)
    @Column({type: 'int'})
    endTime: number;

    @Column()
    @Field()
    restaurantId:string;
    
    @ManyToOne(() => Restaurant, restaurant => restaurant.openingHours, {onDelete: 'CASCADE'})
    @Field(() => Restaurant)
    restaurant: Restaurant;
}
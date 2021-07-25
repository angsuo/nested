import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Dish } from "./dish.entity";

@ObjectType()
@Entity()
export class Keyword {
    @PrimaryGeneratedColumn("uuid")
    @Field()
    id: string;

    @Column()
    @Field()
    name: string;

    @ManyToMany(() => Dish, dish => dish.keywords, {nullable: true})
    @Field(() => [Dish], {nullable: true})
    dishes: Dish[];
}
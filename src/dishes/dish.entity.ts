import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Keyword } from "../keywords/keyword.entity";

@ObjectType()
@Entity()
export class Dish {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column()
    name: string;

    @ManyToMany(() => Keyword, keyword => keyword.dishes, {nullable: true})
    @Field(() => [Keyword], {nullable: true})
    keywords: Keyword[];
}
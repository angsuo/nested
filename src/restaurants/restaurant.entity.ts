import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {OpeningHours} from "../opening-hours/opening-hours.entity";

@Entity()
@ObjectType()
export class Restaurant {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column()
    name: string;

    @Field({nullable:true})
    @Column({nullable: true})
    description?: string;

    @OneToMany(() => OpeningHours, openingHours => openingHours.restaurant)
    @Field(() => [OpeningHours])
    openingHours: OpeningHours[];

}
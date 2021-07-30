import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateOpeningHoursInput{
    @Field(() => [Int])
    days: number[];

    @Field(() => Int)
    startTime: number;

    @Field(() => Int)
    endTime: number;

    @Field()
    restaurantId:string;
}
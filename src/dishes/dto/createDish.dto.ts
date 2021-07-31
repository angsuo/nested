import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateDishInput{
    @Field()
    name: string;
}
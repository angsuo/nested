import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRestaurantInputs{
    @Field()
    name: string;

    @Field({nullable:true})
    description?: string;
}
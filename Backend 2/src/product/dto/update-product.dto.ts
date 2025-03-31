import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CreateProductDto } from "./create-product.dto";
import { PartialType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsNumber ({}, {message: 'O id não ode ser vazio.'})
    @Type(() => Number)
    readonly id: bigint;
}
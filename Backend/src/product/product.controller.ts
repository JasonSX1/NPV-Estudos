import { Body, Controller, Delete, Get, Param, Patch, Post, Request } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('Product')
export class ProductController {
    constructor(private readonly ProductService: ProductService) {}

    @Get('pages')
    async pagination(@Request() request) {
        return await this.ProductService.paginate(
            request.query.page ?? 0,
            request.query.size ?? 10,
            request.query.sort ?? 'name',
            request.query.order ?? 'asc',
            request.query.search ?? ''
        );
    }

    @Post()
    async create(@Body() createProductDTO:CreateProductDto){
        return await this.ProductService.create(createProductDTO);
    }

    @Patch(':id')
    async update(@Param('id') id:string , @Body() updateProductDto:UpdateProductDto) {
        return await this.ProductService.update(BigInt(id), updateProductDto); 
    }

    @Delete(':id')
    async delete(@Param('id') id:string) {
        return await this.ProductService.remove(BigInt(id)); 
    }
}
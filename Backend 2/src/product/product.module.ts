import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './repository/product.repository';
import { ErrorsInterceptor } from 'src/error/errors.interceptor';

@Module({
    controllers: [ProductController],
    providers: [PrismaService, ProductService, ProductRepository],
})
export class ProductModule {}

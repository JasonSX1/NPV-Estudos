import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UnityController } from './unity.controller';
import { UnityService } from './unity.service';
import { UnityRepository } from './repository/unity.repository';
import { ErrorsInterceptor } from 'src/error/errors.interceptor';

@Module({
    controllers: [UnityController],
    providers: [PrismaService, UnityService, UnityRepository],
})
export class UnityModule {}

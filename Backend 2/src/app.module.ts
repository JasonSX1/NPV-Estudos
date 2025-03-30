import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnityController } from './unity/unity.controller';
import { UnityService } from './unity/unity.service';
import { UnityModule } from './unity/unity.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UnityModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }

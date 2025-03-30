import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { UnityService } from './unity.service';
import { CreateUnityDto } from './dto/create-unity.dto';

@Controller('unity')
export class UnityController {
    constructor(private readonly unityService: UnityService) {}

    @Get('pages')
    async pagination(@Request() request) {
        return await this.unityService.paginate(
            request.query.page ?? 0,
            request.query.size ?? 10,
            request.query.sort ?? 'name',
            request.query.order ?? 'asc',
            request.query.search ?? ''
        );
    }
    

    @Post()
    async create(@Body() createUnityDTO:CreateUnityDto){
        return await this.unityService.create(createUnityDTO);
    }
}
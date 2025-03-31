import { Body, Controller, Delete, Get, Param, Patch, Post, Request } from '@nestjs/common';
import { UnityService } from './unity.service';
import { CreateUnityDto } from './dto/create-unity.dto';
import { UpdateUnityDto } from './dto/update-unity.dto';

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
    
    @Get(':id')
    async findById(@Param('id') id:string) {
        return await this.unityService.findById(BigInt(id)); 
    }

    @Post()
    async create(@Body() createUnityDTO:CreateUnityDto){
        return await this.unityService.create(createUnityDTO);
    }

    @Patch(':id')
    async update(@Param('id') id:string , @Body() updateUnityDto:UpdateUnityDto) {
        return await this.unityService.update(BigInt(id), updateUnityDto); 
    }

    @Delete(':id')
    async delete(@Param('id') id:string) {
        return await this.unityService.remove(BigInt(id)); 
    }
}
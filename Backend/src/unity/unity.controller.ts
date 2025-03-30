import { Controller } from '@nestjs/common';
import { UnityService } from './unity.service';

@Controller('unity')
export class UnityController {
    constructor(private readonly unityService:UnityService) {}

    @Get('pages?')
    pagination(@Request()request) {
        return await this.unityService.paginate();
    }
}   

import { Injectable } from '@nestjs/common';
import { UnityRepository } from './repository/unity.repository';

@Injectable()
export class UnityService {
    constructor(private readonly repository: UnityRepository) { }

    paginate(
        page: number,
        size: number, 
        sort: string, 
        order: string, 
        search: string
    ) {
        const {results, totalItems} = await this.repository.paginate(page, size, sort, order, search);
        const totalPages = Math.ceil
     }
}

import { Injectable } from '@nestjs/common';
import { UnityRepository } from './repository/unity.repository';
import { CreateUnityDto } from './dto/create-unity.dto';
import { UpdateUnityDto } from './dto/update-unity.dto';

@Injectable()
export class UnityService {
    constructor(private readonly repository: UnityRepository) { } // Injecting the UnityRepository to access database methods

    async paginate(
        page: number,
        size: number,
        sort: string,
        order: string,
        search: string
    ) {
        const { results, totalItems } = await this.repository.paginate(
            page,
            size,
            sort,
            order,
            search
        );
        const totalPages = Math.ceil(totalItems / size) - 1;
        const currentPage = Number(page);
        return {
            results,
            pagination: {
                length: totalItems,
                size: size,
                lastPage: totalPages,
                page: currentPage,
                startIndex: (currentPage * size),
                endIndex: size + (size - 1),
            }
        }
    }

    async findById(id:bigint) {
        return await this.repository.findById(id);
    }

    async create(createUnityDTO: CreateUnityDto) {
        return await this.repository.create(createUnityDTO);
    }

    async update(id:bigint, updateUnityDTO: UpdateUnityDto){
        return await this.repository.update(updateUnityDTO.id, updateUnityDTO);
    }

    async remove(id:bigint) {
        return await this.repository.remove(id);
    }
}
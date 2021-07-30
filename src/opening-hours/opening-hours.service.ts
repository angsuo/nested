import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOpeningHoursInput } from './dto/createOpeningHours.dto';
import { OpeningHours } from './opening-hours.entity';

@Injectable()
export class OpeningHoursService {
    constructor(@InjectRepository(OpeningHours) private openingHoursRepo: Repository<OpeningHours>){}

    async getAll(): Promise<OpeningHours[]>{
        return await this.openingHoursRepo.find();
    }

    async createOne(createOpeningHoursInput: CreateOpeningHoursInput): Promise<OpeningHours>{
        const newOH = this.openingHoursRepo.create(createOpeningHoursInput);
        return await this.openingHoursRepo.save(newOH)
    }
}

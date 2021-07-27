import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpeningHours } from './opening-hours.entity';
import { OpeningHoursService } from './opening-hours.service';
import { OpeningHoursResolver } from './opening-hours.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([OpeningHours])],
    providers: [OpeningHoursService, OpeningHoursResolver]
})
export class OpeningHoursModule {}

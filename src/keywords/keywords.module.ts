import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Keyword } from './keyword.entity';
import { KeywordsService } from './keywords.service';
import { KeywordsResolver } from './keywords.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Keyword])],
    providers: [KeywordsService, KeywordsResolver]
})
export class KeywordsModule {}

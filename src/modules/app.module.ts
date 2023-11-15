import { typeormConfig } from '@config/ormconfig';
import { LoggerModule } from '@infrastructure/logger/logger.module';
import { ProductModule } from '@modules/catalog/catalog.module';
import { CategoryModule } from '@modules/category/category.module';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestEventModule } from 'nest-event';

const modules = [ProductModule, CategoryModule];

@Module({
  imports: [
    LoggerModule,
    TerminusModule,
    TypeOrmModule.forRoot(typeormConfig),
    NestEventModule,
    ...modules,
  ],
})
export class AppModule {}

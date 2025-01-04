import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsModule } from './locations/locations.module';  // Import LocationsModule
import { Location } from './locations/entities/location.entity';  // Import Location entity
import { LoggerService } from './common/logging/logger.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'postgres',
      entities: [Location],
      synchronize: true, // For dev environments, set to true to automatically create DB tables
    }),
    LocationsModule,  // Import LocationsModule here
  ],
  providers: [LoggerService],
})
export class AppModule {}

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from '../common/dto/create-location.dto';
import { Location } from './entities/location.entity';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  async create(@Body() createLocationDto: CreateLocationDto): Promise<Location> {
    return this.locationsService.create(createLocationDto);
  }

  @Get()
  async findAll(): Promise<Location[]> {
    return this.locationsService.findAll();
  }

  @Get(':location_name')
  async findOne(@Param('location_name') location_name: string): Promise<Location> {
    return this.locationsService.findOne(location_name);
  }

  @Put(':location_name')
  async update(@Param('location_name') location_name: string, @Body() updateLocationDto: CreateLocationDto): Promise<Location> {
    return this.locationsService.update(location_name, updateLocationDto);
  }

  @Delete(':location_name')
  async remove(@Param('location_name') location_name: string): Promise<void> {
    return this.locationsService.remove(location_name);
  }
}

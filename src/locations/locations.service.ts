import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { CreateLocationDto } from '../common/dto/create-location.dto';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location = this.locationRepository.create(createLocationDto);
    return await this.locationRepository.save(location);
  }

  async findAll(): Promise<Location[]> {
    return await this.locationRepository.find({ relations: ['parent_location', 'children'] });
  }

  async findOne(location_name: string): Promise<Location> {
    const location = await this.locationRepository.findOne({ where: { location_name }, relations: ['parent_location', 'children'] });
    if (!location) {
      throw new NotFoundException('Location not found');
    }
    return location;
  }

  async update(location_name: string, updateLocationDto: CreateLocationDto): Promise<Location> {
    const location = await this.findOne(location_name);
    Object.assign(location, updateLocationDto);
    return await this.locationRepository.save(location);
  }

  async remove(location_name: string,): Promise<void> {
    const location = await this.findOne(location_name);
    await this.locationRepository.remove(location);
  }
}

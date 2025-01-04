import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { CreateLocationDto } from '../common/dto/create-location.dto';
export declare class LocationsService {
    private readonly locationRepository;
    constructor(locationRepository: Repository<Location>);
    create(createLocationDto: CreateLocationDto): Promise<Location>;
    findAll(): Promise<Location[]>;
    findOne(location_name: string): Promise<Location>;
    update(location_name: string, updateLocationDto: CreateLocationDto): Promise<Location>;
    remove(location_name: string): Promise<void>;
}

import { LocationsService } from './locations.service';
import { CreateLocationDto } from '../common/dto/create-location.dto';
import { Location } from './entities/location.entity';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    create(createLocationDto: CreateLocationDto): Promise<Location>;
    findAll(): Promise<Location[]>;
    findOne(location_name: string): Promise<Location>;
    update(location_name: string, updateLocationDto: CreateLocationDto): Promise<Location>;
    remove(location_name: string): Promise<void>;
}

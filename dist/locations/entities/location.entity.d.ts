export declare class Location {
    id: number;
    building: string;
    location_name: string;
    location_number: string;
    area: number;
    parent_location: Location;
    children: Location[];
}

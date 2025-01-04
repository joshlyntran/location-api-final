import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  building: string;

  @IsString()
  @IsNotEmpty()
  location_name: string;

  @IsString()
  @IsNotEmpty()
  location_number: string;

  @IsNumber()
  area: number;

  parent_location_id?: number; // Optional parent location
}

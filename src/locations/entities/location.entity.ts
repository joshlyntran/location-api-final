import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm'; // Corrected import here

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  building: string;

  @Column()
  location_name: string;

  @Column()
  location_number: string;

  @Column('float')
  area: number;

  @ManyToOne(() => Location, (location) => location.children)
  @JoinColumn({ name: 'parent_location_id' })
  parent_location: Location;

  @OneToMany(() => Location, (location) => location.parent_location)
  children: Location[];
}

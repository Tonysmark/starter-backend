import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique } from 'typeorm';

import { Exclude } from 'class-transformer';
@Entity()
@Unique(['username', 'email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ type: 'varchar', length: 64 })
    username: string;

    @Column({ type: 'varchar', length: 500, default: 'default icon url' })
    icon: string;

    @Exclude()
    @Column({ type: 'varchar', length: 64 })
    password: string;

    @Column({ type: 'varchar', length: 100 })
    email: string;

    @Column({ type: 'datetime' })
    create_time: Date;

    @Column({ type: 'datetime' })
    update_time: Date;

    @Exclude()
    @Column({ type: 'tinyint', default: false })
    is_deleted: boolean;

    constructor() {
        super();
        this.create_time = new Date();
        this.update_time = new Date();
    }
}

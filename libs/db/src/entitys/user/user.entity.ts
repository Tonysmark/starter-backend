import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique } from 'typeorm';

import { Exclude } from 'class-transformer';
@Entity()
@Unique(['username', 'email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ type: 'varchar', length: 64 })
    username: string;

    @Column({ type: 'varchar', length: 500 })
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
    @Column({ type: 'tinyint' })
    is_deleted: boolean;

    constructor(username, email, password) {
        super();
        this.username = username;
        this.email = email;
        this.password = password;
        this.create_time = new Date();
        this.update_time = new Date();
        this.is_deleted = false; // boolean 自动转换为 tinyint
        this.icon = 'default icon url';
    }
}

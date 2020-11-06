import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export default class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 500 })
    description: string;

    @Column({ type: 'varchar', length: 11 })
    user_count: string;

    @Column({ type: 'datetime' })
    created_time: string;

    @Column({ type: 'varchar', length: 20 })
    created_user_id: string;

    @Column({ type: 'datetime' })
    modified_time: string;

    @Column({ type: 'varchar', length: 20 })
    modified_user_id: string;

    @Column({ type: 'bigint' })
    pid: number;

    @Column({ type: 'bigint' })
    group_id: number;

    @Column({ type: 'tinyint' })
    is_disabled: boolean;
}

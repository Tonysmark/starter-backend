import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class UserLoginLog extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ type: 'bigint', length: 20 })
    user_id: number;

    @Column()
    create_time: Date;

    @Column({ type: 'varchar', length: 64 })
    ip: string;

    @Column({ type: 'varchar', length: 100 })
    address: string;

    @Column({ type: 'varchar', length: 100 })
    user_agent: string;
}

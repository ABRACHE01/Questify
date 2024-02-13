
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class Question extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        comment: 'the question title',
        type: 'varchar',
    })
    title: string;

    @Column({
        comment: 'the question content',
        type: 'varchar',
    })
    content: string;

    @Column({
        comment: 'the question content',
        type: 'varchar',
    })
    location: string;

    @Column({
        comment: 'is deleted',
        type: 'boolean',
        default: false,
    })
    isDeleted: boolean;



    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

}

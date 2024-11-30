import { User } from '@prisma/client';
export declare class UserEntity implements User {
    constructor(partial: Partial<UserEntity>);
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    email: string;
    password: string;
}

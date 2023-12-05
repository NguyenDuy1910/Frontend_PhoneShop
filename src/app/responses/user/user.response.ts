import { Role } from "src/app/models/role";

export interface UserResponse {
    id: number;
    fullName: string;
    address:string;
    active: boolean;
    dateOfBirth: Date;
    facebookAccountId: number;
    googleAccountId: number;
    role: Role;    
}
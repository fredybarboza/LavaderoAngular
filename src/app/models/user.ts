export interface Collection {
    
    users: User[];
    message: string;
}

export interface Entity {
    
    user: User;
    message: string;
}

export interface User {
    
    id?: number;
    id_usuario: string;
    nombre: string;
    apellido: string;
    ci: string;
    direccion: string;
    celular: string;
    created_at?: string;
    updated_at?: string;
}
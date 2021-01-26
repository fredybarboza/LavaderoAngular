export interface Collection {
    
    vehiculos: Vehiculo[];
    message: string;
}

export interface Entity {
    
    vehiculos: Vehiculo;
    message: string;
}

export interface Vehiculo {
    
    id?: number;
    id_usuario: string;
    marca: string;
    modelo: string,
    color: string,
    matricula: string,
    created_at?: string;
    updated_at?: string;
}
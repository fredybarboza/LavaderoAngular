export interface Collection {
    
    empleados: Empleado[];
    message: string;
}

export interface Entity {
    
    empleado: Empleado;
    message: string;
}

export interface Empleado {
    
    id?: number;
    nombre: string;
    apellido: string;
    ci: string;
    created_at?: string;
    updated_at?: string;
}
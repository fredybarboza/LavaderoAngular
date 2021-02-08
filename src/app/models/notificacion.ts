export interface Coleccion {
    
    notificaciones: Notificacion[];
    message: string;
}

export interface Entity {
    
    notificaciones: Notificacion;
    message: string;
}

export interface Notificacion {
    
    id?: number;
    id_usuario: string;
    id_vehiculo: string;
    mensaje: string;
    estado?: string,
    servicio: string,
    created_at?: string;
    updated_at?: string;
}
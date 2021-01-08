export interface Collection {
    
    pedidos: Pedido[];
    message: string;
}

export interface Entity {
    
    pedidos: Pedido;
    message: string;
}

export interface Pedido {
    
    id?: number;
    id_servicio: string;
    monto: string;
    nombre: string,
    ci: string,
    descripcion_vehiculo: string,
    color_vehiculo: string,
    chapa_vehiculo: string,
    estado?: string,
    id_empleado_encargado: string,
    created_at?: string;
    updated_at?: string;
}
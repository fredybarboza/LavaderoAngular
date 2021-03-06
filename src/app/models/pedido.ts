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
    id_usuario: string;
    id_vehiculo: string;
    id_servicio: string;
    monto: string;
    estado?: string,
    id_empleado_encargado: string,
    created_at?: string;
    updated_at?: string;
}
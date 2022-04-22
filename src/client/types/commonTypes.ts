

export type typeFormat = 'number' | 'percent' | 'currency';

export type PrimitiveType = string | symbol | number | boolean;

export type STATUS_ORDERS = 'NEW' | 'CONFIRMED' | 'INVOICED' | 'PAID' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';

interface DateConstructor {
    new(): Date;
}


export interface Order {
    id:           string;
    createdAt:  Date;
    updatedAt:  Date;
    orderStatus:  STATUS_ORDERS;
    orderProduct: OrderProduct[];
    totalAmount:  number;
    orderRetail:  OrderRetailClass;
    orderBrand:   OrderBrandClass;
    payment:      Payment;
    shippingId:   number;
}

export interface OrderRetailClass {
    id:       string;
    nickname: string;
    cuit: number;
    address: string,
    tax_status: string,
    fullname: string
}

export interface OrderBrandClass {
    id:       string;
    nickname: string;
}


export interface OrderProduct {
    id:        string;
    title:     string;
    quantity:  number;
    unitPrice: number;
}

export interface Payment {
    status:      string;
    withholding: Withholding[];
}

export interface Withholding {
    type: string;
}

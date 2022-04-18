export interface ProductInterface {
    title:                   string;
    title_description:       string;
    image:                   string;
    quantity_package:        number;
    thumbnail:               string;
    category:                string;
    product_id:              string;
    quantity:                number;
    unit:                    string;
    prices:                  Prices;
    margin:                  number;
    min_q_sale:              number;
    technical_specification: TechnicalSpecification;
    available_stock:         number;
    seled_units:             number;
}

export interface Prices {
    original_price:    number;
    discount_price:    number;
    quantity_discount: QuantityDiscount;
    reference_prices:  ReferencePrices;
}

export interface QuantityDiscount {
    base_quantity: number;
    discount:      number;
}

export interface ReferencePrices {
    average_selling_price: number;
    mark_up:               number;
}

export interface TechnicalSpecification {
    product_segmentation: string;
    description:          string;
}

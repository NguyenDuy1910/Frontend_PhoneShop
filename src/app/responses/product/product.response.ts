import { Product } from "src/app/models/product";
import { ProductImage } from "src/app/models/product.image";
export interface ProductResponse{
    id: number;
    name: string;
    price: number;
    thumbnail: string;
    description: string;
    category_id: number;
    url: string;
    product_images: ProductImage[];
    quantity:number;
}
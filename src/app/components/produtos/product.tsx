import { ProductType } from "@/types/ProductType";
import ProductImage from "./productImage";

type productProps = {
    product: ProductType
}
export default function product({ product }: productProps) {

    return (
        <div className="flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300">
            <div className="relative max-h-72 flex-1">
                <ProductImage product={product} fill />
            </div>
            <div className="flex justify-between font-bold my-3">
                <p className="w-40 truncate">
                {product.title}
                </p>
                <p className="text-md text-teal-600">
                    {product.price}
                </p>
            </div>
            <button className="rounded-md bg-teal-600 text-white p-3.5 py-2.5 text-sm text-center">Adicionar ao carrinho</button>
        </div>
    );
}

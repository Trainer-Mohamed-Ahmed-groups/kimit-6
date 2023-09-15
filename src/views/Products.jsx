import { useEffect, useState } from "react"
import SingleProduct from "../components/SingleProduct";

export default function Products() {

    const [products, setProducts] = useState([]);

    let getProducts = () => {
        fetch("https://fakestoreapi.com/products").then(json => json.json()).then(res => setProducts(res))
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            <h2>Products</h2>
            {
                products.map(product =>
                    <SingleProduct key={product.id} productDetails={product} />
                )
            }
        </div>
    )
}

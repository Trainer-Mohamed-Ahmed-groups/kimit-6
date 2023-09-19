import { useEffect } from "react";
import { useState } from "react"
import { Container, Row } from "react-bootstrap";
import SingleProduct from "../components/SingleProduct";

export default function Products() {

    const [products, setProducts] = useState([]);

    let getAllProducts = () => {
        fetch("http://localhost:2222/products")
            .then(json => json.json())
            .then(res => setProducts(res))
    }

    useEffect(() => {
        getAllProducts()
    }, [])
    // json-server -w src/data/db.json --port 2222
    return (
        <div>
            <h2>Products</h2>
            <Container>
                <Row>
                    {
                        products.map(product =>
                            <SingleProduct product={product} key={product.id} />
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

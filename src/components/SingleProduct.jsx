import { Col, Button, Card } from "react-bootstrap";

export default function SingleProduct({ product }) {
    return (
        <Col className="p-2" lg="4" md="6" sm="12">
            <Card className="h-100">
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Price : {product.price}</Card.Text>
                    <div>Category : {product.category}</div>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

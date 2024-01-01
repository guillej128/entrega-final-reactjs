import { Card, Button, CardFooter } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <Card id="card">
      <Card.Img
        variant="top"
        src={product.image}
        className="image"
        style={{ maxWidth: "30%", height: "auto" }}
      
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <CardFooter id="button-container">
          <p className="description">{product.description}</p>
          <p className="price">$
           {product.price}</p>
           <Link to={`/products/${product.id}`}>
            <Button variant="dark">Ver</Button>
          </Link>
        </CardFooter>
      </Card.Body>
    </Card>
  );
};

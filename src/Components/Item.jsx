import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} width={200} />
        <Card.Body>
          <Card.Title>{item.Title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

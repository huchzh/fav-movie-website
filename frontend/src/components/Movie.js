import { Link } from 'react-router-dom'

//Boostrap
import { Card, Button, Row } from 'react-bootstrap';

const Movie = ({movieId, title, imageUrl, removeHandler}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Img src={imageUrl} alt={title}></Card.Img>
                <Card.Title className="movie__title"> {title} </Card.Title>
                <Row>
                    <Button as={Link} to={`/movie/${movieId}`} variant="outline-primary">Details</Button>
                    <Button onClick={() => removeHandler(movieId)} variant="outline-danger">Remove</Button>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Movie

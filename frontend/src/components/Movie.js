import { Link } from 'react-router-dom'

//Boostrap
import { Card, Button } from 'react-bootstrap';

const Movie = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Img src="https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg" alt="movie name"></Card.Img>
                <Card.Title className="movie__title"> Movie title </Card.Title>
                <Button as={Link} to={`/movie/${1111}`} variant="outline-primary">Details</Button>
            </Card.Body>
        </Card>
    )
}

export default Movie

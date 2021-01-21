import { Link } from 'react-router-dom'
import './MovieScreen.css'

//Bootstrap
import { Card, Container, Row, Col, Button, Image } from 'react-bootstrap';

const MovieScreen = () => {
    return (
        <div className='moviescreen'>
            <Card>
                <Card.Body>
                    <Card.Header as="h1" className="movie__title">Movie title</Card.Header>
                    <Container>
                        <Row>
                            <Col>
                                <Image fluid className="movie__title" src="https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg"></Image>
                            </Col>
                            <Col className='mt-5'>
                                <Card.Title>Movie Title</Card.Title>
                                <Card.Text className="movie__title">
                                    The title
                                </Card.Text>
                                <Card.Title>Movie Actors</Card.Title>
                                <Card.Text className="movie__actors">
                                    The actors
                                </Card.Text>
                                <Card.Title>Movie Description</Card.Title>
                                <Card.Text className="movie__description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Card.Text>
                                <Button variant="success">Add to Favorites</Button>
                                <Button variant="dark" as={Link} to={`/list`}>Back to Movie List</Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>

    )
}

export default MovieScreen

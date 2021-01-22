import './MovieScreen.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Actions
import { getMoviesDetails } from '../redux/actions/movieActions'
import { addToFavorites } from '../redux/actions/favActions'

//Bootstrap
import { Card, Container, Row, Col, Button, Image } from 'react-bootstrap';

const MovieScreen = ({match, history}) => {

    const dispatch = useDispatch();

    const movieDetails = useSelector(state => state.getMovieDetails);
    const {movie, loading, error} = movieDetails;

    useEffect(() => {
        if (movie && match.params.id !== movie._id) {
            dispatch(getMoviesDetails(match.params.id))
        }
    }, [dispatch, movie, match]); 

    const addToFavoritesHandler = () => {
        dispatch(addToFavorites(movie._id));
        history.push("/");
    }

    return (
        <div className='moviescreen'>
            <Card>
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                    <>
                    <Card.Body>
                        <Card.Header as="h1">{movie.title}</Card.Header>
                        <Container>
                            <Row>
                                <Col>
                                    <Image fluid src={movie.imageUrl} alt={movie.title}></Image>
                                </Col>
                                <Col className='mt-5'>
                                    <Card.Title>Movie Title</Card.Title>
                                    <Card.Text>{movie.title}</Card.Text>
                                    <Card.Title>Movie Director and Cast</Card.Title>
                                    <Card.Text>{movie.actors}</Card.Text>
                                    <Card.Title>Movie Description</Card.Title>
                                    <Card.Text>{movie.description}</Card.Text>
                                    <Button variant="success" onClick={addToFavoritesHandler}>Add to Favorites</Button>
                                    <Button variant="dark" as={Link} to={`/list`}>Back to Movie List</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                    </>
                )}
            </Card>
        </div>
    )
}

export default MovieScreen

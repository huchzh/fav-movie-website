import './HomeScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

//Components
import Movie from '../components/Movie';

//Actions
import { removeFromFavorites } from '../redux/actions/favActions';

const HomeScreen = () => {
    const dispatch = useDispatch();
    
    const removeFromFavoritesHandler = (id) => {
        dispatch(removeFromFavorites(id));
    };

    const favorites = useSelector(state => state.favorites);
    const { favItems } = favorites;

    return (
        <div className='homescreen'>
            <Container>
                <h1>Favorite Movies!</h1>
                <Row>
                    {favItems.length === 0 ? (
                        <div>
                            No favorite movies added <Link to="/list">Go to List</Link>
                        </div>
                    ) : favItems.map((movie) => 
                        <Col xs={6} sm={4} md={3}><Movie 
                            key={movie.movie}
                            movieId={movie.movie}
                            title={movie.title}
                            imageUrl={movie.imageUrl}
                            removeHandler={removeFromFavoritesHandler}
                        /></Col>)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default HomeScreen

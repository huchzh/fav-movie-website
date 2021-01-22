import './ListScreen.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Boostrap
import { Table } from 'react-bootstrap';

//Actions
import { getMovies as listMovies } from '../redux/actions/movieActions';

const ListScreen = () => {
    const dispatch = useDispatch();
    const getMovies = useSelector(state => state.getMovies);
    const {movies, loading, error } = getMovies;

    useEffect(() => {
        dispatch(listMovies())
    }, [dispatch]);

    const sorted_movies = movies.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

    return (
        <div className="listscreen">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Director and Cast</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    { loading ? (
                        <h2>Loading...</h2>
                    ) : error ? (
                        <h2>{error}</h2>
                    ) : (
                        sorted_movies.map((movie) => 
                            <tr>
                                <td>{movie.title}</td>
                                <td>{movie.actors}</td>
                                <td><Link to={`/movie/${movie._id}`}>Details</Link></td>
                            </tr>
                        )
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default ListScreen

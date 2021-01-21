import './ListScreen.css'
import { Link } from 'react-router-dom'

//Boostrap
import { Table } from 'react-bootstrap'

const ListScreen = () => {
    return (
        <div className="listscreen">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Actors</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Title 1</td>
                        <td>Actor 1</td>
                        <td><Link to={`/movie/${1111}`}>Details</Link></td>
                    </tr>
                    <tr>
                        <td>Title 2</td>
                        <td>Actor 2</td>
                        <td><Link to={`/movie/${1111}`}>Details</Link></td>
                    </tr>
                    <tr>
                        <td>Title 3</td>
                        <td>Actor 3</td>
                        <td><Link to={`/movie/${1111}`}>Details</Link></td>
                    </tr>
                    <tr>
                        <td>Title 4</td>
                        <td>Actor 4</td>
                        <td><Link to={`/movie/${1111}`}>Details</Link></td>
                    </tr>
                    <tr>
                        <td>Title 5</td>
                        <td>Actor 5</td>
                        <td><Link to={`/movie/${1111}`}>Details</Link></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ListScreen

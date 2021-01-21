import './HomeScreen.css';

//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

//Components
import Movie from '../components/Movie'

const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <Container>
                <Row>
                    <Col><Movie /></Col>
                    <Col><Movie /></Col>
                    <Col><Movie /></Col>
                    <Col><Movie /></Col>
                </Row>
                <Row>
                    <Col><Movie /></Col>
                    <Col><Movie /></Col>
                    <Col><Movie /></Col>
                    <Col><Movie /></Col>
                </Row>
                <Row>
                    <Col><Movie /></Col>
                    <Col><Movie /></Col>
                    <Col><Movie /></Col>
                    <Col><Movie /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeScreen
